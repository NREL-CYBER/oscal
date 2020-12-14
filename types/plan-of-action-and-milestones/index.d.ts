export interface Coordinate {
    planOfActionAndMilestones: PlanOfActionAndMilestonesPOAM;
}

/**
 * A plan of action and milestones, such as those required by FedRAMP.
 */
export interface PlanOfActionAndMilestonesPOAM {
    backMatter?: BackMatter;
    importSSP?: ImportSystemSecurityPlan;
    localDefinitions?: LocalDefinitions;
    metadata: PublicationMetadata;
    poamItems: POAMItems;
    systemID?: SystemIdentification;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * A collection of citations and resource references.
 */
export interface BackMatter {
    resources?: Resource[];
}

/**
 * A resource associated with the present document, which may be a pointer to other data or
 * a citation.
 */
export interface Resource {
    attachments?: Base64[];
    citation?: Citation;
    desc?: string;
    documentIDS?: DocumentIdentifier[];
    properties?: Property[];
    remarks?: string;
    rlinks?: ResourceLink[];
    title?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

export interface Base64 {
    /**
     * Name of the file before it was encoded as Base64 to be embedded in a resource. This is
     * the name that will be assigned to the file when the file is decoded.
     */
    filename?: string;
    /**
     * Describes the media type of the linked resource
     */
    mediaType?: string;
    value: string;
}

/**
 * A citation consisting of end note text and optional structured bibliographic data.
 */
export interface Citation {
    biblio?: BibliographicDefinition;
    properties?: Property[];
    text: string;
}

/**
 * A container in which a set of bibliographic information can included. The model of this
 * information is undefined by OSCAL.
 */
export interface BibliographicDefinition {
}

/**
 * A value with a name, attributed to the containing control, part, or group.
 */
export interface Property {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    /**
     * A namespace qualifying the name.
     */
    ns?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
    value: string;
}

/**
 * A document identifier qualified by an identifier type.
 */
export interface DocumentIdentifier {
    identifier: string;
    /**
     * Qualifies the kind of document identifier.
     */
    type: string;
}

/**
 * A pointer to an external copy of a document with optional hash for verification
 */
export interface ResourceLink {
    hashes?: Hash[];
    /**
     * A link to a document or document fragment (actual, nominal or projected)
     */
    href: string;
    /**
     * Describes the media type of the linked resource
     */
    mediaType?: string;
}

/**
 * A representation of a cryptographic digest generated over a resource using a hash
 * algorithm.
 */
export interface Hash {
    /**
     * Method by which a hash is derived
     */
    algorithm: string;
    value: string;
}

/**
 * Used by the assessment plan and POA&M to import information about the system.
 */
export interface ImportSystemSecurityPlan {
    /**
     * A link to a document or document fragment (actual, nominal or projected)
     */
    href: string;
    remarks?: string;
}

/**
 * Allows components, and inventory-items to be defined within the POA&M for circumstances
 * where no OSCAL-based SSP exists, or is not delivered with the POA&M.
 */
export interface LocalDefinitions {
    components?: Record<string, Component>;
    inventoryItems?: Record<string, InventoryItem>;
    remarks?: string;
}

/**
 * A defined component that can be part of an implemented system.
 */
export interface Component {
    annotations?: Annotation[];
    /**
     * A category describing the purpose of the component.
     */
    componentType: string;
    description: string;
    links?: Link[];
    properties?: Property[];
    protocols?: Protocol[];
    purpose?: string;
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    status: Status;
    title: string;
}

/**
 * A name/value pair with optional explanatory remarks.
 */
export interface Annotation {
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    /**
     * A namespace qualifying the name.
     */
    ns?: string;
    remarks?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
    /**
     * Indicates the value of the characteristic.
     */
    value?: string;
}

/**
 * A reference to a local or remote resource
 */
export interface Link {
    /**
     * A link to a document or document fragment (actual, nominal or projected)
     */
    href: string;
    /**
     * Describes the media type of the linked resource
     */
    mediaType?: string;
    /**
     * Describes the type of relationship provided by the link. This can be an indicator of the
     * link's purpose.
     */
    rel?: string;
    text: string;
}

/**
 * Information about the protocol used to provide a service.
 */
export interface Protocol {
    /**
     * The short name of the protocol (e.g., TLS).
     */
    name: string;
    portRanges?: PortRange[];
    title?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
}

/**
 * Where applicable this is the IPv4 port range on which the service operates.
 */
export interface PortRange {
    /**
     * Indicates the ending port number in a port range
     */
    end?: number;
    /**
     * Indicates the starting port number in a port range
     */
    start?: number;
    /**
     * Indicates the transport type.
     */
    transport?: Transport;
}

/**
 * Indicates the transport type.
 */
export enum Transport {
    TCP = "TCP",
    UDP = "UDP",
}

/**
 * A reference to one or more roles with responsibility for performing a function relative
 * to the control.
 */
export interface ResponsibleRole {
    annotations?: Annotation[];
    links?: Link[];
    partyUuids?: string[];
    properties?: Property[];
    remarks?: string;
}

/**
 * Describes the operational status of the system.
 */
export interface Status {
    remarks?: string;
    /**
     * The current operating status.
     */
    state: State;
}

/**
 * The current operating status.
 */
export enum State {
    Disposition = "disposition",
    Operational = "operational",
    Other = "other",
    UnderDevelopment = "under-development",
    UnderMajorModification = "under-major-modification",
}

/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
    annotations?: Annotation[];
    /**
     * Organizational asset identifier that is unique in the context of the system. This may be
     * a reference to the identifier used in an asset tracking system or a vulnerability
     * scanning tool.
     */
    assetID: string;
    description: string;
    implementedComponents?: Record<string, ImplementedComponent>;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleParties?: Record<string, ResponsibleParty>;
}

/**
 * The set of componenets that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
    annotations?: Annotation[];
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleParties?: Record<string, ResponsibleParty>;
    /**
     * The type of implementation
     */
    use?: string;
}

