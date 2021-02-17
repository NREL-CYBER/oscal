import { CollectedField, ExpiresField, ObservationMethod, ObservationTitle, ObservationType, ObservationUniversallyUniqueIdentifier, ObservatonDescription, PartyUUIDReference } from "../poam";
import { ActionDescription, ActionTitle, ActionUniversallyUniqueIdentifier, ActionUniversallyUniqueIdentifierReference, ActivityUniversallyUniqueIdentifierReference, All, AnnotatedProperty, AssessmentActivityUniversallyUniqueIdentifier, AssessmentLogEntryUniversallyUniqueIdentifier, AssessmentPlanReference, AssessmentPlatformTitle, AssessmentPlatformUniversallyUniqueIdentifier, AssociatedActivityUniversallyUniqueIdentifier, BackMatter, Component, ComponentUniversallyUniqueIdentifierReference, ConditionalDate, ControlIdentifierReference, ControlOjectivesDescription, EndDateCondition, EventDescription, EventTitle, EventUniversallyUniqueIdentifier, ImplementationStatementUUID, ImplementationStatus, IncludedActivityDescription, IncludedActivityTitle, IncludeSpecificStatements, InventoryItemDescription, InventoryItemUniversallyUniqueIdentifier, Link, ObjectiveDescription, ObjectiveID, ObjectiveStatusDescription, ObjectiveStatusTitle, OperatingState, PartClass, PartIdentifier, PartName, PartNamespace, PartText, PartTitle, PartyReference, Period, Privilege, Property, PublicationMetadata, Remarks, ResponsibleParty, ReviewedControlsAndControlObjectives, RoleIdentifier, RoleIdentifierReference, StartDateCondition, TaskUniversallyUniqueIdentifierReference, TimeUnit, UniversallyUniqueIdentifierReferenceType, UserDescription, UserShortName, UserTitle, UUIDReference } from "../shared";
import { ActorRole, AssessmentActor } from "../shared/Actor";
import { AssociatedRisk, IdentifiedRisk, RelevantEvidenceDescription, RelevantEvidenceReference, SubjectReferenceTitle } from "../shared/IdentifiedRisk";
import { RelatedObservation } from "../shared/Observation";
import { AssessmentSubjectPlaceholder, SubjectOfAssessment } from "../shared/Subject";
import { TaskDescription, TaskEndDate, TaskStartDate, TaskTitle, TaskUniversallyUniqueIdentifier } from "../shared/Task";
/**
 * Uniquely identifies this assessment results file. This UUID must be changed each time the content of the results changes.
 */
export declare type AssessmentResultsUniversallyUniqueIdentifier = string;
/**
 * Uniquely identifies this set of results. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given set of results across revisions.
 */
export declare type ResultsUniversallyUniqueIdentifier = string;
/**
 * The title for this set of results.
 */
export declare type ResultsTitle = string;
/**
 * A human_readable description of this set of test results.
 */
export declare type ResultsDescription = string;
/**
 * Date/time stamp identifying the start of the evidence collection reflected in these results.
 */
export declare type StartField = string;
/**
 * Date/time stamp identifying the end of the evidence collection reflected in these results. In a continuous motoring scenario, this may contain the same value as start if appropriate.
 */
export declare type EndField = string;
/**
 * Uniquely identifies this finding. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given finding across revisions.
 */
export declare type FindingUniversallyUniqueIdentifier = string;
/**
 * The title for this finding.
 */
export declare type FindingTitle = string;
/**
 * A human_readable description of this finding.
 */
export declare type FindingDescription = string;
/**
 * Security assessment results, such as those provided by a FedRAMP assessor in the FedRAMP Security Assessment Report.
 */
export interface SecurityAssessmentResults {
    uuid: AssessmentResultsUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ap: ImportAssessmentPlan;
    local_definitions?: LocalDefinitions;
    results: [AssessmentResult, ...AssessmentResult[]];
    back_matter?: BackMatter;
}
/**
 * Used by assessment_results to import information about the original plan for assessing the system.
 */
