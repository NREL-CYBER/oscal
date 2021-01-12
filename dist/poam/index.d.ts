/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
import { ActionDescription, ActionTitle, AnnotatedProperty, Component, InventoryItem, Link, Property, PublicationMetadata, Remarks, SystemSecurityPlanReference, ActionReference } from "src/shared";
import { Origin, IdentifiedRisk, AssociatedRisk } from "src/shared/IdentifiedRisk";
import { TitleForRequiredAsset, DescriptionOfRequiredAsset, Task } from "src/shared/Task";
/**
 * Uniquely identifies this POA&M. This UUID must be changed each time the content of the POA&M changes.
 */
export declare type POAMUniversallyUniqueIdentifier = string;
/**
 * Identifies the identification system from which the provided identifier was assigned.
 */
export declare type IdentificationSystemType = string;
/**
 * A category describing the purpose of the component.
 */
export declare type ComponentType = string;
/**
 * A human readable name for the system component.
 */
export declare type ComponentTitle = string;
/**
 * A description of the component, including information about its function.
 */
export declare type ComponentDescription = string;
/**
 * A summary of the technological or business purpose of the component.
 */
export declare type Purpose = string;
/**
 * A globally unique identifier that can be used to reference this service protocol entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export declare type ServiceProtocolInformationUniversallyUniqueIdentifier = string;
/**
 * The common name of the protocol, which should be the appropriate "service name" from the IANA Service Name and Transport Protocol Port Number Registry.
 */
export declare type ProtocolName = string;
/**
 * A human readable name for the protocol (e.g., Transport Layer Security).
 */
export declare type TitleField = string;
/**
 * Indicates the starting port number in a port range
 */
export declare type Start = number;
/**
 * Indicates the ending port number in a port range
 */
export declare type End = number;
/**
 * Indicates the transport type.
 */
export declare type Transport = "TCP" | "UDP";
/**
 * A globally unique identifier that can be used to reference this inventory item entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export declare type InventoryItemUniversallyUniqueIdentifier = string;
/**
 * A summary of the inventory item stating its purpose within the system.
 */
export declare type InventoryItemDescription = string;
/**
 * A reference to a component that is implemented as part of an inventory item.
 */
export declare type ComponentUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies this observation. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given observation across revisions.
 */
export declare type ObservationUniversallyUniqueIdentifier = string;
/**
 * The title for this observation.
 */
export declare type ObservationTitle = string;
/**
 * A human_readable description of this assessment observation.
 */
export declare type ObservatonDescription = string;
/**
 * Identifies how the observation was made.
 */
export declare type ObservationMethod = string;
/**
 * Identifies the nature of the observation. More than one may be used to further qualify and enable filtering.
 */
export declare type ObservationType = string;
/**
 * The kind of actor.
 */
export declare type ActorType = "tool" | "assessment_platform" | "party";
/**
 * A pointer to the tool or person based on the associated type.
 */
export declare type ActorUUIDReference = string;
/**
 * For a party, this can optionally be used to specify the role the actor was performing.
 */
export declare type ActorRole = string;
/**
 * Indicates the type of assessment subject, such as a component, inventory, item, location, or party represented by this selection statement.
 */
export declare type SubjectType = string;
/**
 * A human_readable description of the collection of subjects being included in this assessment.
 */
export declare type IncludeSubjectsDescription = string;
/**
 * A pointer to a component, inventory_item, location, party, user, or resource using it's UUID.
 */
export declare type UUIDReference = string;
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
 * Describes the status of the associated risk.
 */
export declare type AssociatedRiskStatus = string;
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
 * A pointer to a component, inventory_item, location, party, user, or resource using it's UUID.
 */
export declare type UUIDReference2 = string;
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export declare type UniversallyUniqueIdentifierReferenceType1 = string;
/**
 * The title or name for the referenced subject.
 */
export declare type SubjectReferenceTitle1 = string;
/**
 * The date/time by which the risk must be resolved.
 */
export declare type RiskResolutionDeadline = string;
/**
 * Uniquely identifies this remediation. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given remediation across revisions.
 */
