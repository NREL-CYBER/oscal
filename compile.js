"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
const main = () => {
    json_schema_to_typescript_1.compileFromFile("./schema/oscal_package_schema.json")
        .then(compiled => {
        fs_1.writeFileSync('./index.d.ts', compiled);
    });
};
main();
