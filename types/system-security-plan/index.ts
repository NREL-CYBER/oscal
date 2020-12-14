export interface Coordinate {
    systemSecurityPlan: SystemSecurityPlanSSP;
}

/**
 * A system security plan, such as those described in NIST SP 800-18
 */
export interface SystemSecurityPlanSSP {
    backMatter?: BackMatter;
    controlImplementation: ControlImplementation;
    importProfile: ImportProfile;
    metadata: PublicationMetadata;
    systemCharacteristics: SystemCharacteristics;
    systemImplementation: SystemImplementation;
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
 * Describes how the system satisfies a set of controls.
 */
export interface ControlImplementation {
    description: string;
    implementedRequirements: ControlBasedRequirement[];
}

/**
 * Describes how the system satisfies an individual control.
 */
export interface ControlBasedRequirement {
    annotations?: Annotation[];
    byComponents?: Record<string, ComponentControlImplementation>;
    /**
     * A reference to a control identifier.
     */
    controlID: string;
    links?: Link[];
    parameterSettings?: Record<string, SetParameterValue>;
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    statements?: Record<string, SpecificStatement>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
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
 * Defines how the referenced component implements a set of controls.
 */
export interface ComponentControlImplementation {
    annotations?: Annotation[];
    description: string;
    export?: Export;
    inheritedGroup?: InheritedGroup;
    links?: Link[];
    parameterSettings?: Record<string, SetParameterValue>;
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    satisfiedGroup?: SatisfiedGroup;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies content intended for external consumption, such as with leveraged
 * organizations.
 */
export interface Export {
    annotations?: Annotations;
    description?: string;
    links?: Link[];
    properties?: Property[];
    providedGroup?: ProvidedGroup;
    remarks?: string;
    responsibilities?: Responsibilities;
}

export type Annotations = Annotation[] | Annotation;

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

export type ProvidedGroup = Provided[] | Provided;

/**
 * Describes a capability which may be inherited by a leveraging system.
 */
export interface Provided {
    annotations?: Annotations;
    description: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
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

export type Responsibilities = Responsibility[] | Responsibility;

/**
 * Describes a responsibiity imposed on a leveraging system.
 */
export interface Responsibility {
    annotations?: Annotations;
    description: string;
    links?: Link[];
    properties?: Property[];
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    providedUUID?: string;
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

export type InheritedGroup = Inherited[] | Inherited;

/**
 * Describes a responsibiity imposed on a leveraging system.
 */
export interface Inherited {
    annotations?: Annotations;
    description: string;
    links?: Link[];
    properties?: Property[];
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    providedUUID?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies the parameter that will be filled in by the enclosed value element.
 */
export interface SetParameterValue {
    value: string;
}

export type SatisfiedGroup = Satisfied[] | Satisfied;

/**
 * Describes how this system satisfies a responsibiity imposed by a leveraged system.
 */
export interface Satisfied {
    annotations?: Annotations;
    description: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    responsibilityUUID?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificStatement {
    annotations?: Annotations;
    byComponents?: Record<string, ComponentControlImplementation>;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Used to import the OSCAL profile representing the system's control baseline.
 */
export interface ImportProfile {
    /**
     * A link to a document or document fragment (actual, nominal or projected)
     */
    href: string;
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
 * Contains the characteristics of the system, such as its name, purpose, and security
 * impact level.
 */
export interface SystemCharacteristics {
    annotations?: Annotation[];
    authorizationBoundary: AuthorizationBoundary;
    dataFlow?: DataFlow;
    dateAuthorized?: string;
    description: string;
    links?: Link[];
    networkArchitecture?: NetworkArchitecture;
    properties?: Property[];
    remarks?: string;
    responsibleParties?: Record<string, ResponsibleParty>;
    securityImpactLevel: SecurityImpactLevel;
    securitySensitivityLevel: SecuritySensitivityLevel;
    status: Status;
    systemIDS: SystemIdentification[];
    systemInformation: SystemInformation;
    systemName: string;
    systemNameShort?: string;
}

/**
 * A description of this system's authorization boundary, optionally supplemented by
 * diagrams that illustrate the authorization boundary.
 */
export interface AuthorizationBoundary {
    annotations?: Annotation[];
    description: string;
    diagrams?: Record<string, Diagram>;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
}

/**
 * A graphic that provides a visual representation the system, or some aspect of it.
 */
export interface Diagram {
    caption?: string;
    description?: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
}

/**
 * A description of the logical flow of information within the system and across its
 * boundaries, optionally supplemented by diagrams that illustrate these flows.
 */
export interface DataFlow {
    annotations?: Annotation[];
    description: string;
    diagrams?: Record<string, Diagram>;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
}

/**
 * A description of the system's network architecture, optionally supplemented by diagrams
 * that illustrate the network architecture.
 */
export interface NetworkArchitecture {
    annotations?: Annotation[];
    description: string;
    diagrams?: Record<string, Diagram>;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
}

/**
 * The overall level of expected impact resulting from unauthorized disclosure,
 * modification, or loss of access to information.
 */
export interface SecurityImpactLevel {
    securityObjectiveAvailability?: Ity;
    securityObjectiveConfidentiality?: Ity;
    securityObjectiveIntegrity?: Ity;
}

/**
 * A target-level of availability for the system, based on the sensitivity of information
 * within the system.
 *
 * A target-level of confidentiality for the system, based on the sensitivity of information
 * within the system.
 *
 * A target-level of integrity for the system, based on the sensitivity of information
 * within the system.
 *
 * The prescribed base (Confidentiality, Integrity, or Availability) security impact level.
 *
 * The selected (Confidentiality, Integrity, or Availability) security impact level.
 */
export enum Ity {
    FIPS199High = "fips-199-high",
    FIPS199Low = "fips-199-low",
    FIPS199Moderate = "fips-199-moderate",
}

/**
 * The overall information system sensitivity categorization, such as defined by FIPS-199.
 */
export enum SecuritySensitivityLevel {
    High = "high",
    Low = "low",
    Moderate = "moderate",
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
 * A unique identifier for the system described by this system security plan.
 */
export interface SystemIdentification {
    id: string;
    /**
     * Identifies the identification system from which the provided identifier was assigned.
     */
    identifierType?: string;
}

/**
 * Contains details about all information types that are stored, processed, or transmitted
 * by the system, such as privacy information, and those defined in NIST SP 800-60.
 */
export interface SystemInformation {
    annotations?: Annotation[];
    informationTypes: InformationType[];
    links?: Link[];
    properties?: Property[];
}

/**
 * Contains details about one information type that is stored, processed, or transmitted by
 * the system, such as privacy information, and those defined in NIST SP 800-60.
 */
export interface InformationType {
    availabilityImpact: AvailabilityImpactLevel;
    confidentialityImpact: ConfidentialityImpactLevel;
    description: string;
    informationTypeIDS?: Record<string, InformationTypeIdentifier>;
    integrityImpact: IntegrityImpactLevel;
    properties?: Property[];
    title: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
}

/**
 * The expected level of impact resulting from the disruption of access to or use of
 * information or the information system.
 */
export interface AvailabilityImpactLevel {
    adjustmentJustification?: string;
    base: Ity;
    properties?: Property[];
    selected?: Ity;
}

/**
 * The expected level of impact resulting from the unauthorized disclosure of information.
 */
export interface ConfidentialityImpactLevel {
    adjustmentJustification?: string;
    base: Ity;
    properties?: Property[];
    selected?: Ity;
}

/**
 * An identifier qualified by the given identification system used, such as NIST SP 800-60.
 */
export interface InformationTypeIdentifier {
    id: string;
}

/**
 * The expected level of impact resulting from the unauthorized modification of information.
 */
export interface IntegrityImpactLevel {
    adjustmentJustification?: string;
    base: Ity;
    properties?: Property[];
    selected?: Ity;
}

/**
 * Provides information as to how the system is implemented.
 */
export interface SystemImplementation {
    annotations?: Annotation[];
    components?: Record<string, Component>;
    leveragedAuthorizations?: LeveragedAuthorization[];
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    systemInventory?: SystemInventory;
    users: Record<string, SystemUserClass>;
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
 * A description of another authorized system from which this system inherits capabilities
 * that satisfy security requirements. Another term for this concept is a common control
 * provider.
 */
export interface LeveragedAuthorization {
    annotations?: Annotation[];
    dateAuthorized: string;
    links?: Link[];
    partyUUID: string;
    properties?: Property[];
    remarks?: string;
    title: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * A set of inventory-item entries that represent the managed inventory instances of the
 * system.
 */
export interface SystemInventory {
    inventoryItems: Record<string, InventoryItem>;
    remarks?: string;
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
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUserClass {
    annotations?: Annotation[];
    authorizedPrivileges?: Privilege[];
    description?: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    roleIDS: string[];
    shortName?: string;
    title?: string;
}

/**
 * Identifies a specific system privilege held by the user, along with an associated
 * description and/or rationale for the privilege.
 */
export interface Privilege {
    description?: string;
    functionsPerformed: string[];
    title: string;
}
