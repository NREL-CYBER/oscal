var snakeCaseKeys = require('snakecase-keys');

const importOscal = input => {
  return snakeCaseKeys(input, {
    deep: true
  });
};

export default importOscal;