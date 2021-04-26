const kebabcaseKeys = require('kebabcase-keys');

/**
 * export keys to kebab case to official OSCAL
 * @param input raw OSCAL JSON
 */
const exportOscal = (input: any) => {
    return kebabcaseKeys(input, { deep: true, exclude: [, /[\w]{8}(-[\w]{4}){3}-[\w]{12}/] });
}
export default exportOscal;