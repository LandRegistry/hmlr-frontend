const glob = require("glob");
var fs = require("fs");
const nunjucks = require("nunjucks");

require.extensions[".njk"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

const componentsDirectory = "src/hmlr/components/";
const componentFixturesFile = "/fixtures.json";

glob(`${componentsDirectory}*${componentFixturesFile}`, (e, optionsFiles) => {
  if (e) {
    console.error(e);
  }
  const components = optionsFiles.map((optionsFile) =>
    optionsFile
      .replace(new RegExp(`^${componentsDirectory}`), "")
      .replace(new RegExp(`${componentFixturesFile}$`), "")
  );
  const failedComponents = components.filter((component) => {
    console.log(`\nComponent: ${component}`);
    const componentFixtures = require(`../${componentsDirectory}${component}${componentFixturesFile}`);
    const componentNunjucks = require(`../${componentsDirectory}${component}/template.njk`);
    const componentNunjucksAliased = componentNunjucks.replace(
      '{% include "govuk/',
      '{% include "node_modules/govuk-frontend/dist/govuk/'
    );
    const failedFixtures = componentFixtures.fixtures.filter((fixture) => {
      const result = nunjucks
        .renderString(componentNunjucksAliased, {
          params: fixture.options,
        })
        .trim();
      const mismatch = result !== fixture.html;
      if (mismatch) {
        console.error(`  🔴 [FAIL] ${fixture.name}\n`);
        console.log("--- EXPECTED ----------------------------");
        console.log(fixture.html);
        console.log("\n---  ACTUAL  ----------------------------");
        console.log(result);
        console.log("\n");
      } else {
        console.error(`  🟢 [PASS] ${fixture.name}`);
      }
      return mismatch;
    });
    return failedFixtures.length;
  });
  console.log("\n------------------------------------------");
  if (failedComponents.length) {
    console.error(
      `🔴 [FAIL] ${failedComponents.length} out of ${
        components.length
      } component${components.length === 1 ? "" : "s"} failed`
    );
    process.exit(1);
  } else {
    console.log(
      `🟢 [PASS] ${components.length} component${
        components.length === 1 ? "" : "s"
      } passed successfully`
    );
  }
  console.log("------------------------------------------");
});
