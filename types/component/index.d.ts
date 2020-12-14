export interface Coordinate {
    componentDefinition: ComponentDefinition;
}

/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
    backMatter?: BackMatter;
    capabilities?: Record<string, Capability>;
    components?: Record<string, Component>;
    importComponentDefinitions?: ImportComponentDefinition[];
    metadata: PublicationMetadata;
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
 * A grouping of other components and/or capabilities.
 */
export interface Capability {
    annotations?: Annotation[];
    controlImplementations?: ControlImplementation[];
    description: string;
    incorporatesComponents?: Record<string, IncorporatesComponent>;
    links?: Link[];
    /**
     * The capability's human-readable name.
     */
    name: string;
    properties?: Property[];
    remarks?: string;
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
 * Defines how the component or capability supports a set of controls.
 */
export interface ControlImplementation {
    annotations?: Annotation[];
    description: string;
    implementedRequirements: ControlBasedRequirement[];
    links?: Link[];
    properties?: Property[];
    /**
     * A URL reference to the source catalog or profile for which this component is implementing
     * controls for.
     */
    source: string;
    /**
     * A unique identifier for the set of implemented controls.
     */
    uuid: string;
}

/**
 * Describes how the component implements an individual control.
 */
export interface ControlBasedRequirement {
    annotations?: Annotation[];
    /**
     * A reference to a control identifier.
     */
    controlID?: string;
    description?: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    setParameters?: Record<string, SetParameterValue>;
    statements?: Record<string, SpecificStatement>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
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
 * Identifies the parameter that will be filled in by the enclosed value element.
 */
export interface SetParameterValue {
    value: string;
}

/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificStatement {
    annotations?: Annotations;
    description?: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    responsibleRoles?: Record<string, ResponsibleRole>;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

export type Annotations = Annotation[] | Annotation;

/**
 * TBD
 */
export interface IncorporatesComponent {
    description: string;
}

/**
 * A defined component that can be part of an implemented system.
 */
export interface Component {
    /**
     * A category describing the purpose of the component.
     */
    componentType: string;
    controlImplementations?: ControlImplementation[];
    description: string;
    links?: Link[];
    /**
     * The component's short, human-readable name.
     */
    name: string;
    properties?: Property[];
    remarks?: string;
    responsibleParties?: Record<string, ResponsibleParty>;
    title: string;
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
 * Loads a component definition from another resource.
 */
export interface ImportComponentDefinition {
    /**
     * A link to a resource that defines a set of components and/or capabilities to import into
     * this collection.
     */
    href: string;
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