export declare type RemediationUniversallyUniqueIdentifier = string;
/**
 * Identifies whether this is a recommendation, such as from an assessor or tool, or an actual plan accepted by the system owner.
 */
export declare type RemediationIntent = string;
/**
 * The title for this response activity.
 */
export declare type ResponseTitle = string;
/**
 * A human_readable description of this response plan.
 */
export declare type ResponseDescription = string;
/**
 * Uniquely identifies this required asset. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. Once assigned, a UUID should be consistantly used for a given required asset across revisions.
 */
export declare type RequiredUniversallyUniqueIdentifier = string;
/**
 * A pointer to a component, inventory_item, location, party, user, or resource using it's UUID.
 */
export declare type UUIDReference3 = string;
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export declare type UniversallyUniqueIdentifierReferenceType2 = string;
/**
 * The title or name for the referenced subject.
 */
export declare type SubjectReferenceTitle2 = string;
/**
 * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export declare type RiskLogEntryUniversallyUniqueIdentifier = string;
/**
 * Identifies the start date and time of an event.
 */
export declare type Start1 = string;
/**
 * Identifies the end date and time of an event. If the event is a point in time, the start and end will be the same date and time.
 */
export declare type End1 = string;
/**
 * A pointer to the party who is making the log entry.
 */
export declare type PartyUUIDReference = string;
/**
 * A point to the role_id of the role in which the party is making the log entry.
 */
export declare type ActorRole1 = string;
/**
 * Describes the status of the associated risk.
 */
export declare type RiskStatus = string;
/**
 * References a unique risk response by UUID.
 */
export declare type ResponseUniversallyUniqueIdentifierReference = string;
/**
 * References an observation defined in the list of observations.
 */
export declare type ObservationUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies the POA&M entry. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for a given POA&M item across revisions of the document.
 */
export declare type POAMItemUniversallyUniqueIdentifier = string;
/**
 * The title or name for this POA&M item .
 */
export declare type POAMItemTitle = string;
/**
 * A human_readable description of POA&M item.
 */
export declare type POAMItemDescription = string;
/**
 * Date/time stamp identifying when the finding information was collected.
 */
export declare type CollectedField = string;
/**
 * Date/time identifying when the finding information is out_of_date and no longer valid. Typically used with continuous assessment scenarios.
 */
export declare type ExpiresField = string;
/**
 * References an observation defined in the list of observations.
 */
export declare type ObservationUniversallyUniqueIdentifierReference1 = string;
/**
 * A globally unique identifier that can be used to reference this defined resource elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ResourceUniversallyUniqueIdentifier = string;
/**
 * A name given to the resource, which may be used by a tool for display and navigation.
 */
export declare type ResourceTitle = string;
/**
 * A short summary of the resource used to indicate the purpose of the resource.
 */
export declare type ResourceDescription = string;
/**
 * Qualifies the kind of document identifier.
 */
export declare type DocumentIdentificationScheme1 = string;
/**
 * A line of citation text.
 */
export declare type CitationText = string;
/**
 * A resolvable URI reference to a resource.
 */
export declare type HypertextReference1 = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export declare type MediaType1 = string;
/**
 * Method by which a hash is derived
 */
export declare type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export declare type FileName = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export declare type MediaType2 = string;
/**
 * A plan of action and milestones which identifies initial and residual risks, deviations, and disposition, such as those required by FedRAMP.
 */
export interface PlanOfActionAndMilestones {
    uuid: POAMUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ssp?: ImportSystemSecurityPlan;
    system_id?: SystemIdentification;
    local_definitions?: PoamLocalDefinitions;
    observations?: [Objective, ...Objective[]];
    risks?: [IdentifiedRisk, ...IdentifiedRisk[]];
    poam_items: [POAMItem, ...POAMItem[]];
    back_matter?: BackMatter;
}
/**
 * Used by the assessment plan and POA&M to import information about the system.
 */
export interface ImportSystemSecurityPlan {
    href: SystemSecurityPlanReference;
    remarks?: Remarks;
}
/**
 * A unique identifier for the system described by this system security plan.
 */