/**
 * A reference to a set of organizations or persons that have responsibility for performing
 * a referenced role relative to the parent context.
 */
export interface ResponsibleParty {
    annotations?: Annotation[];
    links?: Link[];
    partyUuids: string[];
    properties?: Property[];
    remarks?: string;
}

/**
 * Provides information about the publication and availability of the containing document.
 */
export interface PublicationMetadata {
    documentIDS?: DocumentIdentifier[];
    lastModified: Date;
    links?: Link[];
    locations?: Location[];
    oscalVersion: string;
    parties?: PartyOrganizationOrPerson[];
    properties?: Property[];
    published?: Date;
    remarks?: string;
    responsibleParties?: Record<string, ResponsibleParty>;
    revisionHistory?: RevisionHistoryEntry[];
    roles?: Role[];
    title: string;
    version: string;
}

/**
 * A location, with associated metadata that can be referenced.
 */
export interface Location {
    address: Address;
    annotations?: Annotation[];
    emailAddresses?: string[];
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    telephoneNumbers?: Telephone[];
    title?: string;
    urLs?: string[];
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * A postal address.
 */
export interface Address {
    city?: string;
    country?: string;
    postalAddress?: string[];
    postalCode?: string;
    state?: string;
    /**
     * Indicates the type of address.
     */
    type?: string;
}

/**
 * Contact number by telephone
 */
export interface Telephone {
    number: string;
    /**
     * Indicates the type of phone number.
     */
    type?: string;
}

/**
 * A responsible entity, either singular (an organization or person) or collective (multiple
 * persons)
 */
export interface PartyOrganizationOrPerson {
    addresses?: Address[];
    annotations?: Annotation[];
    emailAddresses?: string[];
    externalIDS?: PersonalIdentifier[];
    links?: Link[];
    locationUuids?: string[];
    memberOfOrganizations?: string[];
    partyName: string;
    properties?: Property[];
    remarks?: string;
    shortName?: string;
    telephoneNumbers?: Telephone[];
    /**
     * A category describing the kind of party the object describes.
     */
    type: PartyType;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * An identifier for a person (such as an ORCID) using a designated scheme.
 */
export interface PersonalIdentifier {
    id: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type: string;
}

/**
 * A category describing the kind of party the object describes.
 */
export enum PartyType {
    Organization = "organization",
    Person = "person",
}

/**
 * An entry in a sequential list of revisions to the containing document in reverse
 * chronological order (i.e., most recent previous revision first).
 */
export interface RevisionHistoryEntry {
    lastModified?: Date;
    links?: Link[];
    oscalVersion?: string;
    properties?: Property[];
    published?: Date;
    remarks?: string;
    title?: string;
    version?: string;
}

/**
 * Defining a role to be assigned to a party
 */
export interface Role {
    annotations?: Annotation[];
    desc?: string;
    /**
     * Unique identifier of the containing object
     */
    id: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    shortName?: string;
    title: string;
}

/**
 * This identifies initial and residual risks, deviations, and disposition.
 */
export interface POAMItems {
    annotations?: Annotation[];
    description: string;
    end?: Date;
    poamItemGroup: POAMItem[];
    properties?: Property[];
    remarks?: string;
    start: Date;
    title: string;
}

/**
 * Describes an individual POA&M item.
 */
export interface POAMItem {
    annotations?: Annotation[];
    collected: Date;
    description: string;
    expires?: Date;
    implementationStatementUUID?: string;
    objectiveStatus?: ObjectiveStatusClass;
    observations?: Objective[];
    partyUuids?: string[];
    properties?: Property[];
    remarks?: string;
    risks?: IdentifiedRisk[];
    threatIDS?: ThreatID[];
    title: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Captures an assessors conclusions as to whether an objective is fully satisfied.
 */
export interface ObjectiveStatusClass {
    /**
     * A reference to a control identifier.
     */
    controlID?: string;
    description?: string;
    implementationStatus?: ImplementationStatusClass;
    /**
     * Points to an assessment objective.
     */
    objectiveID?: string;
    remarks?: string;
    result?: Result;
    title?: string;
}

/**
 * Identifies the implementation status of the control or control objective.
 */
export interface ImplementationStatusClass {
    strvalue: string;
    /**
     * Identifies the framework or rules to which this value conforms.
     */
    system?: string;
}

/**
 * A brief indication as to whether the objective is satisfied or not.
 */
export interface Result {
    strvalue: string;
    /**
     * Identifies the framework or rules to which this value conforms.
     */
    system?: string;
}

/**
 * Describes an individual observation.
 */
export interface Objective {
    annotations?: Annotation[];
    assessors?: Assessor[];
    description: string;
    evidenceGroup?: RelevantEvidence[];
    observationMethods: string[];
    observationTypes?: string[];
    origins?: Origin[];
    properties?: Property[];
    remarks?: string;
    subjectReferences?: IdentifiesTheSubject[];
    title?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies an individual who gathered the evidence resulting in the observation or risk
 * identification.
 */
export interface Assessor {
    /**
     * The UUID of the assessor who collected the evidence or made the observation.
     */
    partyUUID: string;
    strvalue: string;
}

/**
 * Links this observation to relevant evidence.
 */
export interface RelevantEvidence {
    annotations?: Annotation[];
    description: string;
    /**
     * Links to evidence as URI. May use a URI fragment to point to a resource in the
     * back-matter.
     */
    href?: string;
    properties?: Property[];
    remarks?: string;
}

/**
 * Identifies the tool or activity that resulted in the observation.
 */
export interface Origin {
    strvalue: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type: Type;
    /**
     * A pointer to a relevant item, using it's UUID.
     */
    uuidRef: string;
}

/**
 * Indicating the type of identifier, address, email or other data item.
 */
export enum Type {
    IncludedActivity = "included-activity",
    Other = "other",
    Task = "task",
    TestMethod = "test-method",
    Tool = "tool",
}

/**
 * A pointer to a resource based on its ID. Use type to indicate whether the identified
 * resource is a component, inventory item, location, user, or something else.
 */
export interface IdentifiesTheSubject {
    props?: Property[];
    title?: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type: string;
    /**
     * A pointer to a component, inventory-item, location, party, user, or resource using it's
     * UUID.
     */
    uuidRef: string;
}

/**
 * An identified risk.
 */
export interface IdentifiedRisk {
    annotations?: Annotation[];
    closureActions?: string;
    description: string;
    mitigatingFactors?: MitigatingFactor[];
    partyUuids?: string[];
    properties?: Property[];
    remediationDeadline?: Date;
    remediationGroup?: Remediation[];
    remediationTracking?: RemediationTracking;
    riskMetrics?: RiskMetric[];
    riskStatement: string;
    riskStatus: string;
    title: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Describes a mitigating factor with an optional link to an implementation statement in the
 * SSP.
 */
export interface MitigatingFactor {
    description: string;
    /**
     * Points to an implementation statement in the SSP.
     */
    implementationUUID?: string;
    subjectReferences?: IdentifiesTheSubject[];
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Describes either recommendation or an actual plan for remediating the risk.
 */
export interface Remediation {
    annotations?: Annotation[];
    description: string;
    origins?: RemediationOrigin[];
    properties?: Property[];
    remarks?: string;
    requirements?: Required[];
    schedule?: Schedule;
    title: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Points to the source of the remediation recommendation or plan
 */
export interface RemediationOrigin {
    strvalue: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type?: string;
    /**
     * A pointer to a relevant item, using it's UUID.
     */
    uuidRef: string;
}

/**
 * Identifies something required to achieve remediation.
 */
export interface Required {
    annotations?: Annotation[];
    description: string;
    properties?: Property[];
    remarks?: string;
    subjectReferences?: IdentifiesTheSubject[];
    title?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies the schedule for the assessment activities.
 */
export interface Schedule {
    tasks: Task[];
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
}

/**
 * Identifies an individual task.
 */
export interface Task {
    activityUuids?: string[];
    annotations?: Annotation[];
    compareTo?: string;
    description?: string;
    end?: Date;
    locationUuids?: string[];
    partyUuids?: string[];
    properties?: Property[];
    remarks?: string;
    roleIDS?: string[];
    start?: Date;
    title?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * A log of events and actions taken towards the remediation of the associated risk.
 */
export interface RemediationTracking {
    trackingEntries: TrackingEntry[];
}

/**
 * Individual remediation tracking entry, which logs an event or action taken towards the
 * remediation of the associated risk.
 */
export interface TrackingEntry {
    annotations?: Annotation[];
    dateTimeStamp: Date;
    description: string;
    properties?: Property[];
    remarks?: string;
    title?: string;
    /**
     * Indicating the type of identifier, address, email or other data item.
     */
    type?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * An individual risk metric from a specified system.
 */
export interface RiskMetric {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    strvalue: string;
    /**
     * Specifies the system represented by this risk metric.
     */
    system?: string;
}

/**
 * A pointer, by ID, to an externally-defined threat.
 */
export interface ThreatID {
    strvalue: string;
    /**
     * Specifies the source of the threat information.
     */
    system: string;
    /**
     * An optional location for the threat data, from which this ID originates.
     */
    uri?: string;
}

/**
 * A unique identifier for the system described by this system security plan.
 */
export interface SystemIdentification {
    id: string;
    /**
     * Identifies the identification system from which the provided identifier was assigned.
     */
    identifierType?: string;
}