export interface ImportAssessmentPlan {
    href: AssessmentPlanReference;
    remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface LocalDefinitions {
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
    annotations?: AnnotatedProperty[];
    links?: Link[];
    parts: Part[];
    remarks?: Remarks;
}
/**
 * A partition of a control's definition or a child of another part.
 */
export interface Part {
    id?: PartIdentifier;
    name: PartName;
    ns?: PartNamespace;
    class?: PartClass;
    title?: PartTitle;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    prose?: PartText;
    parts?: Part[];
    links?: Link[];
}
/**
 * Identifies an assessment or related process that can be performed. In the assessment plan, this is an intended activity which may be associated with an assessment task. In the assessment results, this an activity that was actually performed as part of an assessement.
 */
export interface Activity {
    uuid: AssessmentActivityUniversallyUniqueIdentifier;
    title?: IncludedActivityTitle;
    description: IncludedActivityDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    actions?: Action[];
    related_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies an individual actions, such as test steps or examination procedures.
 */
export interface Action {
    uuid: ActionUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description: ActionDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    reviewed_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Used to select a control for inclusion/exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
    control_id: ControlIdentifierReference;
    statement_ids?: IncludeSpecificStatements[];
}
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferenedControlObjectives {
    description?: ControlOjectivesDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    include_all?: All;
    include_objectives?: SelectObjective[];
    exclude_objectives?: SelectObjective[];
    remarks?: Remarks;
}
/**
 * Used to select a control objective for inclusion/exclusion based on the control objective's identifier.
 */
export interface SelectObjective {
    objective_id: ObjectiveID;
}
/**
 * A reference to one or more roles with responsibility for performing a function relative to the containing object.
 */
export interface ResponsibleRole {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    party_uuids?: PartyReference[];
    remarks?: Remarks;
}
/**
 * Describes an individual finding.
 */
export interface Finding {
    uuid: FindingUniversallyUniqueIdentifier;
    title: FindingTitle;
    description: FindingDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    origins?: Origin[];
    collected: CollectedField;
    expires?: ExpiresField;
    objective_status?: ObjectiveStatus;
    implementation_statement_uuid?: ImplementationStatementUUID;
    related_observations?: [RelatedObservation, ...RelatedObservation[]];
    related_risks?: [AssociatedRisk, ...AssociatedRisk[]];
    remarks?: Remarks;
}
/**
 * Used by the assessment results and POA&M. In the assessment results, this identifies all of the assessment observations and findings, initial and residual risks, deviations, and disposition. In the POA&M, this identifies initial and residual risks, deviations, and disposition.
 */
export interface AssessmentResult {
    uuid: ResultsUniversallyUniqueIdentifier;
    title: ResultsTitle;
    description: ResultsDescription;
    start: StartField;
    end?: EndField;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    local_definitions?: SARLocalDefinitions;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    assessment_subjects?: SubjectOfAssessment[];
    assessment_assets?: AssessmentAssets;
    attestations?: [AttestationStatements, ...AttestationStatements[]];
    assessment_log?: AssessmentLog;
    observations?: [Objective, ...Objective[]];
    risks?: IdentifiedRisk[];
    findings: Finding[];
    remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SARLocalDefinitions {
    components?: {
        [k: string]: Component;
    };
    inventory_items?: InventoryItem[];
    users?: {
        [k: string]: SystemUser;
    };
    assessment_actions?: [AssessmentAction, ...AssessmentAction[]];
}
/**
 * Describes the operational status of the system component.
 */
export interface Status {
    state: OperatingState;
    remarks?: Remarks;
}
/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
    uuid: InventoryItemUniversallyUniqueIdentifier;
    description: InventoryItemDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    implemented_components?: ImplementedComponent[];
    remarks?: Remarks;
}
/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUser {
    title?: UserTitle;
    short_name?: UserShortName;
    description?: UserDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    role_ids?: RoleIdentifierReference[];
    authorized_privileges?: Privilege[];
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
    annotations?: AnnotatedProperty[];
    links?: Link[];
    timing?: EventTiming;
    assessment_subjects?: SubjectOfAssessment[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    associated_activities?: AssociatedActivity[];
    remarks?: Remarks;
}
/**
 * The timing under which the event is intended to occur.
 */
export interface EventTiming {
    on_date?: OnDateCondition;
    within_date_range?: OnDateRangeCondition;
    at_frequency?: FrequencyCondition;
}
/**
 * The event is intended to occur on the specified date.
 */
export interface OnDateCondition {
    date: ConditionalDate;
}
/**
 * The event is intended to occur within the specified date range.
 */
export interface OnDateRangeCondition {
    start: StartDateCondition;
    end: EndDateCondition;
}
/**
 * The event is intended to occur at the specified frequency.
 */
export interface FrequencyCondition {
    period: Period;
    unit: TimeUnit;
}
/**
 * Identifies an individual activity to be performed as part of an action.
 */
export interface AssociatedActivity {
    uuid: AssociatedActivityUniversallyUniqueIdentifier;
    activity_uuid: ActivityUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    assessment_subjects?: SubjectOfAssessment[];
    assessment_subject_placeholder?: AssessmentSubjectPlaceholder;
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
    annotations?: AnnotatedProperty[];
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
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    parts: AssessmentPart[];
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
    annotations?: AnnotatedProperty[];
    prose: PartText;
    parts?: AssessmentPart[];
    links?: Link[];
}
/**
 * A log of all assessment_related actions taken.
 */
export interface AssessmentLog {
    entries: AssessmentLogEntry[];
}
/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface AssessmentLogEntry {
    uuid: AssessmentLogEntryUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description?: ActionDescription;
    start: StartField;
    end?: EndField;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    logged_by?: LoggedBy[];
    related_actions?: ActionReference[];
    related_tasks?: TaskReference[];
    remarks?: Remarks;
}
/**
 * Used to indicate who created a log entry in what role.
 */
export interface LoggedBy {
    party_uuid: PartyUUIDReference;
    role_id?: ActorRole;
}
/**
 * Identifies an individual action for which the containing object is a consequence of.
 */
export interface ActionReference {
    action_uuid: ActionUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
    task_uuid: TaskUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    assessment_subjects?: SubjectOfAssessment[];
    remarks?: Remarks;
}
/**
 * Describes an individual observation.
 */
export interface Objective {
    uuid: ObservationUniversallyUniqueIdentifier;
    title?: ObservationTitle;
    description: ObservatonDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    methods: ObservationMethod[];
    types?: ObservationType[];
    origins?: Origin[];
    subjects?: IdentifiesTheSubject[];
    relevant_evidence?: RelevantEvidence[];
    remarks?: Remarks;
}
/**
 * Identifies the source of the finding, such as a tool, interviewed person, or activity.
 */
export interface Origin {
    actors: AssessmentActor[];
    related_actions?: ActionReference[];
    related_tasks?: TaskReference[];
}
/**
 * A pointer to a resource based on its universally unique identifier (UUID). Use type to indicate whether the identified resource is a component, inventory item, location, user, or something else.
 */
export interface IdentifiesTheSubject {
    uuid_ref: UUIDReference;
    type: UniversallyUniqueIdentifierReferenceType;
    title?: SubjectReferenceTitle;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Links this observation to relevant evidence.
 */
export interface RelevantEvidence {
    href?: RelevantEvidenceReference;
    description: RelevantEvidenceDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
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
    annotations?: AnnotatedProperty[];
    links?: Link[];
    start: TaskStartDate;
    end: TaskEndDate;
    related_actions?: ActionReference[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Captures an assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export interface ObjectiveStatus {
    objective_id?: ObjectiveID;
    control_id?: ControlIdentifierReference;
    title?: ObjectiveStatusTitle;
    description?: ObjectiveStatusDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    status: ImplementationStatus;
    remarks?: Remarks;
}
