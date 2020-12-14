export interface Coordinate {
    assessmentPlan: SecurityAssessmentPlanSAP;
}

/**
 * An assessment plan, such as those provided by a FedRAMP assessor.
 */
export interface SecurityAssessmentPlanSAP {
    assessmentActivities?: AssessmentActivities;
    assessmentSubjects?: SubjectOfAssessment;
    assets?: AssetsClass;
    backMatter?: BackMatter;
    importSSP: ImportSystemSecurityPlan;
    metadata: PublicationMetadata;
    objectives: ObjectivesOfAssessment;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies the assessment activities and schedule. In the assessment plan, these are
 * planned activities. In the assessment results, these are the actual activities performed.
 */
export interface AssessmentActivities {
    excludeActivities?: ExcludeActivityElement[];
    includeActivities?: IncludeActivityElement[];
    remarks?: string;
    schedule?: Schedule;
    testMethods?: TestMethod[];
}

/**
 * Identifies an activity explicitly excluded from the assessment. In the assessment plan,
 * this clarifies activities that are out-of-scope or prohibited. In the assessment results,
 * this could be used to explicitly identify an activity that was planned, but not performed.
 */
export interface ExcludeActivityElement {
    annotations?: Annotation[];
    compareTo?: string;
    description: string;
    locationUuids?: string[];
    partyUuids?: string[];
    properties?: Property[];
    remarks?: string;
    roleIDS?: string[];
    title?: string;
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
 * Identifies an assessment activity. In the assessment plan, this is an intended/in-scope
 * activity. In the assessment results, this identifies an activity that was actually
 * performed.
 */
export interface IncludeActivityElement {
    annotations?: Annotation[];
    compareTo?: string;
    description: string;
    locationUuids?: string[];
    partyUuids?: string[];
    properties?: Property[];
    remarks?: string;
    roleIDS?: string[];
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
 * Identifies an individual test method.
 */
export interface TestMethod {
    annotations?: Annotation[];
    compareTo?: string;
    description?: string;
    links?: Link[];
    properties?: Property[];
    remarks?: string;
    testSteps?: TestSteps[];
    title?: string;
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
 * Identifies an individual test step.
 */
export interface TestSteps {
    compareTo?: string;
    description: string;
    partyUuids?: string[];
    remarks?: string;
    roleIDS?: string[];
    sequence?: number;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

/**
 * Identifies system elements being assessed, such as components, inventory items, and
 * locations. In the assessment plan, this identifies the planned assessment subject. In the
 * assessment results this is the actual assessment subject, and reflects any changes from
 * the plan.
 */
export interface SubjectOfAssessment {
    excludes?: ExcludedAssessmentSubject[];
    includes: IncludedAssessmentSubject[];
    localDefinitions?: LocalDefinitions;
    remarks?: string;
}

/**
 * Identifies what is explicitly excluded from this assessment. Used to remove a subset of
 * items from groups of explicitly included items. Also used to explicitly clarify off-limit
 * items, such as hosts to avoid scanning.
 */
export interface ExcludedAssessmentSubject {
    all?: string;
    annotations?: Annotation[];
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    description: string;
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    properties?: Property[];
    remarks?: string;
    subjectReferences?: IdentifiesTheSubject[];
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
 * Identifies exactly what will be the focus of this assessment. Anything not explicitly
 * defined is out-of-scope.
 */
export interface IncludedAssessmentSubject {
    all?: string;
    annotations?: Annotation[];
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
    description: string;
    /**
     * Identifying the purpose and intended use of the property, part or other object.
     */
    name: string;
    properties?: Property[];
    remarks?: string;
    subjectReferences?: IdentifiesTheSubject[];
}

/**
 * Allows control objectives, users, components, and inventory-items to be defined within
 * the assessment plan or assessment results for circumstances where they are not
 * appropriately defined in the SSP. NOTE: Use the assessment plan or assessment results
 * metadata to define additional locations if needed.
 */
export interface LocalDefinitions {
    components?: Record<string, Component>;
    inventoryItems?: Record<string, InventoryItem>;
    remarks?: string;
    users?: Record<string, SystemUserClass>;
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

/**
 * Identifies the assets used to perform this assessment, such as the assessment team,
 * scanning tools, and assumptions.
 */
export interface AssetsClass {
    annotations?: Annotation[];
    origination?: AssessmentOrigination;
    parts?: Part[];
    properties?: Property[];
    remarks?: string;
    tools?: ToolsClass;
}

/**
 * Identifies the origination of network-based assessment activities, such as the IP address
 * of the tool performing assessment scans.
 */
export interface AssessmentOrigination {
    description?: string;
    properties?: Property[];
    title: string;
}

/**
 * A partition or component of a control or part
 */
export interface Part {
    /**
     * Indicating the type or classification of the containing object
     */
    class?: string;
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
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid?: string;
}

/**
 * The technology tools used by the assessor to perform the assessment, such as
 * vulnerability scanners. In the assessment plan these are the intended tools. In the
 * assessment results, these are the actual tools used, including any differences from the
 * assessment plan.
 */
export interface ToolsClass {
    components?: Record<string, Component>;
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
 * Identifies the controls and control being assessed and their control objectives. In the
 * assessment plans, these are the planned controls and objectives. In the assessment
 * results, these are the actual controls and objectives, and reflects any changes from the
 * plan.
 */
export interface ObjectivesOfAssessment {
    annotations?: Annotation[];
    controlGroup: AssessedControls[];
    controlObjectiveGroup?: ControlObjectives[];
    description?: string;
    methodDefinitions?: MethodDefinitionElement[];
    objectives?: Objectives;
    properties?: Property[];
    remarks?: string;
}

/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned
 * controls. In the assessment results, these are the actual controls, and reflects any
 * changes from the plan.
 */
export interface AssessedControls {
    all?: string;
    annotations?: Annotation[];
    description?: string;
    excludeControls?: ExcludeControl[];
    includeControls?: IncludeControl[];
    properties?: Property[];
    remarks?: string;
}

/**
 * Identifies an individual control to exclude.
 */
export interface ExcludeControl {
    /**
     * A reference to a control identifier.
     */
    controlID: string;
    strvalue: string;
}

/**
 * Identifies an individual control to include.
 */
export interface IncludeControl {
    /**
     * A reference to a control identifier.
     */
    controlID: string;
    strvalue: string;
}

/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are
 * the planned objectives. In the assessment results, these are the actual objectives, and
 * reflects any changes from the plan.
 */
export interface ControlObjectives {
    all?: string;
    annotations?: Annotation[];
    description?: string;
    excludeObjectives?: ExcludeObjective[];
    includeObjectives?: IncludeObjective[];
    properties?: Property[];
    remarks?: string;
}

/**
 * Identifies an individual control objective to exclude.
 */
export interface ExcludeObjective {
    /**
     * Points to an assessment objective.
     */
    objectiveID: string;
    strvalue: string;
}

/**
 * Identifies an individual control objective to include.
 */
export interface IncludeObjective {
    /**
     * Points to an assessment objective.
     */
    objectiveID: string;
    strvalue: string;
}

/**
 * A local definition of a control objective. Uses catalog syntax for control objective and
 * assessment actions.
 */
export interface MethodDefinitionElement {
    annotations?: Annotation[];
    description?: string;
    part: Part;
    properties?: Property[];
    remarks?: string;
    /**
     * A RFC 4122 version 4 Universally Unique Identifier (UUID) for the containing object.
     */
    uuid: string;
}

export type Objectives = ControlObjective[] | ControlObjective;

/**
 * A local definition of a control objective. Uses catalog syntax for control objective and
 * assessment actions.
 */
export interface ControlObjective {
    annotations?: Annotation[];
    /**
     * A reference to a control identifier.
     */
    controlID: string;
    description?: string;
    /**
     * Unique identifier of the containing object
     */
    id: string;
    methods?: MethodElement[];
    part: Part;
    properties?: Property[];
    remarks?: string;
}

/**
 * Identifies a method for assessing the satisfaction of this objective.
 */
export interface MethodElement {
    /**
     * Identifies the assessment method.
     */
    methodUUID: string;
    strvalue: string;
}
