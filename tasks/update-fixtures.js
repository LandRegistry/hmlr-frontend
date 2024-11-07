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
      .replace(new RegExp(`${componentFixturesFile}$`), ""),
  );

  components.forEach((component) => {
    const componentFixtures = require(
      `../${componentsDirectory}${component}${componentFixturesFile}`,
    );
    const componentNunjucks = require(
      `../${componentsDirectory}${component}/template.njk`,
    );
    const componentNunjucksAliased = componentNunjucks.replace(
      '{% include "govuk/',
      '{% include "node_modules/govuk-frontend/dist/govuk/',
    );

    const newComponentFixtures = {
      ...componentFixtures,
      fixtures: [...componentFixtures.fixtures].map((fixture) => ({
        ...fixture,
        html: nunjucks
          .renderString(componentNunjucksAliased, {
            params: fixture.options,
          })
          .trim(),
      })),
    };

    fs.writeFile(
      `${componentsDirectory}${component}${componentFixturesFile}`,
      JSON.stringify(newComponentFixtures, null, 4),
      (err) => {
        if (err) throw err;
        console.log(
          `All ${componentFixtures.fixtures.length} ${component} fixture(s) updated successfully`,
        );
      },
    );
  });
});
