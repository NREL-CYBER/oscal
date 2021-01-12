"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var main = function () {
    json_schema_to_typescript_1.compileFromFile("./src/m3/ssp/oscal_ssp_schema.json")
        .then(function (compiled) {
        fs_1.writeFileSync('./src/m3/ssp/index.ts', compiled);
    });
};
main();
