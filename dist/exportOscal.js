const kebabcaseKeys = require('kebabcase-keys');

const exportOscal = input => {
  return kebabcaseKeys(input, {
    deep: true
  });
};

export default exportOscal;