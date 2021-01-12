import { Property, AnnotatedProperty, Link, AssociatedRiskStatus, ActionReference, TaskReference, Remarks, UUIDReference } from ".";
import { AssessmentActor } from "./Actor";
import { IdentifiesTheSubject1 } from "src/assessment_results";
import { RiskResolutionDeadline, RiskResponse, RiskLog, RelatedObservation } from "src/poam";
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export declare type UniversallyUniqueIdentifierReferenceType = string;
/**
 * The title or name for the referenced subject.
 */
export declare type SubjectReferenceTitle = string;
/**
 * >A resolvable URL reference to relevant evidence.
 */
export declare type RelevantEvidenceReference = string;
/**
 * A human_readable description of this evidence.
 */
export declare type RelevantEvidenceDescription = string;
/**
 * Uniquely identifies this risk. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given risk across revisions.
 */
export declare type RiskUniversallyUniqueIdentifier = string;
/**
 * The title for this risk.
 */
export declare type RiskTitle = string;
/**
 * A human_readable summary of what was identified regarding the risk.
 */
export declare type RiskDescription = string;
/**
 * An summary of impact for how the risk affects the system.
 */
export declare type RiskStatement = string;
/**
 * Specifies the source of the threat information.
 */
export declare type ThreatTypeIdentificationSystem = string;
/**
 * An optional location for the threat data, from which this ID originates.
 */
export declare type ThreatInformationResourceReference = string;
/**
 * The name of the risk metric within the specified system.
 */
export declare type FacetName = string;
/**
 * Specifies the naming system under which this risk metric is organized, which allows for the same names to be used in different systems controlled by different parties. This avoids the potential of a name clash.
 */
export declare type NamingSystem = string;
/**
 * Indicates the value of the facet.
 */
export declare type FacetValue = string;
/**
 * Uniquely identifies this mitigating factor. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given mitigating factor across revisions.
 */
export declare type MitigatingFactorUniversallyUniqueIdentifier = string;
/**
 * Points to an implementation statement in the SSP.
 */
export declare type ImplementationUUID = string;
/**
 * A human_readable description of this mitigating factor.
 */
export declare type MitigatingFactorDescription = string;
/**
 * References an risk defined in the list of risks.
 */
export declare type RiskUniversallyUniqueIdentifierReference = string;
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
    actors: [AssessmentActor, ...AssessmentActor[]];
    related_actions?: [ActionReference, ...ActionReference[]];
    related_tasks?: [TaskReference, ...TaskReference[]];
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
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
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
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    remarks?: Remarks;
}
/**
 * Describes an existing mitigating factor that may affect the overall determination of the risk, with an optional link to an implementation statement in the SSP.
 */
export interface MitigatingFactor {
    uuid: MitigatingFactorUniversallyUniqueIdentifier;
    implementation_uuid?: ImplementationUUID;
    description: MitigatingFactorDescription;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    subjects?: [IdentifiesTheSubject1, ...IdentifiesTheSubject1[]];
}
/**
 * An identified risk.
 */
export interface IdentifiedRisk {
    uuid: RiskUniversallyUniqueIdentifier;
    title: RiskTitle;
    description: RiskDescription;
    statement: RiskStatement;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    status: AssociatedRiskStatus;
    origins?: [Origin, ...Origin[]];
    threat_ids?: [ThreatID, ...ThreatID[]];
    characterizations?: [Characterization, ...Characterization[]];
    mitigating_factors?: [MitigatingFactor, ...MitigatingFactor[]];
    deadline?: RiskResolutionDeadline;
    remediations?: [RiskResponse, ...RiskResponse[]];
    risk_log?: RiskLog;
    related_observations?: [RelatedObservation, ...RelatedObservation[]];
}
