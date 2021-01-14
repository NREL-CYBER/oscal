import ssp from "../schemas/oscal_ssp_schema.json"
import Ajv, { ValidateFunction } from "ajv"
import addFormats from "ajv-formats"
const jsonValidator = new Ajv();
addFormats(jsonValidator)
jsonValidator.addSchema(ssp);