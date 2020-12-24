const schemaCompiler = require('json-schema-to-typescript');
fs = require("fs");


console.log("Initiating schema Compilation")
schemaCompiler.compileFromFile('./schemas/oscal_assessment-plan_schema.json')
    .then(ts => fs.writeFileSync('./types/assessment-plan/index.d.ts', ts))
    .then(() => console.log("✔️  Assessment Plan"))


schemaCompiler.compileFromFile('./schemas/oscal_assessment-results_schema.json')
    .then(ts => fs.writeFileSync('./types/assessment-results/index.d.ts', ts))
    .then(() => console.log("✔️  Assessment Results"))

schemaCompiler.compileFromFile('./schemas/oscal_catalog_schema.json')
    .then(ts => fs.writeFileSync('./types/catalog/index.d.ts', ts))
    .then(() => console.log("✔️  Catalog"))

schemaCompiler.compileFromFile('./schemas/oscal_component_schema.json')
    .then(ts => fs.writeFileSync('./types/component/index.d.ts', ts))
    .catch(console.log)
    .then(() => console.log("✔️  Component"))

schemaCompiler.compileFromFile('./schemas/oscal_profile_schema.json')
    .then(ts => fs.writeFileSync('./types/baseline-profile/index.d.ts', ts))
    .then(() => console.log("✔️  Baseline Profile"))

schemaCompiler.compileFromFile('./schemas/oscal_poam_schema.json')
    .then(ts => fs.writeFileSync('./types/plan-of-action-and-milestones/index.d.ts', ts))
    .then(() => console.log("✔️  Plan of Action & Milestones"))

schemaCompiler.compileFromFile('./schemas/oscal_ssp_schema.json')
    .then(ts => fs.writeFileSync('./types/system-security-plan/index.d.ts', ts))
    .then(() => console.log("✔️  System Security Plan"))

