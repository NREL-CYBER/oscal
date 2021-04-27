const kebabcaseKeys = require('kebabcase-keys');

/**
 * export keys to kebab case to official OSCAL
 * @param input raw OSCAL JSON
 */
const exportOscal = (input: any) => {
    // Skip anything that already has a dash in it.
    // If it has a dash, it's probably already good to go since its a UUID or ID of some kind.
    return kebabcaseKeys(input, { deep: true, exclude: [/^.*[\-].*/] });
}
export default exportOscal;