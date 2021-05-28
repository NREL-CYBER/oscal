import { ActionReference, AnnotatedProperty, AssociatedRiskStatus, Link, Property, Remarks, TaskReference, UUIDReference, ActionDescription, ActionTitle } from ".";
import { AssessmentActor } from "./Actor";
import { RelatedObservation } from "./Observation";
import { EndField, StartField, LoggedBy } from "../assessment_results";
import { Task, DescriptionOfRequiredAsset } from "./Task";
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export type UniversallyUniqueIdentifierReferenceType = string;
/**
 * The title or name for the referenced subject.
 */
export type SubjectReferenceTitle = string;
/**
 * >A resolvable URL reference to relevant evidence.
 */
export type RelevantEvidenceReference = string;
/**
 * A human_readable description of this evidence.
 */
export type RelevantEvidenceDescription = string;
/**
 * Uniquely identifies this risk. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given risk across revisions.
 */
export type RiskUniversallyUniqueIdentifier = string;
/**
 * The title for this risk.
 */
export type RiskTitle = string;
/**
 * A human_readable summary of what was identified regarding the risk.
 */
export type RiskDescription = string;
/**
 * An summary of impact for how the risk affects the system.
 */
export type RiskStatement = string;
/**
 * Specifies the source of the threat information.
 */
export type ThreatTypeIdentificationSystem = string;
/**
 * An optional location for the threat data, from which this ID originates.
 */
export type ThreatInformationResourceReference = string;
/**
 * The name of the risk metric within the specified system.
 */
export type FacetName = string;
/**
 * Specifies the naming system under which this risk metric is organized, which allows for the same names to be used in different systems controlled by different parties. This avoids the potential of a name clash.
 */
export type NamingSystem = string;
/**
 * Indicates the value of the facet.
 */
export type FacetValue = string;
/**
 * Uniquely identifies this mitigating factor. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given mitigating factor across revisions.
 */
export type MitigatingFactorUniversallyUniqueIdentifier = string;
/**
 * Points to an implementation statement in the SSP.
 */
export type ImplementationUUID = string;
/**
 * A human_readable description of this mitigating factor.
 */
export type MitigatingFactorDescription = string;
/**
 * References an risk defined in the list of risks.
 */
export type RiskUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export type RiskLogEntryUniversallyUniqueIdentifier = string;
/**
 * The date/time by which the risk must be resolved.
 */
export type RiskResolutionDeadline = string;
/**
 * Describes the status of the associated risk.
 */
export type RiskStatus = string;
/**
 * References a unique risk response by UUID.
 */
export type ResponseUniversallyUniqueIdentifierReference = string;

/**
 * Uniquely identifies this required asset. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given required asset across revisions.
 */
export declare type RequiredUniversallyUniqueIdentifier = string;

/**
 * Uniquely identifies this remediation. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given remediation across revisions.
 */
export type RemediationUniversallyUniqueIdentifier = string;
/**
 * Identifies whether this is a recommendation, such as from an assessor or tool, or an actual plan accepted by the system owner.
 */
export type RemediationIntent = string;
/**
 * The title for this response activity.
 */
export type ResponseTitle = string;
/**
 * A human_readable description of this response plan.
 */
export type ResponseDescription = string;

/**
 * The title for this required asset.
 */
export declare type TitleForRequiredAsset = string;

/**
 * A log of all risk_related actions taken.
 */
export interface RiskLog {
    entries: RiskLogEntry[];
}



/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface RiskLogEntry {
    uuid: RiskLogEntryUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description?: ActionDescription;
    start: StartField;
    end?: EndField;
    props?: Property[];
    links?: Link[];
    logged_by?: LoggedBy[];
    status_change?: RiskStatus;
    related_responses?: RiskResponseReference[];
    remarks?: Remarks;
}

/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface RiskResponseReference {
    response_uuid: ResponseUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    related_actions?: ActionReference[];
    remarks?: Remarks;
}

/**
 * Relates the finding to a set of referenced risks that were used to determine the finding.
 */
export interface AssociatedRisk {
    risk_uuid: RiskUniversallyUniqueIdentifierReference;
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
 * Identifies a set of assessment subjects to include/exclude by UUID.
 */
export interface SelectAssessmentSubject {
    uuid_ref: UUIDReference;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
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
 * A pointer, by ID, to an externally_defined threat.
 */
export interface ThreatID {
    system: ThreatTypeIdentificationSystem;
    href?: ThreatInformationResourceReference;
    id: string;
}
/**
 * A collection of descriptive data about the containing object from a specific origin.
 */
export interface Characterization {
    props?: Property[];
    links?: Link[];
    origin: Origin;
    facets: [Facet, ...Facet[]];
}
/**
 * An individual characteristic that is part of a larger set produced by the same actor.
 */
export interface Facet {
    name: FacetName;
    system: NamingSystem;
    value: FacetValue;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Describes an existing mitigating factor that may affect the overall determination of the risk, with an optional link to an implementation statement in the SSP.
 */
export interface MitigatingFactor {
    uuid: MitigatingFactorUniversallyUniqueIdentifier;
    implementation_uuid?: ImplementationUUID;
    description: MitigatingFactorDescription;
    props?: Property[];
    links?: Link[];
    subjects?: IdentifiesTheSubject[];
}

/**
 * Identifies an asset required to achieve remediation.
 */
export interface RequiredAsset {
    uuid: RequiredUniversallyUniqueIdentifier;
    subjects?: IdentifiesTheSubject[];
    title?: TitleForRequiredAsset;
    description: DescriptionOfRequiredAsset;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface RiskResponseActionReference {
    response_uuid: ResponseUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    related_actions?: ActionReference[];
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
    props?: Property[];
    links?: Link[];
    origins?: Origin[];
    required_assets?: RequiredAsset[];
    tasks?: Task[];
    remarks?: Remarks;
}
/**
 * An identified risk.
 */
export interface IdentifiedRisk {
    uuid: RiskUniversallyUniqueIdentifier;
    title: RiskTitle;
    description: RiskDescription;
    statement: RiskStatement;
    props?: Property[];
    links?: Link[];
    status: AssociatedRiskStatus;
    origins?: Origin[];
    threat_ids?: ThreatID[];
    characterizations?: Characterization[];
    mitigating_factors?: MitigatingFactor[];
    deadline?: RiskResolutionDeadline;
    remediations?: RiskResponse[];
    risk_log?: RiskLog;
    related_observations?: RelatedObservation[];
}
