import { ActionReference, All, AssessmentPlatformTitle, AssessmentPlatformUniversallyUniqueIdentifier, AssociatedActivity, BackMatter, Component, ComponentUniversallyUniqueIdentifierReference, ControlIdentifierReference, EventDescription, EventTiming, EventTitle, EventUniversallyUniqueIdentifier, ImportSystemSecurityPlan, InventoryItem, Link, ObjectiveDescription, Part, PartClass, PartIdentifier, PartName, PartNamespace, PartText, PartTitle, Property, PublicationMetadata, Remarks, ResponsibleParty, ResponsibleRole, SystemUser, RoleIdentifier, SubjectType, IncludeSubjectsDescription, UUIDReference, Activity, SelectControl, ReviewedControlsAndControlObjectives } from "../shared";
import { TaskDescription, TaskEndDate, TaskStartDate, TaskTitle, TaskUniversallyUniqueIdentifier } from "../shared/Task";
/**
 * Uniquely identifies this assessment plan. This UUID must be changed each time the content of the plan changes.
 */
export declare type AssessmentPlanUniversallyUniqueIdentifier = string;
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
    assessment_subjects?: SubjectOfAssessment[];
    assessment_assets?: AssessmentAssets;
    assessment_actions?: [AssessmentAction, ...AssessmentAction[]];
    tasks?: Task[];
    back_matter?: BackMatter;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SAPLocalDefinitions {
    components?: {
        [k: string]: Component;
    };
    inventory_items?: InventoryItem[];
    users?: {
        [k: string]: SystemUser;
    };
    add_objectives_and_methods?: [AssessmentSpecificControlObjective, ...AssessmentSpecificControlObjective[]];
    activities?: Activity[];
    remarks?: Remarks;
}
/**
 * A local definition of a control objective for this assessment. Uses catalog syntax for control objective and assessment actions.
 */
export interface AssessmentSpecificControlObjective {
    control_id: ControlIdentifierReference;
    description?: ObjectiveDescription;
    props?: Property[];
    links?: Link[];
    parts: Part[];
    remarks?: Remarks;
}
/**
 * Used to select a control for exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface ExcludeControl extends SelectControl {
}
/**
 * Used to define various terms and conditions under which an assessment, described by the plan, can be performed. Each child part defines a different type of term or condition.
 */
export interface AssessmentPlanTermsAndConditions {
    parts?: AssessmentPart | AssessmentPart[];
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
    props?: Property[];
    prose: PartText;
    parts?: AssessmentPart[];
    links?: Link[];
}
/**
 * Identifies system elements being assessed, such as components, inventory items, and locations. In the assessment plan, this identifies a planned assessment subject. In the assessment results this is an actual assessment subject, and reflects any changes from the plan. exactly what will be the focus of this assessment. Any subjects not identified in this way are out_of_scope.
 */
export interface SubjectOfAssessment {
    type: SubjectType;
    description?: IncludeSubjectsDescription;
    props?: Property[];
    links?: Link[];
    include_all?: All;
    include_subjects?: SelectAssessmentSubject[];
    exclude_subjects?: SelectAssessmentSubject[];
    remarks?: Remarks;
}
/**
 * Identifies a set of assessment subjects to include/exclude by UUID.
 */
export interface SelectAssessmentSubject {
    uuid_ref: UUIDReference;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Identifies the assets used to perform this assessment, such as the assessment team, scanning tools, and assumptions.
 */
export interface AssessmentAssets {
    components?: {
        [k: string]: Component;
    };
    assessment_platforms: AssessmentPlatform[];
}
/**
 * Used to represent the toolset used to perform aspects of the assessment.
 */
export interface AssessmentPlatform {
    uuid: AssessmentPlatformUniversallyUniqueIdentifier;
    title?: AssessmentPlatformTitle;
    props?: Property[];
    links?: Link[];
    uses_components?: UsesComponent[];
    remarks?: Remarks;
}
/**
 * The set of components that are used by the assessment platform.
 */
export interface UsesComponent {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * Identifies an assessment_related event that must occur as part of executing an assessment plan, the result of which may be recorded within the assessment log in assessment results.
 */
export interface AssessmentAction {
    uuid: EventUniversallyUniqueIdentifier;
    title?: EventTitle;
    description: EventDescription;
    props?: Property[];
    links?: Link[];
    timing?: EventTiming;
    assessment_subjects?: SubjectOfAssessment[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    associated_activities?: AssociatedActivity[];
    remarks?: Remarks;
}
/**
 * Represents a scheduled event or milestone, which may be associated with a series of assessment actions.
 */
export interface Task {
    uuid: TaskUniversallyUniqueIdentifier;
    title: TaskTitle;
    description?: TaskDescription;
    props?: Property[];
    links?: Link[];
    start: TaskStartDate;
    end: TaskEndDate;
    related_actions?: ActionReference[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
