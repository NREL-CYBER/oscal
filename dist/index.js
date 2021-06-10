"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "exportOscal", {
  enumerable: true,
  get: function get() {
    return _exportOscal["default"];
  }
});
Object.defineProperty(exports, "importOscal", {
  enumerable: true,
  get: function get() {
    return _importOscal["default"];
  }
});
exports.SystemComponentTypes = void 0;

var _exportOscal = _interopRequireDefault(require("./exportOscal"));

var _importOscal = _interopRequireDefault(require("./importOscal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Acceptable values for @system_component.type
 */
var SystemComponentTypes = ["subnet", "leveraged-system", "interconnection", "software", "hardware", "service", "policy", "physical", "process-procedure", "plan", "guidance", "standard", "validation"];
/**
 * Captures an assessor's conclusions regarding the degree to which an objective is satisfied.
 */

exports.SystemComponentTypes = SystemComponentTypes;