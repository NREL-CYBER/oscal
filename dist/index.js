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
Object.defineProperty(exports, "OrganizationSecurityPolicy", {
  enumerable: true,
  get: function get() {
    return _osp.OrganizationSecurityPolicy;
  }
});
exports.OperatingState = exports.Position = exports.Order = exports.CombinationMethod = exports.IncludeContainedControlsWithControl = exports.ParameterCardinality = exports.FindingTargetType = exports.ObjectiveStatusState = exports.ActorType = exports.TimeUnit = exports.PartyType = exports.PurpleState = exports.Transport = void 0;

var _exportOscal = _interopRequireDefault(require("./exportOscal"));

var _importOscal = _interopRequireDefault(require("./importOscal"));

var _osp = require("./osp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Indicates the transport type.
 */
var Transport;
/**
 * A reference to one or more roles with responsibility for performing a function relative
 * to the containing object.
 */

exports.Transport = Transport;

(function (Transport) {
  Transport["TCP"] = "TCP";
  Transport["UDP"] = "UDP";
})(Transport || (exports.Transport = Transport = {}));

/**
 * The operational status.
 */
var PurpleState;
/**
 * Identifies system elements being assessed, such as components, inventory items, and
 * locations. In the assessment plan, this identifies a planned assessment subject. In the
 * assessment results this is an actual assessment subject, and reflects any changes from
 * the plan. exactly what will be the focus of this assessment. Any subjects not identified
 * in this way are out_of_scope.
 */

exports.PurpleState = PurpleState;

(function (PurpleState) {
  PurpleState["Disposition"] = "disposition";
  PurpleState["Operational"] = "operational";
  PurpleState["Other"] = "other";
  PurpleState["UnderDevelopment"] = "under_development";
})(PurpleState || (exports.PurpleState = PurpleState = {}));

/**
 * A category describing the kind of party the object describes.
 */
var PartyType;
/**
 * An entry in a sequential list of revisions to the containing document in reverse
 * chronological order (i.e., most recent previous revision first).
 */

exports.PartyType = PartyType;

(function (PartyType) {
  PartyType["Organization"] = "organization";
  PartyType["Person"] = "person";
})(PartyType || (exports.PartyType = PartyType = {}));

/**
 * The unit of time for the period.
 */
var TimeUnit;
/**
 * The task is intended to occur on the specified date.
 */

exports.TimeUnit = TimeUnit;

(function (TimeUnit) {
  TimeUnit["Days"] = "days";
  TimeUnit["Hours"] = "hours";
  TimeUnit["Minutes"] = "minutes";
  TimeUnit["Months"] = "months";
  TimeUnit["Seconds"] = "seconds";
  TimeUnit["Years"] = "years";
})(TimeUnit || (exports.TimeUnit = TimeUnit = {}));

/**
 * The kind of actor.
 */
var ActorType;
/**
 * Relates the finding to a set of referenced observations that were used to determine the
 * finding.
 */

exports.ActorType = ActorType;

(function (ActorType) {
  ActorType["AssessmentPlatform"] = "assessment_platform";
  ActorType["Party"] = "party";
  ActorType["Tool"] = "tool";
})(ActorType || (exports.ActorType = ActorType = {}));

/**
 * An indication as to whether the objective is satisfied or not.
 */
var ObjectiveStatusState;
/**
 * Identifies the type of the target.
 */

exports.ObjectiveStatusState = ObjectiveStatusState;

(function (ObjectiveStatusState) {
  ObjectiveStatusState["NotSatisfied"] = "not_satisfied";
  ObjectiveStatusState["Satisfied"] = "satisfied";
})(ObjectiveStatusState || (exports.ObjectiveStatusState = ObjectiveStatusState = {}));

var FindingTargetType;
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in
 * the referenced SSP.
 */

exports.FindingTargetType = FindingTargetType;

(function (FindingTargetType) {
  FindingTargetType["ObjectiveID"] = "objective_id";
  FindingTargetType["StatementID"] = "statement_id";
})(FindingTargetType || (exports.FindingTargetType = FindingTargetType = {}));

/**
 * Describes the number of selections that must occur. Without this setting, only one value
 * should be assumed to be permitted.
 */
var ParameterCardinality;
/**
 * A group of controls, or of groups of controls.
 */

exports.ParameterCardinality = ParameterCardinality;

(function (ParameterCardinality) {
  ParameterCardinality["One"] = "one";
  ParameterCardinality["OneOrMore"] = "one_or_more";
})(ParameterCardinality || (exports.ParameterCardinality = ParameterCardinality = {}));

/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
var IncludeContainedControlsWithControl;
/**
 * Insert all controls from the imported catalog or profile resources identified in the
 * import directive.
 */

exports.IncludeContainedControlsWithControl = IncludeContainedControlsWithControl;

(function (IncludeContainedControlsWithControl) {
  IncludeContainedControlsWithControl["No"] = "no";
  IncludeContainedControlsWithControl["Yes"] = "yes";
})(IncludeContainedControlsWithControl || (exports.IncludeContainedControlsWithControl = IncludeContainedControlsWithControl = {}));

/**
 * How clashing controls should be handled
 */
var CombinationMethod;
/**
 * A Custom element frames a structure for embedding represented controls in resolution.
 */

exports.CombinationMethod = CombinationMethod;

(function (CombinationMethod) {
  CombinationMethod["Keep"] = "keep";
  CombinationMethod["Merge"] = "merge";
  CombinationMethod["UseFirst"] = "use_first";
})(CombinationMethod || (exports.CombinationMethod = CombinationMethod = {}));

/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
var Order;
/**
 * Set parameters or amend controls in resolution
 */

exports.Order = Order;

(function (Order) {
  Order["Ascending"] = "ascending";
  Order["Descending"] = "descending";
  Order["Keep"] = "keep";
})(Order || (exports.Order = Order = {}));

/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
var Position;
/**
 * Specifies objects to be removed from a control based on specific aspects of the object
 * that must all match.
 */

exports.Position = Position;

(function (Position) {
  Position["After"] = "after";
  Position["Before"] = "before";
  Position["Ending"] = "ending";
  Position["Starting"] = "starting";
})(Position || (exports.Position = Position = {}));

/**
 * The current operating status.
 */
var OperatingState;
/**
 * Contains details about all information types that are stored, processed, or transmitted
 * by the system, such as privacy information, and those defined in NIST SP 800_60.
 */

exports.OperatingState = OperatingState;

(function (OperatingState) {
  OperatingState["Disposition"] = "disposition";
  OperatingState["Operational"] = "operational";
  OperatingState["Other"] = "other";
  OperatingState["UnderDevelopment"] = "under_development";
  OperatingState["UnderMajorModification"] = "under_major_modification";
})(OperatingState || (exports.OperatingState = OperatingState = {}));