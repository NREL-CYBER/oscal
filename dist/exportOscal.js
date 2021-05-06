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
  // Skip anything that already has a dash in it.
  // If it has a dash, it's probably already good to go since its a UUID or ID of some kind.
  return kebabcaseKeys(input, {
    deep: true,
    exclude: [/^.*[\-].*/, "base64"]
  });
};

var _default = exportOscal;
exports["default"] = _default;