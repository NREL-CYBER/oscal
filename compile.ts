import Ajv from "ajv";
import addFormats from "ajv-formats";
import { writeFileSync } from "fs";
import { compileFromFile, Options } from "json-schema-to-typescript";




interface compilationTarget {
    target: string,
    schema: string
}

const main = () => {
    const schemas: compilationTarget[] = [
        {
            schema: "./schemas/oscal_component_schema.json",
            target: "./src/component/index.d.ts"
        }
        //{
        //     schema: "./schemas/oscal_assessment-plan_schema.json",
        //     target: "./src/assessment_plan/index.d.ts"
        // },
        // {
        //     schema: "./schemas/oscal_assessment-results_schema.json",
        //     target: "./src/assessment_results/index.d.ts"
        // }, {
        //     schema: "./schemas/oscal_poam_schema.json",
        //     target: "./src/poam/index.d.ts"
        //     },
        // {
        // schema: "./schemas/oscal_profile_schema.json",
        // target: "./src/profile/index.d.ts"
        // },
        //     {
        //     schema: "./schemas/oscal_catalog_schema.json",
        //     target: "./src/catalog/index.d.ts"
        // }
        //    ,{
        //     schema: "./schemas/oscal_ssp_schema.json",
        //     target: "./src/ssp/index.d.ts"
        // }
    ]
    schemas.forEach(({ target, schema }) => {
        compileFromFile(schema)
            .then(compiled => {
                writeFileSync(target, compiled);
            });
    })




}
main();


