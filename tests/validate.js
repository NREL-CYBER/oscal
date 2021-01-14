"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var oscal_ssp_schema_json_1 = __importDefault(require("../schemas/oscal_poam_schema.json"));
var ajv_1 = __importDefault(require("ajv"));
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var jsonValidator = new ajv_1["default"]();
ajv_formats_1["default"](jsonValidator);
jsonValidator.addSchema(oscal_ssp_schema_json_1["default"]);
