"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ajv_1 = __importDefault(require("ajv"));
var oscal_ssp_schema_json_1 = __importDefault(require("./schemas/oscal_ssp_schema.json"));
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var example_ssp_json_1 = __importDefault(require("./content/ssp/example_ssp.json"));
var main = function () {
    var schemas = [
        oscal_ssp_schema_json_1["default"]
    ];
    var ajv = new ajv_1["default"]();
    ajv_formats_1["default"](ajv);
    var validate = ajv.compile(oscal_ssp_schema_json_1["default"]);
    validate(example_ssp_json_1["default"]);
    console.log(validate.errors);
};
main();
