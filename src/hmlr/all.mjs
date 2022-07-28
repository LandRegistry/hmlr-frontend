import * as GOVUKFrontend from "../../node_modules/govuk-frontend/govuk-esm/all.mjs";

window.GOVUKFrontend = GOVUKFrontend

console.log( 'Hello from HMLR' );

const buttons = document.querySelectorAll(
  '[data-module="govuk-button"]'
);
console.log(buttons ?? 'nothing');
