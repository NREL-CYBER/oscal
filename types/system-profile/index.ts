export interface Coordinate {
    profile: Profile;
}

/**
 * Each OSCAL profile is defined by a Profile element
 */
export interface Profile {
    backMatter?: BackMatter;
    imports: ImportResource[];
    merge?: MergeControls;
    metadata: PublicationMetadata;
    modify?: ModifyControls;
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
 * An Import element designates a catalog, profile, or other resource to be included
 * (referenced and potentially modified) by this profile.
 */
export interface ImportResource {
    exclude?: ExcludeControls;
    /**
     * A link to a document or document fragment (actual, nominal or projected)
     */
    href: string;
    include?: IncludeControls;
}

/**
 * Which controls to exclude from the resource (source catalog) being imported
 */
export interface ExcludeControls {
    idSelectors?: Call[];
    patternSelectors?: MatchControlsByIdentifier[];
}

/**
 * Call a control by its ID
 */
export interface Call {
    /**
     * Value of the 'id' flag on a target control
     */
    controlID: string;
    /**
     * When a control is included, whether its child (dependent) controls are also included.
     */
    withChildControls?: IncludeContainedControlsWithControl;
}

/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
export enum IncludeContainedControlsWithControl {
    No = "no",
    Yes = "yes",
}

/**
 * Select controls by (regular expression) match on ID
 */
export interface MatchControlsByIdentifier {
    /**
     * A designation of how a selection of controls in a profile is to be ordered.
     */
    order?: Order;
    /**
     * A regular expression matching the IDs of one or more controls to be selected
     */
    pattern?: string;
    /**
     * When a control is included, whether its child (dependent) controls are also included.
     */
    withChildControls?: IncludeContainedControlsWithControl;
}

/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
export enum Order {
    Ascending = "ascending",
    Descending = "descending",
    Keep = "keep",
}

/**
 * Specifies which controls to include from the resource (source catalog) being imported
 */
export interface IncludeControls {
    all?: IncludeAll;
    idSelectors?: Call[];
    patternSelectors?: MatchControlsByIdentifier[];
}

/**
 * Include all controls from the imported resource (catalog)
 */
export interface IncludeAll {
    /**
     * When a control is included, whether its child (dependent) controls are also included.
     */
    withChildControls?: IncludeContainedControlsWithControl;
}

/**
 * A Merge element merges controls in resolution.
 */
export interface MergeControls {
    asIs?: boolean;
    combine?: CombinationRule;
    custom?: CustomGrouping;
}

/**
 * A Combine element defines whether and how to combine multiple (competing) versions of the
 * same control
 */
export interface CombinationRule {
    /**
     * How clashing controls should be handled
     */
    method?: CombinationMethod;
}

/**
 * How clashing controls should be handled
 */
export enum CombinationMethod {
    Keep = "keep",
    Merge = "merge",
    UseFirst = "use-first",
}

/**
 * A Custom element frames a structure for embedding represented controls in resolution.
 */
export interface CustomGrouping {
    groups?: ControlGroup[];
    idSelectors?: Call[];
    patternSelectors?: MatchControlsByIdentifier[];
}

/**
 * As in catalogs, a group of (selected) controls or of groups of controls
 */
export interface ControlGroup {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    groups?: ControlGroup[];
    /**
     * Unique identifier of the containing object
     */
    id?: string;
    idSelectors?: Call[];
    parameters?: Parameter[];
    parts?: Part[];
    patternSelectors?: MatchControlsByIdentifier[];
    properties?: Property[];
    title?: string;
}

/**
 * Parameters provide a mechanism for the dynamic assignment of value(s) in a control.
 */
export interface Parameter {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    constraints?: Constraint[];
    /**
     * Another parameter invoking this one
     */
    dependsOn?: string;
    descriptions?: ParameterDescription[];
    guidance?: Guideline[];
    /**
     * Unique identifier of the containing object
     */
    id: string;
    label?: string;
    links?: Link[];
    select?: Selection;
    value?: string;
}

/**
 * A formal or informal expression of a constraint or test
 */
export interface Constraint {
    detail: string;
    /**
     * A formal (executable) expression of a constraint
     */
    test?: string;
}

/**
 * Indicates and explains the purpose and use of a parameter
 */
export interface ParameterDescription {
    /**
     * Unique identifier of the containing object
     */
    id?: string;
    summary: string;
}

/**
 * A prose statement that provides a recommendation for the use of a parameter.
 */
export interface Guideline {
    prose?: string;
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
 * Presenting a choice among alternatives
 */
export interface Selection {
    alternatives?: string[];
    /**
     * When selecting, a requirement such as one or more
     */
    howMany?: string;
}

/**
 * A partition or component of a control or part
 */
export interface Part {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    /**
     * Unique identifier of the containing object
     */
    id?: string;
    links?: Link[];
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    /**
     * A namespace qualifying the name.
     */
    ns?: string;
    parts?: Part[];
    properties?: Property[];
    prose?: string;
    title?: string;
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
 * Set parameters or amend controls in resolution
 */
export interface ModifyControls {
    alterations?: Alteration[];
    parameterSettings?: Record<string, ParameterSetting>;
}

/**
 * An Alter element specifies changes to be made to an included control when a profile is
 * resolved.
 */
export interface Alteration {
    additions?: Addition[];
    /**
     * Value of the 'id' flag on a target control
     */
    controlID?: string;
    removals?: Removal[];
}

/**
 * Specifies contents to be added into controls, in resolution
 */
export interface Addition {
    annotations?: Annotation[];
    /**
     * Target location of the addition.
     */
    idRef?: string;
    links?: Link[];
    parameters?: Parameter[];
    parts?: Part[];
    /**
     * Where to add the new content with respect to the targeted element (beside it or inside it)
     */
    position?: Position;
    properties?: Property[];
    title?: string;
}

/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
export enum Position {
    After = "after",
    Before = "before",
    Ending = "ending",
    Starting = "starting",
}

/**
 * Specifies elements to be removed from a control, in resolution
 */
export interface Removal {
    /**
     * Items to remove, by class. A token match.
     */
    classRef?: string;
    /**
     * Items to remove, indicated by their IDs
     */
    idRef?: string;
    /**
     * Items to remove, by the name of the item's type, or generic identifier, e.g. title or prop
     */
    itemName?: string;
    /**
     * Items to remove, by assigned name
     */
    nameRef?: string;
}

/**
 * A parameter setting, to be propagated to points of insertion
 */
export interface ParameterSetting {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    constraints?: Constraint[];
    /**
     * Another parameter invoking this one
     */
    dependsOn?: string;
    descriptions?: ParameterDescription[];
    guidance?: Guideline[];
    label?: string;
    links?: Link[];
    select?: Selection;
    value?: string;
}
