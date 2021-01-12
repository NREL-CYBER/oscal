import { CollectedField, ExpiresField, ObservationMethod, ObservationTitle, ObservationType, ObservationUniversallyUniqueIdentifier, ObservatonDescription, PartyUUIDReference, RemediationIntent, RemediationUniversallyUniqueIdentifier, RequiredUniversallyUniqueIdentifier, ResponseDescription, ResponseTitle, ResponseUniversallyUniqueIdentifierReference, RiskLogEntryUniversallyUniqueIdentifier, RiskStatus } from "src/poam";
import { ActionDescription, ActionTitle, ActionUniversallyUniqueIdentifier, ActionUniversallyUniqueIdentifierReference, ActivityUniversallyUniqueIdentifierReference, All, AnnotatedProperty, AssessmentActivityUniversallyUniqueIdentifier, AssessmentLogEntryUniversallyUniqueIdentifier, AssessmentPlanReference, AssessmentPlatformTitle, AssessmentPlatformUniversallyUniqueIdentifier, AssociatedActivityUniversallyUniqueIdentifier, BackMatter, Component, ComponentUniversallyUniqueIdentifierReference, ConditionalDate, ControlIdentifierReference, ControlOjectivesDescription, End, EndDateCondition, EventDescription, EventTitle, EventUniversallyUniqueIdentifier, ImplementationStatementUUID, ImplementationStatus, IncludedActivityDescription, IncludedActivityTitle, IncludeSpecificStatements, InventoryItemDescription, InventoryItemUniversallyUniqueIdentifier, Link, ObjectiveDescription, ObjectiveID, ObjectiveStatusDescription, ObjectiveStatusTitle, OperatingState, PartClass, PartIdentifier, PartName, PartNamespace, PartText, PartTitle, PartyReference, Period, Privilege, Property, ProtocolName, PublicationMetadata, Remarks, ResponsibleParty, ReviewedControlsAndControlObjectives, RoleIdentifierReference, ServiceProtocolInformationUniversallyUniqueIdentifier, Start, StartDateCondition, TaskUniversallyUniqueIdentifierReference, TimeUnit, TitleField, Transport, UniversallyUniqueIdentifierReferenceType, UserDescription, UserShortName, UserTitle, UUIDReference } from "src/shared";
import { ActorRole, AssessmentActor } from "src/shared/Actor";
import { AssociatedRisk, IdentifiedRisk, RelevantEvidenceDescription, RelevantEvidenceReference, SubjectReferenceTitle } from "src/shared/IdentifiedRisk";
import { RelatedObservation } from "src/shared/Observation";
import { AssessmentSubjectPlaceholder, SubjectOfAssessment } from "src/shared/Subject";
import { DescriptionOfRequiredAsset, TaskDescription, TaskEndDate, TaskStartDate, TaskTitle, TaskUniversallyUniqueIdentifier, TitleForRequiredAsset } from "src/shared/Task";

/**
 * Uniquely identifies this assessment results file. This UUID must be changed each time the content of the results changes.
 */
export type AssessmentResultsUniversallyUniqueIdentifier = string;
/**
 * Uniquely identifies this set of results. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given set of results across revisions.
 */
export type ResultsUniversallyUniqueIdentifier = string;

/**
 * The title for this set of results.
 */
export type ResultsTitle = string;
/**
 * A human_readable description of this set of test results.
 */
export type ResultsDescription = string;
/**
 * Date/time stamp identifying the start of the evidence collection reflected in these results.
 */
export type StartField = string;
/**
 * Date/time stamp identifying the end of the evidence collection reflected in these results. In a continuous motoring scenario, this may contain the same value as start if appropriate.
 */
export type EndField = string;

/**
 * Uniquely identifies this finding. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given finding across revisions.
 */
export type FindingUniversallyUniqueIdentifier = string;
/**
 * The title for this finding.
 */
export type FindingTitle = string;
/**
 * A human_readable description of this finding.
 */
export type FindingDescription = string;

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
 * A partition of a control's definition or a child of another part.
 */
