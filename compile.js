"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var fs_1 = require("fs");
var oscal_assessment_plan_schema_json_1 = require("./schemas/oscal_assessment-plan_schema.json");
var oscal_assessment_results_schema_json_1 = require("./schemas/oscal_assessment-results_schema.json");
var oscal_catalog_schema_json_1 = require("./schemas/oscal_catalog_schema.json");
var oscal_component_schema_json_1 = require("./schemas/oscal_component_schema.json");
var oscal_ssp_schema_json_1 = require("./schemas/oscal_ssp_schema.json");
var oscal_profile_schema_json_1 = require("./schemas/oscal_profile_schema.json");
var SSPSchema = require("./schemas/oscal_ssp_schema.json");
var camelcaseKeys = require('camelcase-keys');
console.log("Initiating schema Compilation");
var options = {
    $refOptions: {},
    bannerComment: "",
    cwd: "./",
    declareExternallyReferenced: true,
    enableConstEnums: false,
    format: true,
    ignoreMinAndMaxItems: true,
    strictIndexSignatures: true,
    style: {},
    unknownAny: false,
    unreachableDefinitions: false
};
var main = function () {
    var packageSchema = __assign(__assign({}, SSPSchema), { title: "Oscal Package Schema", description: "Oscal Package Types", "$comment": "OSCAL Package: JSON Schema", definitions: __assign(__assign(__assign(__assign(__assign(__assign({}, oscal_ssp_schema_json_1.definitions), oscal_catalog_schema_json_1.definitions), oscal_assessment_plan_schema_json_1.definitions), oscal_assessment_results_schema_json_1.definitions), oscal_component_schema_json_1.definitions), oscal_profile_schema_json_1.definitions), properties: __assign(__assign(__assign(__assign(__assign(__assign({}, oscal_ssp_schema_json_1.properties), oscal_catalog_schema_json_1.properties), oscal_profile_schema_json_1.properties), oscal_assessment_plan_schema_json_1.properties), oscal_assessment_results_schema_json_1.properties), oscal_component_schema_json_1.properties) });
    var packageSchemaString = JSON.stringify(packageSchema).split("-").join("_");
    fs_1.writeFileSync("./oscal_package_schema.json", packageSchemaString);
    json_schema_to_typescript_1.compileFromFile("./oscal_package_schema.json", options)
        .then(function (compiled) {
        fs_1.writeFileSync('./index.d.ts', compiled);
    });
};
main();
