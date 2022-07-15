const glob = require("glob");
var fs = require("fs");
const nunjucks = require("nunjucks");

require.extensions[".njk"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

const componentsDirectory = "./src/hmlr/components/";
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
    const componentFixtures = require(`../${componentsDirectory}${component}${componentFixturesFile}`);
    const componentNunjucks = require(`../${componentsDirectory}${component}/template.njk`);
    const componentNunjucksAliased = componentNunjucks.replace(
      '{% include "govuk/',
      '{% include "node_modules/govuk-frontend/govuk/'
    );

    const failedFixtures = componentFixtures.fixtures.filter((fixture) => {
      const result = nunjucks.renderString(componentNunjucksAliased, {
        params: fixture.options,
      });
      const mismatch = result.trim() !== fixture.html;
      if (mismatch) {
        console.error(`${component} (${fixture.name})`);
        console.log("--- EXPECTED ----------------------------");
        console.log(fixture.html);
        console.log("---  ACTUAL  ----------------------------");
        console.log(result.trim());
      }
      return mismatch;
    });

    if (failedFixtures.length) {
      console.error(
        `${failedFixtures.length} out of ${componentFixtures.fixtures.length} ${component} fixtures failed`
      );
    } else {
      console.log(
        `All ${componentFixtures.fixtures.length} ${component} fixture(s) passed successfully`
      );
    }

    return failedFixtures.length;
  });

  console.log("------------------------------------------");
  if (failedComponents.length) {
    console.error(
      `${failedComponents.length} out of ${components.length} components failed`
    );
  } else {
    console.log(`All ${components.length} component(s) passed successfully`);
  }
  console.log("------------------------------------------");
});
