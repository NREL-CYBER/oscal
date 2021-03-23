import Ajv from "ajv";
import ssp from "./schemas/oscal_ssp_schema.json"
import addFormats from "ajv-formats"
import example from "./content/ssp/example_ssp.json"
const main = () => {
    const schemas: any[] = [
        ssp
    ]
    const ajv = new Ajv()
    addFormats(ajv);
    const validate = ajv.compile(ssp);
    validate(example);
    console.log(validate.errors)
}
main();


