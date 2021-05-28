import { AssessmentPart, AssessmentSpecificControlObjective, AssessmentAssets, AssessmentAction } from "../assessment_plan";
import { CollectedField, ExpiresField, LoggedBy, ObservationDescription, ObservationMethod, ObservationTitle, ObservationType, ObservationUniversallyUniqueIdentifier, RelevantEvidence } from "../poam";
import { ActionDescription, ActionTitle, AssessmentLogEntryUniversallyUniqueIdentifier, AssessmentPlanReference, BackMatter, Component, ControlIdentifierReference, ImplementationStatementUUID, ImplementationStatus, Link, ObjectiveID, ObjectiveStatusDescription, ObjectiveStatusTitle, Property, PublicationMetadata, Remarks, ResponsibleParty, ReviewedControlsAndControlObjectives, RoleIdentifier, UniversallyUniqueIdentifierReferenceType, UUIDReference, Activity, InventoryItem, SystemUser, ActionReference, TaskReference } from "../shared";
import { AssessmentActor } from "../shared/Actor";
import { AssociatedRisk, IdentifiedRisk, SubjectReferenceTitle } from "../shared/IdentifiedRisk";
import { RelatedObservation } from "../shared/Observation";
import { SubjectOfAssessment } from "../shared/Subject";
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
 * A human readable description of this set of test results.
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
 * A human readable description of this finding.
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
 * Describes an individual finding.
 */
export interface Finding {
    uuid: FindingUniversallyUniqueIdentifier;
    title: FindingTitle;
    description: FindingDescription;
    props?: Property[];
    links?: Link[];
    origins?: Origin[];
    collected: CollectedField;
    expires?: ExpiresField;
    objective_status?: ObjectiveStatus;
    implementation_statement_uuid?: ImplementationStatementUUID;
    related_observations?: RelatedObservation[];
    related_risks?: AssociatedRisk[];
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
    links?: Link[];
    local_definitions?: SARLocalDefinitions;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    assessment_subjects?: SubjectOfAssessment[];
    assessment_assets?: AssessmentAssets;
    attestations?: AttestationStatements[];
    assessment_log?: AssessmentLog;
    observations?: Objective[];
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
    assessment_actions?: AssessmentAction[];
}
/**
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    parts: AssessmentPart[];
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
    links?: Link[];
    logged_by?: LoggedBy[];
    related_actions?: ActionReference[];
    related_tasks?: TaskReference[];
    remarks?: Remarks;
}
/**
 * Describes an individual observation.
 */
export interface Objective {
    uuid: ObservationUniversallyUniqueIdentifier;
    title?: ObservationTitle;
    description: ObservationDescription;
    props?: Property[];
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
    links?: Link[];
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
    links?: Link[];
    status: ImplementationStatus;
    remarks?: Remarks;
}
