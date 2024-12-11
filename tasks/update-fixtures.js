const { glob } = require("glob"); // Destructure glob import
const fs = require("fs/promises"); // Use fs.promises for async file operations
const nunjucks = require("nunjucks");

const componentsDirectory = "src/hmlr/components/";
const componentFixturesFile = "/fixtures.json";

// Configure Nunjucks (for better organization)
const nunjucksEnv = nunjucks.configure(process.cwd(), { autoescape: true });

async function updateComponentFixtures(component) {
  try {
    const componentFixtures = JSON.parse(
      await fs.readFile(
        `${componentsDirectory}${component}${componentFixturesFile}`,
        "utf8",
      ),
    );
    const componentNunjucks = await fs.readFile(
      `${componentsDirectory}${component}/template.njk`,
      "utf8",
    );

    const componentNunjucksAliased = componentNunjucks.replace(
      '{% include "govuk/',
      '{% include "node_modules/govuk-frontend/dist/govuk/',
    );

    const updatedFixtures = componentFixtures.fixtures.map((fixture) => ({
      ...fixture,
      html: nunjucks
        .renderString(componentNunjucksAliased, { params: fixture.options })
        .trim(),
    }));

    const newComponentFixtures = {
      ...componentFixtures,
      fixtures: updatedFixtures,
    };

    await fs.writeFile(
      `${componentsDirectory}${component}${componentFixturesFile}`,
      JSON.stringify(newComponentFixtures, null, 4),
    );

    return { component, success: true };
  } catch (error) {
    console.error(`Error processing ${component}:`, error);
    return { component, success: false, error }; // Return error information for better reporting
  }
}

async function main() {
  try {
    const optionsFiles = await glob(
      `${componentsDirectory}*${componentFixturesFile}`,
      { windowsPathsNoEscape: true },
    ); // Use await and options

    const components = optionsFiles.map((optionsFile) =>
      optionsFile
        .replace(new RegExp(`^${componentsDirectory}`), "")
        .replace(new RegExp(`${componentFixturesFile}$`), ""),
    );

    const results = await Promise.all(components.map(updateComponentFixtures));

    const failedComponents = results.filter((result) => !result.success);

    if (failedComponents.length > 0) {
      console.error(
        `\n🔴 [FAIL] ${failedComponents.length} component${
          failedComponents.length === 1 ? "" : "s"
        } failed to update:`,
      );
      failedComponents.forEach((result) => {
        console.error(`- ${result.component}: ${result.error.message}`);
      });
      process.exit(1);
    } else {
      console.log(`\n🟢 [PASS] All fixtures updated successfully`);
    }
  } catch (err) {
    console.error("Glob error:", err); // Handle glob errors
    process.exit(1);
  }
}

main();
