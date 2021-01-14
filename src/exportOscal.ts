import { kebabCase } from "lodash"
const kebabcaseKeys = require('kebabcase-keys');


const exportOscal = (input: any) => {
    return kebabcaseKeys(input, { deep: true });
}
export default exportOscal;