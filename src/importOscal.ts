var snakeCaseKeys = require('snakecase-keys')

const importOscal = (input: any) => {
    return snakeCaseKeys(input, { deep: true });
}
export default importOscal;