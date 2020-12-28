import { Options, compileFromFile } from "json-schema-to-typescript";
import { writeFileSync } from "fs"
import { properties as SAPProperties, definitions as SAPDefinitions } from "./schemas/oscal_assessment-plan_schema.json"
import { properties as SARProperties, definitions as SARDefinitions } from "./schemas/oscal_assessment-results_schema.json"
import { properties as CatalogProperties, definitions as CatalogDefinitions } from "./schemas/oscal_catalog_schema.json"
import { properties as ComponentProperties, definitions as componentDefinitions } from "./schemas/oscal_component_schema.json"
import { properties as SSPProperties, definitions as SSPDefinitions } from "./schemas/oscal_ssp_schema.json"
import { properties as ProfileProperties, definitions as ProfileDefinitions } from "./schemas/oscal_profile_schema.json"

import * as SSPSchema from "./schemas/oscal_ssp_schema.json"
import { camelCase } from "lodash";
const camelcaseKeys = require('camelcase-keys');

console.log("Initiating schema Compilation")
const options: Options = {
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
}



const main = () => {
    const packageSchema = {
        ...SSPSchema,
        title: "Oscal Package Schema",
        description: "Oscal Package Types",
        "$comment": "OSCAL Package: JSON Schema",
        definitions: {
            ...SSPDefinitions,
            ...CatalogDefinitions,
            ...SAPDefinitions,
            ...SARDefinitions,
            ...componentDefinitions,
            ...ProfileDefinitions,
        },
        properties: {
            ...SSPProperties,
            ...CatalogProperties,
            ...ProfileProperties,
            ...SAPProperties,
            ...SARProperties,
            ...ComponentProperties
        }
    }
    const packageSchemaString = JSON.stringify(packageSchema).split("-").join("_");
    writeFileSync("./oscal_package_schema.json", packageSchemaString);
    compileFromFile("./oscal_package_schema.json", options)
        .then(compiled => {
            writeFileSync('./index.d.ts', compiled);
        });
}


main();


