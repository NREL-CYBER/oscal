const { compileFromFile } = require('json-schema-to-typescript')
const fs = require("fs")
// compile from file
compileFromFile('./src/schemas/oscal_complete_schema.json')
    .then(ts => fs.writeFileSync('oscal.d.ts', ts))
