var snakeCaseKeys = require('snakecase-keys')

const importOscal = (input: any) => {
    // Skip the UUID's so they still have dashes
    // We do convert roles like authorizing-offical to authorizing_official
    return snakeCaseKeys(input, { deep: true, exclude: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i });
}
export default importOscal;