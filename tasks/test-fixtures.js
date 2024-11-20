const glob = require("glob"); // Make sure you have glob@9 installed: npm install glob@9
const fs = require("fs/promises");
const nunjucks = require("nunjucks");

const componentsDirectory = "src/hmlr/components/";
const componentFixturesFile = "/fixtures.json";

// Configure Nunjucks (for better organization)
const nunjucksEnv = nunjucks.configure(process.cwd(), { autoescape: true });

async function testComponentFixtures(component) {
  try {
    const componentFixtures = JSON.parse(
      await fs.readFile(
        `${componentsDirectory}${component}${componentFixturesFile}`,
        "utf8"
      )
    );
    const componentNunjucks = await fs.readFile(
      `${componentsDirectory}${component}/template.njk`,
      "utf8"
    );

    nunjucksEnv.addGlobal("params", {});

    const failedFixtures = [];

    for (const fixture of componentFixtures.fixtures) {
      nunjucksEnv.globals.params = fixture.options;
      const result = nunjucksEnv.renderString(componentNunjucks).trim();

      if (result !== fixture.html) {
        console.error(`  🔴 [FAIL] ${fixture.name}\n`);
        console.log("--- EXPECTED ----------------------------");
        console.log(fixture.html);
        console.log("\n---  ACTUAL  ----------------------------");
        console.log(result);
        console.log("\n");
        failedFixtures.push(fixture.name);
      } else {
        console.log(`  🟢 [PASS] ${fixture.name}`);
      }
    }
    return {
      component,
      failed: failedFixtures.length > 0,
      failures: failedFixtures,
    };
  } catch (error) {
    console.error(`Error processing ${component}:`, error);
    return {
      component,
      failed: true,
      failures: ["Error loading or parsing files"],
    };
  }
}

async function main() {
  try {
    const optionsFiles = await glob(
      `${componentsDirectory}*${componentFixturesFile}`
    ); // Use async glob

    const components = optionsFiles.map((optionsFile) =>
      optionsFile
        .replace(new RegExp(`^${componentsDirectory}`), "")
        .replace(new RegExp(`${componentFixturesFile}$`), "")
    );

    const results = await Promise.all(components.map(testComponentFixtures));

    const failedComponents = results.filter((result) => result.failed);

    console.log("\n------------------------------------------");
    if (failedComponents.length) {
      console.error(
        `🔴 [FAIL] ${failedComponents.length} out of ${
          components.length
        } component${components.length === 1 ? "" : "s"} failed`
      );
      failedComponents.forEach((result) => {
        console.error(`- Component ${result.component}:`);
        result.failures.forEach((failure) => console.error(`  - ${failure}`));
      });
      process.exit(1);
    } else {
      console.log(
        `🟢 [PASS] ${components.length} component${
          components.length === 1 ? "" : "s"
        } passed successfully`
      );
    }
    console.log("------------------------------------------");
  } catch (err) {
    console.error("Glob error:", err);
    process.exit(1);
  }
}

main();
