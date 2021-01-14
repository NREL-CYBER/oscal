"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var snakeCaseKeys = require('snakecase-keys');

var importOscal = function importOscal(input) {
  // Skip the UUID's so they still have dashes
  // We do convert roles like authorizing-offical to authorizing_official
  return snakeCaseKeys(input, {
    deep: true,
    exclude: new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)
  });
};

var _default = importOscal;
exports["default"] = _default;