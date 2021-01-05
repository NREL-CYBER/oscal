import Ajv from "ajv";
import addFormats from "ajv-formats";
import { writeFileSync } from "fs";
import { compileFromFile, Options } from "json-schema-to-typescript";
import _ from "lodash";





const main = () => {
    compileFromFile("./schema/oscal_package_schema.json")
        .then(compiled => {
            writeFileSync('./index.d.ts', compiled);
        });
}


main();


