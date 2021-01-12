import Ajv from "ajv";
import addFormats from "ajv-formats";
import { writeFileSync } from "fs";
import { compileFromFile, Options } from "json-schema-to-typescript";
import _ from "lodash";





const main = () => {
    compileFromFile("./src/m3/ssp/oscal_package_schema.json")
        .then(compiled => {
            writeFileSync('./src/m3/ssp/index.d.ts', compiled);
        });
}
main();


