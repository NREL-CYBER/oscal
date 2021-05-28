import { Choice, ConstraintDescription, ConstraintTest, DependsOn, GroupClass, GroupIdentifier, GroupTitle, GuidelineText, ParameterCardinality, ParameterClass, ParameterIdentifier, ParameterLabel, ParameterUsageDescription } from "../profile";
import { BackMatter, Link, ParameterValue, Part, Property, PublicationMetadata } from "../shared";


/**
 * A unique identifier for a specific control instance that can be used to reference the control in other OSCAL documents. This identifier's uniqueness is document scoped and is intended to be consistent for the same control across minor revisions of the document.
 */
export type ControlIdentifier = string;
/**
 * A textual label that provides a sub_type or characterization of the control.
 */
export type ControlClass = string;
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export type ControlTitle = string;

/**
 * A globally unique identifier for this catalog instance. This UUID should be changed when this document is revised.
 */
export type CatalogUniversallyUniqueIdentifier = string;
/**
 * A collection of controls.
 */
export interface Catalog {
  uuid: CatalogUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  params?: Parameter[];
  controls?: Control[];
  groups?: ControlGroup[];
  back_matter?: BackMatter;
}
/**
 * Parameters provide a mechanism for the dynamic assignment of value(s) in a control.
 */
export interface Parameter {
  id: ParameterIdentifier;
  class?: ParameterClass;
  depends_on?: DependsOn;
  props?: Property[];
  links?: Link[];
  label?: ParameterLabel;
  usage?: ParameterUsageDescription;
  constraints?: Constraint[];
  guidelines?: Guideline[];
  values?: ParameterValue[];
  select?: Selection;
}
/**
 * A formal or informal expression of a constraint or test
 */
export interface Constraint {
  description?: ConstraintDescription;
  tests?: ConstraintTest[];
}
/**
 * A prose statement that provides a recommendation for the use of a parameter.
 */
export interface Guideline {
  prose: GuidelineText;
}
/**
 * Presenting a choice among alternatives
 */
export interface Selection {
  how_many?: ParameterCardinality;
  choice?: Choice[];
}
/**
 * A structured information object representing a security or privacy control. Each security or privacy control within the Catalog is defined by a distinct control instance.
 */
export interface Control {
  id: ControlIdentifier;
  class?: ControlClass;
  title: ControlTitle;
  params?: Parameter[];
  props?: Property[];
  links?: Link[];
  parts?: Part[];
  controls?: Control[];
}
/**
 * A group of controls, or of groups of controls.
 */
export interface ControlGroup {
  id?: GroupIdentifier;
  class?: GroupClass;
  title: GroupTitle;
  params?: Parameter[];
  props?: Property[];
  links?: Link[];
  parts?: Part[];
  groups?: ControlGroup[];
  controls?: Control[];
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