export interface SystemIdentification {
    identifier_type?: IdentificationSystemType;
    id: string;
}
/**
 * Allows components, and inventory_items to be defined within the POA&M for circumstances where no OSCAL_based SSP exists, or is not delivered with the POA&M.
 */
export interface PoamLocalDefinitions {
    components?: {
        [k: string]: Component;
    };
    inventory_items?: [InventoryItem, ...InventoryItem[]];
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
    subjects?: [IdentifiesTheSubject, ...IdentifiesTheSubject[]];
}
/**
 * A pointer to a resource based on its universally unique identifier (UUID). Use type to indicate whether the identified resource is a component, inventory item, location, user, or something else.
 */
export interface IdentifiesTheSubject {
    uuid_ref: UUIDReference2;
    type: UniversallyUniqueIdentifierReferenceType1;
    title?: SubjectReferenceTitle1;
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
    start: Start1;
    end?: End1;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    logged_by?: [LoggedBy, ...LoggedBy[]];
    status_change?: RiskStatus;
    related_responses?: [ActionReference1, ...ActionReference1[]];
    remarks?: Remarks;
}
/**
 * Used to indicate who created a log entry in what role.
 */
export interface LoggedBy {
    party_uuid: PartyUUIDReference;
    role_id?: ActorRole1;
}
/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface ActionReference1 {
    response_uuid: ResponseUniversallyUniqueIdentifierReference;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    related_actions?: [ActionReference, ...ActionReference[]];
    remarks?: Remarks;
}
/**
 * Relates the finding to a set of referenced observations that were used to determine the finding.
 */
export interface RelatedObservation {
    observation_uuid: ObservationUniversallyUniqueIdentifierReference;
}
/**
 * Describes an individual POA&M item.
 */
export interface POAMItem {
    uuid?: POAMItemUniversallyUniqueIdentifier;
    title: POAMItemTitle;
    description: POAMItemDescription;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    origins?: [Origin, ...Origin[]];
    collected: CollectedField;
    expires?: ExpiresField;
    related_observations?: [RelatedPoamObservation, ...RelatedPoamObservation[]];
    related_risks?: [AssociatedRisk, ...AssociatedRisk[]];
    remarks?: Remarks;
}
/**
 * Relates the poam_item to a set of referenced observations that were used to determine the finding.
 */
export interface RelatedPoamObservation {
    observation_uuid: ObservationUniversallyUniqueIdentifierReference;
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
    resources?: [Resource, ...Resource[]];
}
/**
 * A resource associated with content in the containing document. A resource may be directly included in the document base64 encoded or may point to one or more equavalent internet resources.
 */
export interface Resource {
    uuid: ResourceUniversallyUniqueIdentifier;
    title?: ResourceTitle;
    description?: ResourceDescription;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    document_ids?: [DocumentIdentifier1, ...DocumentIdentifier1[]];
    citation?: Citation;
    rlinks?: [ResourceLink, ...ResourceLink[]];
    base64?: Base64;
    remarks?: Remarks;
}
/**
 * A document identifier qualified by an identifier type.
 */
export interface DocumentIdentifier1 {
    scheme: DocumentIdentificationScheme1;
    identifier: string;
}
/**
 * A citation consisting of end note text and optional structured bibliographic data.
 */
export interface Citation {
    text: CitationText;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    biblio?: BibliographicDefinition;
}
/**
 * A container for structured bibliographic information. The model of this information is undefined by OSCAL.
 */
export interface BibliographicDefinition {
}
/**
 * A pointer to an external resource with an optional hash for verification and change detection.
 */
export interface ResourceLink {
    href: HypertextReference1;
    media_type?: MediaType1;
    hashes?: [Hash, ...Hash[]];
}
/**
 * A representation of a cryptographic digest generated over a resource using a specified hash algorithm.
 */
export interface Hash {
    algorithm: HashAlgorithm;
    value: string;
}
/**
 * The Base64 alphabet in RFC 2045 _ aligned with XSD.
 */
export interface Base64 {
    filename?: FileName;
    media_type?: MediaType2;
    value: string;
}
