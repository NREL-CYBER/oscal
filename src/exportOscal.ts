const kebabcaseKeys = require('kebabcase-keys');

/**
 * export keys to kebab case to official OSCAL
 * @param input raw OSCAL JSON
 */
const exportOscal = (input: any) => {
    return kebabcaseKeys(input, { deep: true, exclude: [/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i] });
}
export default exportOscal;