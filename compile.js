"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var main = function () {
    var schemas = [
        {
            schema: "./schemas/oscal_component_schema.json",
            target: "./src/component/index.d.ts"
        },
        {
            schema: "./schemas/oscal_assessment-plan_schema.json",
            target: "./src/assessment_plan/index.d.ts"
        },
        {
            schema: "./schemas/oscal_assessment-results_schema.json",
            target: "./src/assessment_results/index.d.ts"
        }, {
            schema: "./schemas/oscal_poam_schema.json",
            target: "./src/poam/index.d.ts"
        },
        {
            schema: "./schemas/oscal_profile_schema.json",
            target: "./src/profile/index.d.ts"
        },
        {
            schema: "./schemas/oscal_catalog_schema.json",
            target: "./src/catalog/index.d.ts"
        },
        {
            schema: "./schemas/oscal_ssp_schema.json",
            target: "./src/ssp/index.d.ts"
        }
    ];
    schemas.forEach(function (_a) {
        var target = _a.target, schema = _a.schema;
        json_schema_to_typescript_1.compileFromFile(schema, { ignoreMinAndMaxItems: true })
            .then(function (compiled) {
            fs_1.writeFileSync(target, compiled);
        });
    });
};
main();
