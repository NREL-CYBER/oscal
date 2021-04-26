"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var kebabcaseKeys = require('kebabcase-keys');
/**
 * export keys to kebab case to official OSCAL
 * @param input raw OSCAL JSON
 */


var exportOscal = function exportOscal(input) {
  return kebabcaseKeys(input, {
    deep: true,
    exclude: [, /[\w]{8}(-[\w]{4}){3}-[\w]{12}/]
  });
};

var _default = exportOscal;
exports["default"] = _default;