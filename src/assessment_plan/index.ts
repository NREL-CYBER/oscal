import { IncludeSubjectsDescription, SubjectType, UUIDReference } from "../poam";
import { Action, ActionReference, All, AnnotatedProperty, AssessedControlsDescription, AssessmentActivityUniversallyUniqueIdentifier, AssessmentPlatformTitle, AssessmentPlatformUniversallyUniqueIdentifier, AssociatedActivity, BackMatter, Component, ComponentUniversallyUniqueIdentifierReference, ControlIdentifierReference, ControlObjectiveDescription, EventDescription, EventTiming, EventTitle, EventUniversallyUniqueIdentifier, ImportSystemSecurityPlan, IncludedActivityDescription, IncludedActivityTitle, IncludeSpecificStatements, InventoryItem, Link, ObjectiveDescription, ObjectiveID, Part, PartClass, PartIdentifier, PartName, PartNamespace, PartText, PartTitle, Property, PublicationMetadata, ReferenedControlObjectives, Remarks, ResponsibleParty, ResponsibleRole, SystemUser } from "../shared";
import { TaskDescription, TaskEndDate, TaskStartDate, TaskTitle, TaskUniversallyUniqueIdentifier } from "../shared/Task";

/**
 * Uniquely identifies this assessment plan. This UUID must be changed each time the content of the plan changes.
 */
export type AssessmentPlanUniversallyUniqueIdentifier = string;

/**
 * An assessment plan, such as those provided by a FedRAMP assessor.
 */
export interface SecurityAssessmentPlan {
  uuid: AssessmentPlanUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_ssp: ImportSystemSecurityPlan;
  local_definitions?: SAPLocalDefinitions;
  terms_and_conditions?: AssessmentPlanTermsAndConditions;
  reviewed_controls: ReviewedControlsAndControlObjectives;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  assessment_assets?: AssessmentAssets;
  assessment_actions?: [AssessmentAction, ...AssessmentAction[]];
  tasks?: [Task, ...Task[]];
  back_matter?: BackMatter;
}

/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SAPLocalDefinitions {
  components?: {
    [k: string]: Component;
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
  users?: {
    [k: string]: SystemUser;
  };
  add_objectives_and_methods?: [AssessmentSpecificControlObjective, ...AssessmentSpecificControlObjective[]];
  activities?: [Activity, ...Activity[]];
  remarks?: Remarks;
}
/**
 * A local definition of a control objective for this assessment. Uses catalog syntax for control objective and assessment actions.
 */
export interface AssessmentSpecificControlObjective {
  control_id: ControlIdentifierReference;
  description?: ObjectiveDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parts: [Part, ...Part[]];
  remarks?: Remarks;
}

/**
 * Identifies an assessment or related process that can be performed. In the assessment plan, this is an intended activity which may be associated with an assessment task. In the assessment results, this an activity that was actually performed as part of an assessement.
 */
export interface Activity {
  uuid: AssessmentActivityUniversallyUniqueIdentifier;
  title?: IncludedActivityTitle;
  description: IncludedActivityDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  actions?: [Action, ...Action[]];
  related_controls?: ReviewedControlsAndControlObjectives;
  responsible_roles?: {
    [k: string]: ResponsibleRole;
  };
  remarks?: Remarks;
}
/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
  description?: ControlObjectiveDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  control_selections: [AssessedControls, ...AssessedControls[]];
  control_objective_selections?: [ReferenedControlObjectives, ...ReferenedControlObjectives[]];
  remarks?: Remarks;
}
/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned controls. In the assessment results, these are the actual controls, and reflects any changes from the plan.
 */
export interface AssessedControls {
  description?: AssessedControlsDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_controls?: [SelectControl, ...SelectControl[]];
  exclude_controls?: [ExcludeControl, ...ExcludeControl[]];
  remarks?: Remarks;
}
/**
 * Used to select a control for inclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
  control_id: ControlIdentifierReference;
  statement_ids?: [IncludeSpecificStatements, ...IncludeSpecificStatements[]];
}
/**
 * Used to select a control for exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface ExcludeControl extends SelectControl {
}

/**
 * Used to select a control objective for inclusion/exclusion based on the control objective's identifier.
 */
export interface SelectObjective {
  objective_id: ObjectiveID;
}
/**
 * Used to define various terms and conditions under which an assessment, described by the plan, can be performed. Each child part defines a different type of term or condition.
 */
export interface AssessmentPlanTermsAndConditions {
  parts?: AssessmentPart | [AssessmentPart, ...AssessmentPart[]];
}
/**
 * A partition of an assessment plan or results or a child of another part.
 */
export interface AssessmentPart {
  uuid?: PartIdentifier;
  name: PartName;
  ns?: PartNamespace;
  class?: PartClass;
  title?: PartTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  prose: PartText;
  parts?: [AssessmentPart, ...AssessmentPart[]];
  links?: [Link, ...Link[]];
}
/**
 * Identifies system elements being assessed, such as components, inventory items, and locations. In the assessment plan, this identifies a planned assessment subject. In the assessment results this is an actual assessment subject, and reflects any changes from the plan. exactly what will be the focus of this assessment. Any subjects not identified in this way are out_of_scope.
 */
export interface SubjectOfAssessment {
  type: SubjectType;
  description?: IncludeSubjectsDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_subjects?: [SelectAssessmentSubject, ...SelectAssessmentSubject[]];
  exclude_subjects?: [SelectAssessmentSubject, ...SelectAssessmentSubject[]];
  remarks?: Remarks;
}
/**
 * Identifies a set of assessment subjects to include/exclude by UUID.
 */
export interface SelectAssessmentSubject {
  uuid_ref: UUIDReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * Identifies the assets used to perform this assessment, such as the assessment team, scanning tools, and assumptions.
 */
export interface AssessmentAssets {
  components?: {
    [k: string]: Component;
  };
  assessment_platforms: [AssessmentPlatform, ...AssessmentPlatform[]];
}
/**
 * Used to represent the toolset used to perform aspects of the assessment.
 */
export interface AssessmentPlatform {
  uuid: AssessmentPlatformUniversallyUniqueIdentifier;
  title?: AssessmentPlatformTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  uses_components?: [UsesComponent, ...UsesComponent[]];
  remarks?: Remarks;
}
/**
 * The set of components that are used by the assessment platform.
 */
export interface UsesComponent {
  component_uuid: ComponentUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty;
  };
  remarks?: Remarks;
}
/**
 * Identifies an assessment_related event that must occur as part of executing an assessment plan, the result of which may be recorded within the assessment log in assessment results.
 */
export interface AssessmentAction {
  uuid: EventUniversallyUniqueIdentifier;
  title?: EventTitle;
  description: EventDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  timing?: EventTiming;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole;
  };
  associated_activities?: [AssociatedActivity, ...AssociatedActivity[]];
  remarks?: Remarks;
}
/**
 * Represents a scheduled event or milestone, which may be associated with a series of assessment actions.
 */
export interface Task {
  uuid: TaskUniversallyUniqueIdentifier;
  title: TaskTitle;
  description?: TaskDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  start: TaskStartDate;
  end: TaskEndDate;
  related_actions?: [ActionReference, ...ActionReference[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole;
  };
  remarks?: Remarks;
}
