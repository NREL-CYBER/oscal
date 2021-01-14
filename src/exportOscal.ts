const kebabcaseKeys = require('kebabcase-keys');

/**
 * export keys to kebab case to official OSCAL
 * @param input raw OSCAL JSON
 */
const exportOscal = (input: any) => {
    return kebabcaseKeys(input, { deep: true });
}
export default exportOscal;