export interface Part {
  id?: PartIdentifier;
  name: PartName;
  ns?: PartNamespace;
  class?: PartClass;
  title?: PartTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  prose?: PartText;
  parts?: [Part, ...Part[]];
  links?: [Link, ...Link[]];
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
 * Identifies an individual actions, such as test steps or examination procedures.
 */
export interface Action {
  uuid: ActionUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description: ActionDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  reviewed_controls?: ReviewedControlsAndControlObjectives;
  responsible_roles?: {
    [k: string]: ResponsibleRole;
  };
  remarks?: Remarks;
}
/**
 * Used to select a control for inclusion/exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
  control_id: ControlIdentifierReference;
  statement_ids?: [IncludeSpecificStatements, ...IncludeSpecificStatements[]];
}
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferenedControlObjectives {
  description?: ControlOjectivesDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_objectives?: [SelectObjective, ...SelectObjective[]];
  exclude_objectives?: [SelectObjective, ...SelectObjective[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  party_uuids?: [PartyReference, ...PartyReference[]];
  remarks?: Remarks;
}
/**
 * Describes an individual finding.
 */
export interface Finding {
  uuid: FindingUniversallyUniqueIdentifier;
  title: FindingTitle;
  description: FindingDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  origins?: [Origin, ...Origin[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  local_definitions?: SARLocalDefinitions;
  reviewed_controls: ReviewedControlsAndControlObjectives;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  assessment_assets?: AssessmentAssets;
  attestations?: [AttestationStatements, ...AttestationStatements[]];
  assessment_log?: AssessmentLog;
  observations?: [Objective, ...Objective[]];
  risks?: [IdentifiedRisk, ...IdentifiedRisk[]];
  findings: [Finding, ...Finding[]];
  remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SARLocalDefinitions {
  components?: {
    [k: string]: Component;
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
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
 * Information about the protocol used to provide a service.
 */
export interface ServiceProtocolInformation {
  uuid?: ServiceProtocolInformationUniversallyUniqueIdentifier;
  name: ProtocolName;
  title?: TitleField;
  port_ranges?: [PortRange, ...PortRange[]];
}
/**
 * Where applicable this is the IPv4 port range on which the service operates.
 */
export interface PortRange {
  start?: Start;
  end?: End;
  transport?: Transport;
}
/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
  uuid: InventoryItemUniversallyUniqueIdentifier;
  description: InventoryItemDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty;
  };
  implemented_components?: [ImplementedComponent, ...ImplementedComponent[]];
  remarks?: Remarks;
}
/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
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
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUser {
  title?: UserTitle;
  short_name?: UserShortName;
  description?: UserDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  role_ids?: [RoleIdentifierReference, ...RoleIdentifierReference[]];
  authorized_privileges?: [Privilege, ...Privilege[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole;
  };
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
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
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
  responsible_parties?: {
    [k: string]: ResponsibleParty;
  };
  parts: [AssessmentPart, ...AssessmentPart[]];
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
 * A log of all assessment_related actions taken.
 */
export interface AssessmentLog {
  entries: [AssessmentLogEntry, ...AssessmentLogEntry[]];
}
/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface AssessmentLogEntry {
  uuid: AssessmentLogEntryUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description?: ActionDescription;
  start: Start;
  end?: End;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  logged_by?: [LoggedBy, ...LoggedBy[]];
  related_actions?: [ActionReference, ...ActionReference[]];
  related_tasks?: [TaskReference, ...TaskReference[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty;
  };
  remarks?: Remarks;
}
/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
  task_uuid: TaskUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty;
  };
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  remarks?: Remarks;
}
/**
 * Describes an individual observation.
 */
export interface Objective {
  uuid: ObservationUniversallyUniqueIdentifier;
  title?: ObservationTitle;
  description: ObservatonDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  methods: [ObservationMethod, ...ObservationMethod[]];
  types?: [ObservationType, ...ObservationType[]];
  origins?: [Origin, ...Origin[]];
  subjects?: [IdentifiesTheSubject, ...IdentifiesTheSubject[]];
  relevant_evidence?: [RelevantEvidence, ...RelevantEvidence[]];
  remarks?: Remarks;
}
/**
 * Identifies the source of the finding, such as a tool, interviewed person, or activity.
 */
export interface Origin {
  actors: [AssessmentActor, ...AssessmentActor[]];
  related_actions?: [ActionReference, ...ActionReference[]];
  related_tasks?: [TaskReference, ...TaskReference[]];
}
/**
 * A pointer to a resource based on its universally unique identifier (UUID). Use type to indicate whether the identified resource is a component, inventory item, location, user, or something else.
 */
export interface IdentifiesTheSubject {
  uuid_ref: UUIDReference;
  type: UniversallyUniqueIdentifierReferenceType;
  title?: SubjectReferenceTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * Links this observation to relevant evidence.
 */
export interface RelevantEvidence {
  href?: RelevantEvidenceReference;
  description: RelevantEvidenceDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * Describes either recommended or an actual plan for addressing the risk.
 */
export interface RiskResponse {
  uuid: RemediationUniversallyUniqueIdentifier;
  lifecycle: RemediationIntent;
  title: ResponseTitle;
  description: ResponseDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  origins?: [Origin, ...Origin[]];
  required_assets?: [RequiredAsset, ...RequiredAsset[]];
  tasks?: [Task, ...Task[]];
  remarks?: Remarks;
}
/**
 * Identifies an asset required to achieve remediation.
 */
export interface RequiredAsset {
  uuid: RequiredUniversallyUniqueIdentifier;
  subjects?: [IdentifiesTheSubject, ...IdentifiesTheSubject[]];
  title?: TitleForRequiredAsset;
  description: DescriptionOfRequiredAsset;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
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
/**
 * A log of all risk_related actions taken.
 */
export interface RiskLog {
  entries: [RiskLogEntry, ...RiskLogEntry[]];
}
/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface RiskLogEntry {
  uuid: RiskLogEntryUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description?: ActionDescription;
  start: Start;
  end?: End;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  logged_by?: [LoggedBy, ...LoggedBy[]];
  status_change?: RiskStatus;
  related_responses?: [RiskResponseActionReference, ...RiskResponseActionReference[]];
  remarks?: Remarks;
}
/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface RiskResponseActionReference {
  response_uuid: ResponseUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  related_actions?: [ActionReference, ...ActionReference[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  status: ImplementationStatus;
  remarks?: Remarks;
}
