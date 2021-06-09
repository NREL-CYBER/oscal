import exportOscal from "./exportOscal";
import importOscal from "./importOscal";
import { OrganizationSecurityPolicy } from "./osp";



export {
    exportOscal,
    importOscal,
    OrganizationSecurityPolicy,
};


export interface Oscal {
    catalog?: Catalog;
    profile?: Profile;
    component_definition?: ComponentDefinition;
    system_security_plan?: SystemSecurityPlan;
    assessment_plan?: SecurityAssessmentPlan;
    assessment_results?: SecurityAssessmentResults;
    plan_of_action_and_milestones?: PlanOfActionAndMilestones;
}

/**
 * An assessment plan, such as those provided by a FedRAMP assessor.
 */
export interface SecurityAssessmentPlan {
    assessment_assets?: AssessmentAssets;
    assessment_subjects?: SubjectOfAssessment[];
    back_matter?: BackMatter;
    import_ssp: ImportSystemSecurityPlan;
    /**
     * Used to define data objects that are used in the assessment plan, that do not appear in
     * the referenced SSP.
     */
    local_definitions?: AssessmentPlanLocalDefinitions;
    metadata: PublicationMetadata;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    tasks?: Task[];
    /**
     * Used to define various terms and conditions under which an assessment, described by the
     * plan, can be performed. Each child part defines a different type of term or condition.
     */
    terms_and_conditions?: AssessmentPlanTermsAndConditions;
    /**
     * Uniquely identifies this assessment plan. This UUID must be changed each time the content
     * of the plan changes.
     */
    uuid: string;
}

/**
 * Identifies the assets used to perform this assessment, such as the assessment team,
 * scanning tools, and assumptions.
 */
export interface AssessmentAssets {
    assessment_platforms: AssessmentPlatform[];
    components?: AssessmentAssetsComponent[];
}

/**
 * Used to represent the toolset used to perform aspects of the assessment.
 */
export interface AssessmentPlatform {
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * The title or name for the assessment platform.
     */
    title?: string;
    uses_components?: UsesComponent[];
    /**
     * Uniquely identifies this assessment Platform.
     */
    uuid: string;
}

/**
 * A reference to a local or remote resource
 */
export interface Link {
    /**
     * A resolvable URL reference to a resource.
     */
    href: string;
    /**
     * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media
     * Types Registry.
     */
    media_type?: string;
    /**
     * Describes the type of relationship provided by the link. This can be an indicator of the
     * link's purpose.
     */
    rel?: string;
    /**
     * A textual label to associate with the link, which may be used for presentation in a tool.
     */
    text?: string;
}

/**
 * An attribute, characteristic, or quality of the containing object expressed as a
 * namespace qualified name/value pair. The value of a property is a simple scalar value,
 * which may be expressed as a list of values.
 */
export interface Property {
    /**
     * A textual label that provides a sub_type or characterization of the property's name. This
     * can be used to further distinguish or discriminate between the semantics of multiple
     * properties of the same object with the same name and ns.
     */
    class?: string;
    /**
     * A textual label that uniquely identifies a specific attribute, characteristic, or quality
     * of the property's containing object.
     */
    name: string;
    /**
     * A namespace qualifying the property's name. This allows different organizations to
     * associate distinct semantics with the same name.
     */
    ns?: string;
    remarks?: string;
    /**
     * A unique identifier that can be used to reference this property elsewhere in an OSCAL
     * document. A UUID should be consistently used for a given location across revisions of the
     * document.
     */
    uuid?: string;
    /**
     * Indicates the value of the attribute, characteristic, or quality.
     */
    value: string;
}

/**
 * The set of components that are used by the assessment platform.
 */
export interface UsesComponent {
    /**
     * A reference to a component that is implemented as part of an inventory item.
     */
    component_uuid: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
}

/**
 * A reference to a set of organizations or persons that have responsibility for performing
 * a referenced role in the context of the containing object.
 */
export interface ResponsibleParty {
    links?: Link[];
    party_uuids: string[];
    props?: Property[];
    remarks?: string;
    /**
     * The role that the party is responsible for.
     */
    role_id: string;
}

/**
 * A defined component that can be part of an implemented system.
 */
export interface AssessmentAssetsComponent {
    /**
     * A description of the component, including information about its function.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    protocols?: ServiceProtocolInformation[];
    /**
     * A summary of the technological or business purpose of the component.
     */
    purpose?: string;
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * Describes the operational status of the system component.
     */
    status: ComponentStatus;
    /**
     * A human readable name for the system component.
     */
    title: string;
    /**
     * A category describing the purpose of the component.
     */
    type: string;
    /**
     * The unique identifier for the component.
     */
    uuid: string;
}

/**
 * Information about the protocol used to provide a service.
 */
export interface ServiceProtocolInformation {
    /**
     * The common name of the protocol, which should be the appropriate "service name" from the
     * IANA Service Name and Transport Protocol Port Number Registry.
     */
    name: string;
    port_ranges?: PortRange[];
    /**
     * A human readable name for the protocol (e.g., Transport Layer Security).
     */
    title?: string;
    /**
     * A globally unique identifier that can be used to reference this service protocol entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
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
 * to the containing object.
 */
export interface ResponsibleRole {
    links?: Link[];
    party_uuids?: string[];
    props?: Property[];
    remarks?: string;
    /**
     * The role that is responsible for the business function.
     */
    role_id: string;
}

/**
 * Describes the operational status of the system component.
 */
export interface ComponentStatus {
    remarks?: string;
    /**
     * The operational status.
     */
    state: PurpleState;
}

/**
 * The operational status.
 */
export enum PurpleState {
    Disposition = "disposition",
    Operational = "operational",
    Other = "other",
    UnderDevelopment = "under_development",
}

/**
 * Identifies system elements being assessed, such as components, inventory items, and
 * locations. In the assessment plan, this identifies a planned assessment subject. In the
 * assessment results this is an actual assessment subject, and reflects any changes from
 * the plan. exactly what will be the focus of this assessment. Any subjects not identified
 * in this way are out_of_scope.
 */
export interface SubjectOfAssessment {
    /**
     * A human_readable description of the collection of subjects being included in this
     * assessment.
     */
    description?: string;
    exclude_subjects?: SelectAssessmentSubject[];
    /**
     * A key word to indicate all.
     */
    include_all?: AssessmentSubjectIncludeAll;
    include_subjects?: SelectAssessmentSubject[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * Indicates the type of assessment subject, such as a component, inventory, item, location,
     * or party represented by this selection statement.
     */
    type: string;
}

/**
 * Identifies a set of assessment subjects to include/exclude by UUID.
 */
export interface SelectAssessmentSubject {
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * A pointer to a component, inventory_item, location, party, user, or resource using it's
     * UUID.
     */
    subject_uuid: string;
    /**
     * Used to indicate the type of object pointed to by the uuid_ref within a subject.
     */
    type: string;
}

/**
 * A key word to indicate all.
 */
export interface AssessmentSubjectIncludeAll {
}

/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
    resources?: Resource[];
}

/**
 * A resource associated with content in the containing document. A resource may be directly
 * included in the document base64 encoded or may point to one or more equivalent internet
 * resources.
 */
export interface Resource {
    /**
     * The Base64 alphabet in RFC 2045 _ aligned with XSD.
     */
    base64?: Base64;
    /**
     * A citation consisting of end note text and optional structured bibliographic data.
     */
    citation?: Citation;
    /**
     * A short summary of the resource used to indicate the purpose of the resource.
     */
    description?: string;
    document_ids?: DocumentIdentifier[];
    props?: Property[];
    remarks?: string;
    rlinks?: ResourceLink[];
    /**
     * A name given to the resource, which may be used by a tool for display and navigation.
     */
    title?: string;
    /**
     * A globally unique identifier that can be used to reference this defined resource
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * The Base64 alphabet in RFC 2045 _ aligned with XSD.
 */
export interface Base64 {
    /**
     * Name of the file before it was encoded as Base64 to be embedded in a resource. This is
     * the name that will be assigned to the file when the file is decoded.
     */
    filename?: string;
    /**
     * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media
     * Types Registry.
     */
    media_type?: string;
    value: string;
}

/**
 * A citation consisting of end note text and optional structured bibliographic data.
 */
export interface Citation {
    links?: Link[];
    props?: Property[];
    /**
     * A line of citation text.
     */
    text: string;
}

/**
 * A document identifier qualified by an identifier scheme. A document identifier provides a
 * globally unique identifier for a group of documents that are to be treated as different
 * versions of the same document. If this element does not appear, or if the value of this
 * element is empty, the value of "document_id" is equal to the value of the "uuid" flag of
 * the top_level root element.
 */
export interface DocumentIdentifier {
    identifier: string;
    /**
     * Qualifies the kind of document identifier using a URI. If the scheme is not provided the
     * value of the element will be interpreted as a string of characters.
     */
    scheme?: string;
}

/**
 * A pointer to an external resource with an optional hash for verification and change
 * detection.
 */
export interface ResourceLink {
    hashes?: Hash[];
    /**
     * A resolvable URI reference to a resource.
     */
    href: string;
    /**
     * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media
     * Types Registry.
     */
    media_type?: string;
}

/**
 * A representation of a cryptographic digest generated over a resource using a specified
 * hash algorithm.
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
     * >A resolvable URL reference to the system security plan for the system being assessed.
     */
    href: string;
    remarks?: string;
}

/**
 * Used to define data objects that are used in the assessment plan, that do not appear in
 * the referenced SSP.
 */
export interface AssessmentPlanLocalDefinitions {
    activities?: Activity[];
    components?: AssessmentAssetsComponent[];
    inventory_items?: InventoryItem[];
    objectives_and_methods?: AssessmentSpecificControlObjective[];
    remarks?: string;
    users?: SystemUser[];
}

/**
 * Identifies an assessment or related process that can be performed. In the assessment
 * plan, this is an intended activity which may be associated with an assessment task. In
 * the assessment results, this an activity that was actually performed as part of an
 * assessment.
 */
export interface Activity {
    /**
     * A human_readable description of this included activity.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    related_controls?: ReviewedControlsAndControlObjectives;
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    steps?: Step[];
    /**
     * The title for this included activity.
     */
    title?: string;
    /**
     * Uniquely identifies this assessment activity. This UUID may be referenced elsewhere in an
     * OSCAL document when referring to this information. A UUID should be consistently used for
     * a given included activity across revisions of the document.
     */
    uuid: string;
}

/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
    control_objective_selections?: ReferencedControlObjectives[];
    control_selections: AssessedControls[];
    /**
     * A human_readable description of control objectives.
     */
    description?: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are
 * the planned objectives. In the assessment results, these are the assessed objectives, and
 * reflects any changes from the plan.
 */
export interface ReferencedControlObjectives {
    /**
     * A human_readable description of this collection of control objectives.
     */
    description?: string;
    exclude_objectives?: SelectObjective[];
    /**
     * A key word to indicate all.
     */
    include_all?: ControlObjectiveSelectionIncludeAll;
    include_objectives?: SelectObjective[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * Used to select a control objective for inclusion/exclusion based on the control
 * objective's identifier.
 */
export interface SelectObjective {
    /**
     * Points to an assessment objective.
     */
    objective_id: string;
}

/**
 * A key word to indicate all.
 */
export interface ControlObjectiveSelectionIncludeAll {
}

/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned
 * controls. In the assessment results, these are the actual controls, and reflects any
 * changes from the plan.
 */
export interface AssessedControls {
    /**
     * A human_readable description of in_scope controls specified for assessment.
     */
    description?: string;
    exclude_controls?: SelectControl[];
    /**
     * A key word to indicate all.
     */
    include_all?: ControlSelectionIncludeAll;
    include_controls?: SelectControl[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * Used to select a control for inclusion/exclusion based on one or more control
 * identifiers. A set of statement identifiers can be used to target the inclusion/exclusion
 * to only specific control statements providing more granularity over the specific
 * statements that are within the asessment scope.
 */
export interface SelectControl {
    /**
     * A reference to a control with a corresponding id value.
     */
    control_id: string;
    statement_ids?: string[];
}

/**
 * A key word to indicate all.
 */
export interface ControlSelectionIncludeAll {
}

/**
 * Identifies an individual step in a series of steps related to an activity, such as an
 * assessment test or examination procedure.
 */
export interface Step {
    /**
     * A human_readable description of this step.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    reviewed_controls?: ReviewedControlsAndControlObjectives;
    /**
     * The title for this step.
     */
    title?: string;
    /**
     * Uniquely identifies a step. This UUID may be referenced elsewhere in an OSCAL document
     * when referring to this step. A UUID should be consistently used for a given test step
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
    /**
     * A summary of the inventory item stating its purpose within the system.
     */
    description: string;
    implemented_components?: ImplementedComponent[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
    /**
     * A globally unique identifier that can be used to reference this inventory item entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
    /**
     * A reference to a component that is implemented as part of an inventory item.
     */
    component_uuid: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
}

/**
 * A local definition of a control objective for this assessment. Uses catalog syntax for
 * control objective and assessment actions.
 */
export interface AssessmentSpecificControlObjective {
    /**
     * A reference to a control with a corresponding id value.
     */
    control_id: string;
    /**
     * A human_readable description of this control objective.
     */
    description?: string;
    links?: Link[];
    parts: Part[];
    props?: Property[];
    remarks?: string;
}

/**
 * A partition of a control's definition or a child of another part.
 */
export interface Part {
    /**
     * A textual label that provides a sub_type or characterization of the part's name. This can
     * be used to further distinguish or discriminate between the semantics of multiple parts of
     * the same control with the same name and ns.
     */
    class?: string;
    /**
     * A unique identifier for a specific part instance. This identifier's uniqueness is
     * document scoped and is intended to be consistent for the same part across minor revisions
     * of the document.
     */
    id?: string;
    links?: Link[];
    /**
     * A textual label that uniquely identifies the part's semantic type.
     */
    name: string;
    /**
     * A namespace qualifying the part's name. This allows different organizations to associate
     * distinct semantics with the same name.
     */
    ns?: string;
    parts?: Part[];
    props?: Property[];
    /**
     * Permits multiple paragraphs, lists, tables etc.
     */
    prose?: string;
    /**
     * A name given to the part, which may be used by a tool for display and navigation.
     */
    title?: string;
}

/**
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUser {
    authorized_privileges?: Privilege[];
    /**
     * A summary of the user's purpose within the system.
     */
    description?: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    role_ids?: string[];
    /**
     * A short common name, abbreviation, or acronym for the user.
     */
    short_name?: string;
    /**
     * A name given to the user, which may be used by a tool for display and navigation.
     */
    title?: string;
    /**
     * The unique identifier for the user class.
     */
    uuid: string;
}

/**
 * Identifies a specific system privilege held by the user, along with an associated
 * description and/or rationale for the privilege.
 */
export interface Privilege {
    /**
     * A summary of the privilege's purpose within the system.
     */
    description?: string;
    functions_performed: string[];
    /**
     * A human readable name for the privilege.
     */
    title: string;
}

/**
 * Provides information about the publication and availability of the containing document.
 */
export interface PublicationMetadata {
    document_ids?: DocumentIdentifier[];
    last_modified: string;
    links?: Link[];
    locations?: Location[];
    oscal_version: string;
    parties?: PartyOrganizationOrPerson[];
    props?: Property[];
    published?: string;
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
    revisions?: RevisionHistoryEntry[];
    roles?: Role[];
    /**
     * A name given to the document, which may be used by a tool for display and navigation.
     */
    title: string;
    version: string;
}

/**
 * A location, with associated metadata that can be referenced.
 */
export interface Location {
    address: Address;
    email_addresses?: string[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    telephone_numbers?: TelephoneNumber[];
    /**
     * A name given to the location, which may be used by a tool for display and navigation.
     */
    title?: string;
    urls?: string[];
    /**
     * A unique identifier that can be used to reference this defined location elsewhere in an
     * OSCAL document. A UUID should be consistently used for a given location across revisions
     * of the document.
     */
    uuid: string;
}

/**
 * A postal address for the location.
 */
export interface Address {
    addr_lines?: string[];
    /**
     * City, town or geographical region for the mailing address.
     */
    city?: string;
    /**
     * The ISO 3166_1 alpha_2 country code for the mailing address.
     */
    country?: string;
    /**
     * Postal or ZIP code for mailing address
     */
    postal_code?: string;
    /**
     * State, province or analogous geographical region for mailing address
     */
    state?: string;
    /**
     * Indicates the type of address.
     */
    type?: string;
}

/**
 * Contact number by telephone.
 */
export interface TelephoneNumber {
    number: string;
    /**
     * Indicates the type of phone number.
     */
    type?: string;
}

/**
 * A responsible entity which is either a person or an organization.
 */
export interface PartyOrganizationOrPerson {
    addresses?: Address[];
    email_addresses?: string[];
    external_ids?: PartyExternalIdentifier[];
    links?: Link[];
    location_uuids?: string[];
    member_of_organizations?: string[];
    /**
     * The full name of the party. This is typically the legal name associated with the party.
     */
    name?: string;
    props?: Property[];
    remarks?: string;
    /**
     * A short common name, abbreviation, or acronym for the party.
     */
    short_name?: string;
    telephone_numbers?: TelephoneNumber[];
    /**
     * A category describing the kind of party the object describes.
     */
    type: PartyType;
    /**
     * A unique identifier that can be used to reference this defined location elsewhere in an
     * OSCAL document. A UUID should be consistently used for a given party across revisions of
     * the document.
     */
    uuid: string;
}

/**
 * An identifier for a person or organization using a designated scheme. e.g. an Open
 * Researcher and Contributor ID (ORCID)
 */
export interface PartyExternalIdentifier {
    id: string;
    /**
     * Indicates the type of external identifier.
     */
    scheme: string;
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
    last_modified?: string;
    links?: Link[];
    oscal_version?: string;
    props?: Property[];
    published?: string;
    remarks?: string;
    /**
     * A name given to the document revision, which may be used by a tool for display and
     * navigation.
     */
    title?: string;
    version?: string;
}

/**
 * Defines a function assumed or expected to be assumed by a party in a specific situation.
 */
export interface Role {
    /**
     * A summary of the role's purpose and associated responsibilities.
     */
    description?: string;
    /**
     * A unique identifier for a specific role instance. This identifier's uniqueness is
     * document scoped and is intended to be consistent for the same role across minor revisions
     * of the document.
     */
    id: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * A short common name, abbreviation, or acronym for the role.
     */
    short_name?: string;
    /**
     * A name given to the role, which may be used by a tool for display and navigation.
     */
    title: string;
}

/**
 * Represents a scheduled event or milestone, which may be associated with a series of
 * assessment actions.
 */
export interface Task {
    associated_activities?: AssociatedActivity[];
    dependencies?: TaskDependency[];
    /**
     * A human_readable description of this task.
     */
    description?: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    subjects?: SubjectOfAssessment[];
    tasks?: Task[];
    /**
     * The timing under which the task is intended to occur.
     */
    timing?: EventTiming;
    /**
     * The title for this task.
     */
    title: string;
    /**
     * The type of task.
     */
    type: string;
    /**
     * Uniquely identifies this assessment task.
     */
    uuid: string;
}

/**
 * Identifies an individual activity to be performed as part of a task.
 */
export interface AssociatedActivity {
    /**
     * References an activity defined in the list of activities.
     */
    activity_uuid: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    subjects: SubjectOfAssessment[];
}

/**
 * Used to indicate that a task is dependent on another task.
 */
export interface TaskDependency {
    remarks?: string;
    /**
     * References a unique task by UUID.
     */
    task_uuid: string;
}

/**
 * The timing under which the task is intended to occur.
 */
export interface EventTiming {
    /**
     * The task is intended to occur at the specified frequency.
     */
    at_frequency?: FrequencyCondition;
    /**
     * The task is intended to occur on the specified date.
     */
    on_date?: OnDateCondition;
    /**
     * The task is intended to occur within the specified date range.
     */
    within_date_range?: OnDateRangeCondition;
}

/**
 * The task is intended to occur at the specified frequency.
 */
export interface FrequencyCondition {
    /**
     * The task must occur after the specified period has elapsed.
     */
    period: number;
    /**
     * The unit of time for the period.
     */
    unit: TimeUnit;
}

/**
 * The unit of time for the period.
 */
export enum TimeUnit {
    Days = "days",
    Hours = "hours",
    Minutes = "minutes",
    Months = "months",
    Seconds = "seconds",
    Years = "years",
}

/**
 * The task is intended to occur on the specified date.
 */
export interface OnDateCondition {
    /**
     * The task must occur on the specified date.
     */
    date: string;
}

/**
 * The task is intended to occur within the specified date range.
 */
export interface OnDateRangeCondition {
    /**
     * The task must occur on or before the specified date.
     */
    end: string;
    /**
     * The task must occur on or after the specified date.
     */
    start: string;
}

/**
 * Used to define various terms and conditions under which an assessment, described by the
 * plan, can be performed. Each child part defines a different type of term or condition.
 */
export interface AssessmentPlanTermsAndConditions {
    parts?: AssessmentPart[];
}

/**
 * A partition of an assessment plan or results or a child of another part.
 */
export interface AssessmentPart {
    /**
     * A textual label that provides a sub_type or characterization of the part's name. This can
     * be used to further distinguish or discriminate between the semantics of multiple parts of
     * the same control with the same name and ns.
     */
    class?: string;
    links?: Link[];
    /**
     * A textual label that uniquely identifies the part's semantic type.
     */
    name: string;
    /**
     * A namespace qualifying the part's name. This allows different organizations to associate
     * distinct semantics with the same name.
     */
    ns?: string;
    parts?: AssessmentPart[];
    props?: Property[];
    /**
     * Permits multiple paragraphs, lists, tables etc.
     */
    prose?: string;
    /**
     * A name given to the part, which may be used by a tool for display and navigation.
     */
    title?: string;
    /**
     * A unique identifier for a specific part instance. This identifier's uniqueness is
     * document scoped and is intended to be consistent for the same part across minor revisions
     * of the document.
     */
    uuid?: string;
}

/**
 * Security assessment results, such as those provided by a FedRAMP assessor in the FedRAMP
 * Security Assessment Report.
 */
export interface SecurityAssessmentResults {
    back_matter?: BackMatter;
    import_ap: ImportAssessmentPlan;
    /**
     * Used to define data objects that are used in the assessment plan, that do not appear in
     * the referenced SSP.
     */
    local_definitions?: AssessmentResultsLocalDefinitions;
    metadata: PublicationMetadata;
    results: AssessmentResult[];
    /**
     * Uniquely identifies this assessment results file. This UUID must be changed each time the
     * content of the results changes.
     */
    uuid: string;
}

/**
 * Used by assessment_results to import information about the original plan for assessing
 * the system.
 */
export interface ImportAssessmentPlan {
    /**
     * >A resolvable URL reference to the assessment plan governing the assessment activities.
     */
    href: string;
    remarks?: string;
}

/**
 * Used to define data objects that are used in the assessment plan, that do not appear in
 * the referenced SSP.
 */
export interface AssessmentResultsLocalDefinitions {
    activities?: Activity[];
    objectives_and_methods?: AssessmentSpecificControlObjective[];
    remarks?: string;
}

/**
 * Used by the assessment results and POA&M. In the assessment results, this identifies all
 * of the assessment observations and findings, initial and residual risks, deviations, and
 * disposition. In the POA&M, this identifies initial and residual risks, deviations, and
 * disposition.
 */
export interface AssessmentResult {
    /**
     * A log of all assessment_related actions taken.
     */
    assessment_log?: AssessmentLog;
    attestations?: AttestationStatements[];
    /**
     * A human_readable description of this set of test results.
     */
    description: string;
    /**
     * Date/time stamp identifying the end of the evidence collection reflected in these
     * results. In a continuous motoring scenario, this may contain the same value as start if
     * appropriate.
     */
    end?: string;
    findings?: Finding[];
    links?: Link[];
    /**
     * Used to define data objects that are used in the assessment plan, that do not appear in
     * the referenced SSP.
     */
    local_definitions?: ResultLocalDefinitions;
    observations?: Observation[];
    prop?: Property[];
    remarks?: string;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    risks?: IdentifiedRisk[];
    /**
     * Date/time stamp identifying the start of the evidence collection reflected in these
     * results.
     */
    start: string;
    /**
     * The title for this set of results.
     */
    title: string;
    /**
     * Uniquely identifies this set of results. This UUID may be referenced elsewhere in an
     * OSCAL document when referring to this information. Once assigned, a UUID should be
     * consistently used for a given set of results across revisions.
     */
    uuid: string;
}

/**
 * A log of all assessment_related actions taken.
 */
export interface AssessmentLog {
    entries: AssessmentLogEntry[];
}

/**
 * Identifies the result of an action and/or task that occurred as part of executing an
 * assessment plan or an assessment event that occurred in producing the assessment results.
 */
export interface AssessmentLogEntry {
    /**
     * A human_readable description of this event.
     */
    description?: string;
    /**
     * Identifies the end date and time of an event. If the event is a point in time, the start
     * and end will be the same date and time.
     */
    end?: string;
    links?: Link[];
    logged_by?: LoggedBy[];
    props?: Property[];
    related_tasks?: TaskReference[];
    remarks?: string;
    /**
     * Identifies the start date and time of an event.
     */
    start: string;
    /**
     * The title for this event.
     */
    title?: string;
    /**
     * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an
     * OSCAL document when referring to this information. A UUID should be consistently used for
     * this schedule across revisions of the document.
     */
    uuid: string;
}

/**
 * Used to indicate who created a log entry in what role.
 */
export interface LoggedBy {
    /**
     * A pointer to the party who is making the log entry.
     */
    party_uuid: string;
    /**
     * A point to the role_id of the role in which the party is making the log entry.
     */
    role_id?: string;
}

/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
    /**
     * Used to detail assessment subjects that were identfied by this task.
     */
    identified_subject?: IdentifiedSubject;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
    subjects?: SubjectOfAssessment[];
    /**
     * References a unique task by UUID.
     */
    task_uuid: string;
}

/**
 * Used to detail assessment subjects that were identfied by this task.
 */
export interface IdentifiedSubject {
    /**
     * References a unique assessment subject placeholder defined by this task.
     */
    subject_placeholder_uuid: string;
    subjects: SubjectOfAssessment[];
}

/**
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
    parts: AssessmentPart[];
    responsible_parties?: ResponsibleParty[];
}

/**
 * Describes an individual finding.
 */
export interface Finding {
    /**
     * A human_readable description of this finding.
     */
    description: string;
    /**
     * Identifies the implementation statement in the SSP to which this finding is related.
     */
    implementation_statement_uuid?: string;
    links?: Link[];
    origins?: FindingOrigin[];
    props?: Property[];
    related_observations?: FindingRelatedObservation[];
    related_risks?: FindingRelatedRisk[];
    remarks?: string;
    target: TargetClass;
    /**
     * The title for this finding.
     */
    title: string;
    /**
     * Uniquely identifies this finding. This UUID may be referenced elsewhere in an OSCAL
     * document when referring to this information. Once assigned, a UUID should be consistently
     * used for a given finding across revisions.
     */
    uuid: string;
}

/**
 * Identifies the source of the finding, such as a tool, interviewed person, or activity.
 */
export interface FindingOrigin {
    actors: OriginatingActor[];
    related_tasks?: TaskReference[];
}

/**
 * The actor that produces an observation, a finding, or a risk. One or more actor type can
 * be used to specify a person that is using a tool.
 */
export interface OriginatingActor {
    /**
     * A pointer to the tool or person based on the associated type.
     */
    actor_uuid: string;
    links?: Link[];
    props?: Property[];
    /**
     * For a party, this can optionally be used to specify the role the actor was performing.
     */
    role_id?: string;
    /**
     * The kind of actor.
     */
    type: ActorType;
}

/**
 * The kind of actor.
 */
export enum ActorType {
    AssessmentPlatform = "assessment_platform",
    Party = "party",
    Tool = "tool",
}

/**
 * Relates the finding to a set of referenced observations that were used to determine the
 * finding.
 */
export interface FindingRelatedObservation {
    /**
     * References an observation defined in the list of observations.
     */
    observation_uuid: string;
}

/**
 * Relates the finding to a set of referenced risks that were used to determine the finding.
 */
export interface FindingRelatedRisk {
    /**
     * References an risk defined in the list of risks.
     */
    risk_uuid: string;
}

/**
 * Captures an assessor's conclusions regarding the degree to which an objective is
 * satisfied.
 */
export interface TargetClass {
    /**
     * A human_readable description of the assessor's conclusions regarding the degree to which
     * an objective is satisfied.
     */
    description?: string;
    implementation_status?: ImplementationStatus;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * A determination of if the objective is satisfied or not within a given system.
     */
    status: StatusClass;
    /**
     * Identifies the specific target qualified by the type.
     */
    target_id: string;
    /**
     * The title for this objective status.
     */
    title?: string;
    /**
     * Identifies the type of the target.
     */
    type: FindingTargetType;
}

/**
 * Indicates the degree to which the a given control is implemented.
 */
export interface ImplementationStatus {
    remarks?: string;
    /**
     * Identifies the implementation status of the control or control objective.
     */
    state: string;
}

/**
 * A determination of if the objective is satisfied or not within a given system.
 */
export interface StatusClass {
    /**
     * The reason the objective was given it's status.
     */
    reason?: string;
    remarks?: string;
    /**
     * An indication as to whether the objective is satisfied or not.
     */
    state: ObjectiveStatusState;
}

/**
 * An indication as to whether the objective is satisfied or not.
 */
export enum ObjectiveStatusState {
    NotSatisfied = "not_satisfied",
    Satisfied = "satisfied",
}

/**
 * Identifies the type of the target.
 */
export enum FindingTargetType {
    ObjectiveID = "objective_id",
    StatementID = "statement_id",
}

/**
 * Used to define data objects that are used in the assessment plan, that do not appear in
 * the referenced SSP.
 */
export interface ResultLocalDefinitions {
    assessment_assets?: AssessmentAssets;
    components?: AssessmentAssetsComponent[];
    inventory_items?: InventoryItem[];
    tasks?: Task[];
    users?: SystemUser[];
}

/**
 * Describes an individual observation.
 */
export interface Observation {
    /**
     * Date/time stamp identifying when the finding information was collected.
     */
    collected: string;
    /**
     * A human_readable description of this assessment observation.
     */
    description: string;
    /**
     * Date/time identifying when the finding information is out_of_date and no longer valid.
     * Typically used with continuous assessment scenarios.
     */
    expires?: string;
    links?: Link[];
    methods: string[];
    origins?: FindingOrigin[];
    props?: Property[];
    relevant_evidence?: RelevantEvidence[];
    remarks?: string;
    subjects?: IdentifiesTheSubject[];
    /**
     * The title for this observation.
     */
    title?: string;
    types?: string[];
    /**
     * Uniquely identifies this observation. This UUID may be referenced elsewhere in an OSCAL
     * document when referring to this information. Once assigned, a UUID should be consistently
     * used for a given observation across revisions.
     */
    uuid: string;
}

/**
 * Links this observation to relevant evidence.
 */
export interface RelevantEvidence {
    /**
     * A human_readable description of this evidence.
     */
    description: string;
    /**
     * >A resolvable URL reference to relevant evidence.
     */
    href?: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * A pointer to a resource based on its universally unique identifier (UUID). Use type to
 * indicate whether the identified resource is a component, inventory item, location, user,
 * or something else.
 */
export interface IdentifiesTheSubject {
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * A pointer to a component, inventory_item, location, party, user, or resource using it's
     * UUID.
     */
    subject_uuid: string;
    /**
     * The title or name for the referenced subject.
     */
    title?: string;
    /**
     * Used to indicate the type of object pointed to by the uuid_ref within a subject.
     */
    type: string;
}

/**
 * An identified risk.
 */
export interface IdentifiedRisk {
    characterizations?: Characterization[];
    /**
     * The date/time by which the risk must be resolved.
     */
    deadline?: string;
    /**
     * A human_readable summary of the identified risk, to include a statement of how the risk
     * impacts the system.
     */
    description: string;
    links?: Link[];
    mitigating_factors?: MitigatingFactor[];
    origins?: FindingOrigin[];
    props?: Property[];
    related_observations?: RiskRelatedObservation[];
    remediations?: RiskResponse[];
    /**
     * A log of all risk_related tasks taken.
     */
    risk_log?: RiskLog;
    /**
     * An summary of impact for how the risk affects the system.
     */
    statement: string;
    /**
     * Describes the status of the associated risk.
     */
    status: string;
    threat_ids?: ThreatID[];
    /**
     * The title for this risk.
     */
    title: string;
    /**
     * Uniquely identifies this risk. This UUID may be referenced elsewhere in an OSCAL document
     * when referring to this information. Once assigned, a UUID should be consistently used for
     * a given risk across revisions.
     */
    uuid: string;
}

/**
 * A collection of descriptive data about the containing object from a specific origin.
 */
export interface Characterization {
    facets: Facet[];
    links?: Link[];
    origin: FindingOrigin;
    props?: Property[];
}

/**
 * An individual characteristic that is part of a larger set produced by the same actor.
 */
export interface Facet {
    links?: Link[];
    /**
     * The name of the risk metric within the specified system.
     */
    name: string;
    props?: Property[];
    remarks?: string;
    /**
     * Specifies the naming system under which this risk metric is organized, which allows for
     * the same names to be used in different systems controlled by different parties. This
     * avoids the potential of a name clash.
     */
    system: string;
    /**
     * Indicates the value of the facet.
     */
    value: string;
}

/**
 * Describes an existing mitigating factor that may affect the overall determination of the
 * risk, with an optional link to an implementation statement in the SSP.
 */
export interface MitigatingFactor {
    /**
     * A human_readable description of this mitigating factor.
     */
    description: string;
    /**
     * Points to an implementation statement in the SSP.
     */
    implementation_uuid?: string;
    links?: Link[];
    props?: Property[];
    subjects?: IdentifiesTheSubject[];
    /**
     * Uniquely identifies this mitigating factor. This UUID may be referenced elsewhere in an
     * OSCAL document when referring to this information. Once assigned, a UUID should be
     * consistently used for a given mitigating factor across revisions.
     */
    uuid: string;
}

/**
 * Relates the finding to a set of referenced observations that were used to determine the
 * finding.
 */
export interface RiskRelatedObservation {
    /**
     * References an observation defined in the list of observations.
     */
    observation_uuid: string;
}

/**
 * Describes either recommended or an actual plan for addressing the risk.
 */
export interface RiskResponse {
    /**
     * A human_readable description of this response plan.
     */
    description: string;
    /**
     * Identifies whether this is a recommendation, such as from an assessor or tool, or an
     * actual plan accepted by the system owner.
     */
    lifecycle: string;
    links?: Link[];
    origins?: FindingOrigin[];
    props?: Property[];
    remarks?: string;
    required_assets?: RequiredAsset[];
    tasks?: Task[];
    /**
     * The title for this response activity.
     */
    title: string;
    /**
     * Uniquely identifies this remediation. This UUID may be referenced elsewhere in an OSCAL
     * document when referring to this information. Once assigned, a UUID should be consistently
     * used for a given remediation across revisions.
     */
    uuid: string;
}

/**
 * Identifies an asset required to achieve remediation.
 */
export interface RequiredAsset {
    /**
     * A human_readable description of this required asset.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    subjects?: IdentifiesTheSubject[];
    /**
     * The title for this required asset.
     */
    title?: string;
    /**
     * Uniquely identifies this required asset. This UUID may be referenced elsewhere in an
     * OSCAL document when referring to this information. Once assigned, a UUID should be
     * consistently used for a given required asset across revisions.
     */
    uuid: string;
}

/**
 * A log of all risk_related tasks taken.
 */
export interface RiskLog {
    entries: RiskLogEntry[];
}

/**
 * Identifies an individual risk response that occurred as part of managing an identified
 * risk.
 */
export interface RiskLogEntry {
    /**
     * A human_readable description of what was done regarding the risk.
     */
    description?: string;
    /**
     * Identifies the end date and time of the event. If the event is a point in time, the start
     * and end will be the same date and time.
     */
    end?: string;
    links?: Link[];
    logged_by?: LoggedBy[];
    props?: Property[];
    related_responses?: RiskResponseReference[];
    remarks?: string;
    /**
     * Identifies the start date and time of the event.
     */
    start: string;
    status_change?: string;
    /**
     * The title for this risk log entry.
     */
    title?: string;
    /**
     * Uniquely identifies a risk log entry. This UUID may be referenced elsewhere in an OSCAL
     * document when referring to this information. A UUID should be consistently used for this
     * schedule across revisions of the document.
     */
    uuid: string;
}

/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface RiskResponseReference {
    links?: Link[];
    props?: Property[];
    related_tasks?: TaskReference[];
    remarks?: string;
    /**
     * References a unique risk response by UUID.
     */
    response_uuid: string;
}

/**
 * A pointer, by ID, to an externally_defined threat.
 */
export interface ThreatID {
    /**
     * An optional location for the threat data, from which this ID originates.
     */
    href?: string;
    id: string;
    /**
     * Specifies the source of the threat information.
     */
    system: string;
}

/**
 * A collection of controls.
 */
export interface Catalog {
    back_matter?: BackMatter;
    controls?: Control[];
    groups?: ControlGroup[];
    metadata: PublicationMetadata;
    params?: Parameter[];
    /**
     * A globally unique identifier for this catalog instance. This UUID should be changed when
     * this document is revised.
     */
    uuid: string;
}

/**
 * A structured information object representing a security or privacy control. Each security
 * or privacy control within the Catalog is defined by a distinct control instance.
 */
export interface Control {
    /**
     * A textual label that provides a sub_type or characterization of the control.
     */
    class?: string;
    controls?: Control[];
    /**
     * A unique identifier for a specific control instance that can be used to reference the
     * control in other OSCAL documents. This identifier's uniqueness is document scoped and is
     * intended to be consistent for the same control across minor revisions of the document.
     */
    id: string;
    links?: Link[];
    params?: Parameter[];
    parts?: Part[];
    props?: Property[];
    /**
     * A name given to the control, which may be used by a tool for display and navigation.
     */
    title: string;
}

/**
 * Parameters provide a mechanism for the dynamic assignment of value(s) in a control.
 */
export interface Parameter {
    /**
     * A textual label that provides a characterization of the parameter.
     */
    class?: string;
    constraints?: Constraint[];
    /**
     * Another parameter invoking this one
     */
    depends_on?: string;
    guidelines?: Guideline[];
    /**
     * A unique identifier for a specific parameter instance. This identifier's uniqueness is
     * document scoped and is intended to be consistent for the same parameter across minor
     * revisions of the document.
     */
    id: string;
    /**
     * A short, placeholder name for the parameter, which can be used as a substitute for a
     * value if no value is assigned.
     */
    label?: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    select?: Selection;
    /**
     * Describes the purpose and use of a parameter
     */
    usage?: string;
    values?: string[];
}

/**
 * A formal or informal expression of a constraint or test
 */
export interface Constraint {
    /**
     * A textual summary of the constraint to be applied.
     */
    description?: string;
    tests?: ConstraintTest[];
}

/**
 * A test expression which is expected to be evaluated by a tool.
 */
export interface ConstraintTest {
    /**
     * A formal (executable) expression of a constraint
     */
    expression: string;
    remarks?: string;
}

/**
 * A prose statement that provides a recommendation for the use of a parameter.
 */
export interface Guideline {
    /**
     * Prose permits multiple paragraphs, lists, tables etc.
     */
    prose: string;
}

/**
 * Presenting a choice among alternatives
 */
export interface Selection {
    choice?: string[];
    /**
     * Describes the number of selections that must occur. Without this setting, only one value
     * should be assumed to be permitted.
     */
    how_many?: ParameterCardinality;
}

/**
 * Describes the number of selections that must occur. Without this setting, only one value
 * should be assumed to be permitted.
 */
export enum ParameterCardinality {
    One = "one",
    OneOrMore = "one_or_more",
}

/**
 * A group of controls, or of groups of controls.
 */
export interface ControlGroup {
    /**
     * A textual label that provides a sub_type or characterization of the group.
     */
    class?: string;
    controls?: Control[];
    groups?: ControlGroup[];
    /**
     * A unique identifier for a specific group instance that can be used to reference the group
     * within this and in other OSCAL documents. This identifier's uniqueness is document scoped
     * and is intended to be consistent for the same group across minor revisions of the
     * document.
     */
    id?: string;
    links?: Link[];
    params?: Parameter[];
    parts?: Part[];
    props?: Property[];
    /**
     * A name given to the group, which may be used by a tool for display and navigation.
     */
    title: string;
}

/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
    back_matter?: BackMatter;
    capabilities?: Capability[];
    components?: ComponentDefinitionComponent[];
    import_component_definitions?: ImportComponentDefinition[];
    metadata: PublicationMetadata;
    /**
     * A globally unique identifier for this component definition instance. This UUID should be
     * changed when this document is revised.
     */
    uuid: string;
}

/**
 * A grouping of other components and/or capabilities.
 */
export interface Capability {
    control_implementations?: ControlImplementationSet[];
    /**
     * A summary of the capability.
     */
    description: string;
    incorporates_components?: IncorporatesComponent[];
    links?: Link[];
    /**
     * The capability's human_readable name.
     */
    name: string;
    props?: Property[];
    remarks?: string;
    /**
     * A unique identifier for a capability.
     */
    uuid: string;
}

/**
 * Defines how the component or capability supports a set of controls.
 */
export interface ControlImplementationSet {
    /**
     * A description of how the specified set of controls are implemented for the containing
     * component or capability.
     */
    description: string;
    implemented_requirements: ImplementedRequirementElement[];
    links?: Link[];
    props?: Property[];
    set_parameters?: SetParameterValue[];
    /**
     * A reference to an OSCAL catalog or profile providing the referenced control or subcontrol
     * definition.
     */
    source: string;
    /**
     * A unique identifier for the set of implemented controls.
     */
    uuid: string;
}

/**
 * Describes how the containing component or capability implements an individual control.
 */
export interface ImplementedRequirementElement {
    /**
     * A reference to a control with a corresponding id value.
     */
    control_id: string;
    /**
     * A description of how the specified control is implemented for the containing component or
     * capability.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    set_parameters?: SetParameterValue[];
    statements?: ControlStatementImplementation[];
    /**
     * A unique identifier for a specific control implementation.
     */
    uuid: string;
}

/**
 * Identifies the parameter that will be set by the enclosed value.
 */
export interface SetParameterValue {
    /**
     * A reference to a parameter within a control, who's catalog has been imported into the
     * current implementation context.
     */
    param_id: string;
    remarks?: string;
    values: string[];
}

/**
 * Identifies which statements within a control are addressed.
 */
export interface ControlStatementImplementation {
    /**
     * A summary of how the containing control statement is implemented by the component or
     * capability.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A reference to a control statement by its identifier
     */
    statement_id: string;
    /**
     * A globally unique identifier that can be used to reference this control statement entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * TBD
 */
export interface IncorporatesComponent {
    /**
     * A reference to a component by its identifier
     */
    component_uuid: string;
    /**
     * A description of the component, including information about its function.
     */
    description: string;
}

/**
 * A defined component that can be part of an implemented system.
 */
export interface ComponentDefinitionComponent {
    control_implementations?: ControlImplementationSet[];
    /**
     * A description of the component, including information about its function.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    protocols?: ServiceProtocolInformation[];
    /**
     * A summary of the technological or business purpose of the component.
     */
    purpose?: string;
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A human readable name for the component.
     */
    title: string;
    /**
     * A category describing the purpose of the component.
     */
    type: string;
    /**
     * The unique identifier for the component.
     */
    uuid: string;
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
 * A plan of action and milestones which identifies initial and residual risks, deviations,
 * and disposition, such as those required by FedRAMP.
 */
export interface PlanOfActionAndMilestones {
    back_matter?: BackMatter;
    import_ssp?: ImportSystemSecurityPlan;
    local_definitions?: PlanOfActionAndMilestonesLocalDefinitions;
    metadata: PublicationMetadata;
    observations?: Observation[];
    poam_items: POAMItem[];
    risks?: IdentifiedRisk[];
    system_id?: SystemIdentification;
    /**
     * Uniquely identifies this POA&M. This UUID must be changed each time the content of the
     * POA&M changes.
     */
    uuid: string;
}

/**
 * Allows components, and inventory_items to be defined within the POA&M for circumstances
 * where no OSCAL_based SSP exists, or is not delivered with the POA&M.
 */
export interface PlanOfActionAndMilestonesLocalDefinitions {
    components?: AssessmentAssetsComponent[];
    inventory_items?: InventoryItem[];
    remarks?: string;
}

/**
 * Describes an individual POA&M item.
 */
export interface POAMItem {
    /**
     * A human_readable description of POA&M item.
     */
    description: string;
    links?: Link[];
    origins?: PoamItemOrigin[];
    props?: Property[];
    related_observations?: PoamItemRelatedObservation[];
    related_risks?: PoamItemRelatedRisk[];
    remarks?: string;
    /**
     * The title or name for this POA&M item .
     */
    title: string;
    /**
     * Uniquely identifies the POA&M entry. This UUID may be referenced elsewhere in an OSCAL
     * document when referring to this information. A UUID should be consistently used for a
     * given POA&M item across revisions of the document.
     */
    uuid?: string;
}

/**
 * Identifies the source of the finding, such as a tool or person.
 */
export interface PoamItemOrigin {
    actors: OriginatingActor[];
}

/**
 * Relates the poam_item to a set of referenced observations that were used to determine the
 * finding.
 */
export interface PoamItemRelatedObservation {
    /**
     * References an observation defined in the list of observations.
     */
    observation_uuid: string;
}

/**
 * Relates the finding to a set of referenced risks that were used to determine the finding.
 */
export interface PoamItemRelatedRisk {
    /**
     * References an risk defined in the list of risks.
     */
    risk_uuid: string;
}

/**
 * A unique identifier for the system described by this system security plan.
 */
export interface SystemIdentification {
    id: string;
    /**
     * Identifies the identification system from which the provided identifier was assigned.
     */
    identifier_type?: string;
}

/**
 * Each OSCAL profile is defined by a Profile element
 */
export interface Profile {
    back_matter?: BackMatter;
    imports: ImportResource[];
    merge?: MergeControls;
    metadata: PublicationMetadata;
    modify?: ModifyControls;
    /**
     * A globally unique identifier for this profile instance. This UUID should be changed when
     * this document is revised.
     */
    uuid: string;
}

/**
 * The import designates a catalog, profile, or other resource to be included (referenced
 * and potentially modified) by this profile. The import also identifies which controls to
 * select using the include_all, include_controls, and exclude_controls directives.
 */
export interface ImportResource {
    exclude_controls?: Call[];
    /**
     * A resolvable URL reference to the base catalog or profile that this profile is tailoring.
     */
    href: string;
    include_all?: InsertAll;
    include_controls?: Call[];
}

/**
 * Call a control by its ID
 */
export interface Call {
    matching?: MatchControlsByPattern[];
    /**
     * When a control is included, whether its child (dependent) controls are also included.
     */
    with_child_controls?: IncludeContainedControlsWithControl;
    with_ids?: string[];
}

/**
 * Select controls by (regular expression) match on ID
 */
export interface MatchControlsByPattern {
    /**
     * A glob expression matching the IDs of one or more controls to be selected.
     */
    pattern?: string;
}

/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
export enum IncludeContainedControlsWithControl {
    No = "no",
    Yes = "yes",
}

/**
 * Insert all controls from the imported catalog or profile resources identified in the
 * import directive.
 */
export interface InsertAll {
}

/**
 * A Merge element merges controls in resolution.
 */
export interface MergeControls {
    as_is?: boolean;
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
    UseFirst = "use_first",
}

/**
 * A Custom element frames a structure for embedding represented controls in resolution.
 */
export interface CustomGrouping {
    groups?: CustomGroup[];
    insert_controls?: SelectControls[];
}

/**
 * A group of (selected) controls or of groups of controls
 */
export interface CustomGroup {
    /**
     * A textual label that provides a sub_type or characterization of the group.
     */
    class?: string;
    groups?: CustomGroup[];
    /**
     * A unique identifier for a specific group instance that can be used to reference the group
     * within this and in other OSCAL documents. This identifier's uniqueness is document scoped
     * and is intended to be consistent for the same group across minor revisions of the
     * document.
     */
    id?: string;
    insert_controls?: SelectControls[];
    links?: Link[];
    params?: Parameter[];
    parts?: Part[];
    props?: Property[];
    /**
     * A name given to the group, which may be used by a tool for display and navigation.
     */
    title: string;
}

/**
 * Specifies which controls to use in the containing context.
 */
export interface SelectControls {
    exclude_controls?: Call[];
    include_all?: InsertAll;
    include_controls?: Call[];
    /**
     * A designation of how a selection of controls in a profile is to be ordered.
     */
    order?: Order;
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
 * Set parameters or amend controls in resolution
 */
export interface ModifyControls {
    alters?: Alteration[];
    set_parameters?: ParameterSetting[];
}

/**
 * An Alter element specifies changes to be made to an included control when a profile is
 * resolved.
 */
export interface Alteration {
    adds?: Addition[];
    /**
     * A reference to a control with a corresponding id value.
     */
    control_id?: string;
    removes?: Removal[];
}

/**
 * Specifies contents to be added into controls, in resolution
 */
export interface Addition {
    /**
     * Target location of the addition.
     */
    by_id?: string;
    links?: Link[];
    params?: Parameter[];
    parts?: Part[];
    /**
     * Where to add the new content with respect to the targeted element (beside it or inside it)
     */
    position?: Position;
    props?: Property[];
    /**
     * A name given to the control, which may be used by a tool for display and navigation.
     */
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
 * Specifies objects to be removed from a control based on specific aspects of the object
 * that must all match.
 */
export interface Removal {
    /**
     * Identify items to remove by matching their class.
     */
    by_class?: string;
    /**
     * Identify items to remove indicated by their id.
     */
    by_id?: string;
    /**
     * Identify items to remove by the name of the item's information element name, e.g. title
     * or prop
     */
    by_item_name?: string;
    /**
     * Identify items to remove by matching their assigned name
     */
    by_name?: string;
    /**
     * Identify items to remove by the item's ns, which is the namespace associated with a part,
     * or prop.
     */
    by_ns?: string;
}

/**
 * A parameter setting, to be propagated to points of insertion
 */
export interface ParameterSetting {
    /**
     * A textual label that provides a characterization of the parameter.
     */
    class?: string;
    constraints?: Constraint[];
    /**
     * Another parameter invoking this one
     */
    depends_on?: string;
    guidelines?: Guideline[];
    /**
     * A short, placeholder name for the parameter, which can be used as a substitute for a
     * value if no value is assigned.
     */
    label?: string;
    links?: Link[];
    /**
     * Indicates the value of the 'id' flag on a target parameter; i.e. which parameter to set
     */
    param_id: string;
    props?: Property[];
    select?: Selection;
    /**
     * Describes the purpose and use of a parameter
     */
    usage?: string;
    values?: string[];
}

/**
 * A system security plan, such as those described in NIST SP 800_18
 */
export interface SystemSecurityPlan {
    back_matter?: BackMatter;
    control_implementation: ControlImplementationClass;
    import_profile: ImportProfile;
    metadata: PublicationMetadata;
    system_characteristics: SystemCharacteristics;
    system_implementation: SystemImplementation;
    /**
     * A globally unique identifier for this catalog instance. This UUID should be changed when
     * this document is revised.
     */
    uuid: string;
}

/**
 * Describes how the system satisfies a set of controls.
 */
export interface ControlImplementationClass {
    /**
     * A statement describing important things to know about how this set of control
     * satisfaction documentation is approached.
     */
    description: string;
    implemented_requirements: ControlBasedRequirement[];
    set_parameters?: SetParameterValue[];
}

/**
 * Describes how the system satisfies an individual control.
 */
export interface ControlBasedRequirement {
    by_components?: ComponentControlImplementation[];
    /**
     * A reference to a control with a corresponding id value.
     */
    control_id: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    set_parameters?: SetParameterValue[];
    statements?: SpecificControlStatement[];
    /**
     * A globally unique identifier that can be used to reference this control requirement entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * Defines how the referenced component implements a set of controls.
 */
export interface ComponentControlImplementation {
    /**
     * A reference to the component that is implementing a given control or control statement.
     */
    component_uuid: string;
    /**
     * An implementation statement that describes how a control or a control statement is
     * implemented within the referenced system component.
     */
    description: string;
    /**
     * Identifies content intended for external consumption, such as with leveraged
     * organizations.
     */
    export?: Export;
    implementation_status?: ImplementationStatus;
    inherited?: InheritedControlImplementation[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    satisfied?: SatisfiedControlImplementationResponsibility[];
    set_parameters?: SetParameterValue[];
    /**
     * A globally unique identifier that can be used to reference this by_component entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * Identifies content intended for external consumption, such as with leveraged
 * organizations.
 */
export interface Export {
    /**
     * An implementation statement that describes the aspects of the control or control
     * statement implementation that can be available to another system leveraging this system.
     */
    description?: string;
    links?: Link[];
    props?: Property[];
    provided?: ProvidedControlImplementation[];
    remarks?: string;
    responsibilities?: ControlImplementationResponsibility[];
}

/**
 * Describes a capability which may be inherited by a leveraging system.
 */
export interface ProvidedControlImplementation {
    /**
     * An implementation statement that describes the aspects of the control or control
     * statement implementation that can be provided to another system leveraging this system.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A globally unique identifier that can be used to reference this provided entry elsewhere
     * in an OSCAL document. A UUID should be consistently used for a given resource across
     * revisions of the document.
     */
    uuid: string;
}

/**
 * Describes a control implementation responsibility imposed on a leveraging system.
 */
export interface ControlImplementationResponsibility {
    /**
     * An implementation statement that describes the aspects of the control or control
     * statement implementation that a leveraging system must implement to satisfy the control
     * provided by a leveraged system.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    provided_uuid?: string;
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A globally unique identifier that can be used to reference this responsibility entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * Describes a control implementation inherited by a leveraging system.
 */
export interface InheritedControlImplementation {
    /**
     * An implementation statement that describes the aspects of a control or control statement
     * implementation that a leveraging system is inheriting from a leveraged system.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    provided_uuid?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A globally unique identifier that can be used to reference this inherited entry elsewhere
     * in an OSCAL document. A UUID should be consistently used for a given resource across
     * revisions of the document.
     */
    uuid: string;
}

/**
 * Describes how this system satisfies a responsibility imposed by a leveraged system.
 */
export interface SatisfiedControlImplementationResponsibility {
    /**
     * An implementation statement that describes the aspects of a control or control statement
     * implementation that a leveraging system is implementing based on a requirement from a
     * leveraged system.
     */
    description: string;
    links?: Link[];
    props?: Property[];
    remarks?: string;
    /**
     * Identifies a 'provided' assembly associated with this assembly.
     */
    responsibility_uuid?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A globally unique identifier that can be used to reference this satisfied entry elsewhere
     * in an OSCAL document. A UUID should be consistently used for a given resource across
     * revisions of the document.
     */
    uuid: string;
}

/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificControlStatement {
    by_components?: ComponentControlImplementation[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    responsible_roles?: ResponsibleRole[];
    /**
     * A reference to a control statement by its identifier
     */
    statement_id: string;
    /**
     * A globally unique identifier that can be used to reference this control statement entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid: string;
}

/**
 * Used to import the OSCAL profile representing the system's control baseline.
 */
export interface ImportProfile {
    /**
     * A resolvable URL reference to the profile to use as the system's control baseline.
     */
    href: string;
    remarks?: string;
}

/**
 * Contains the characteristics of the system, such as its name, purpose, and security
 * impact level.
 */
export interface SystemCharacteristics {
    authorization_boundary: AuthorizationBoundary;
    data_flow?: DataFlow;
    date_authorized?: string;
    /**
     * A summary of the system.
     */
    description: string;
    links?: Link[];
    network_architecture?: NetworkArchitecture;
    props?: Property[];
    remarks?: string;
    responsible_parties?: ResponsibleParty[];
    security_impact_level: SecurityImpactLevel;
    /**
     * The overall information system sensitivity categorization, such as defined by FIPS_199.
     */
    security_sensitivity_level: string;
    status: SystemCharacteristicsStatus;
    system_ids: SystemIdentification[];
    system_information: SystemInformation;
    /**
     * The full name of the system.
     */
    system_name: string;
    /**
     * A short name for the system, such as an acronym, that is suitable for display in a data
     * table or summary list.
     */
    system_name_short?: string;
}

/**
 * A description of this system's authorization boundary, optionally supplemented by
 * diagrams that illustrate the authorization boundary.
 */
export interface AuthorizationBoundary {
    /**
     * A summary of the system's authorization boundary.
     */
    description: string;
    diagrams?: Diagram[];
    links?: Link[];
    props?: Property[];
    /**
     * Commentary about the system's authorization boundary that enhances the diagram.
     */
    remarks?: string;
}

/**
 * A graphic that provides a visual representation the system, or some aspect of it.
 */
export interface Diagram {
    /**
     * A brief caption to annotate the diagram.
     */
    caption?: string;
    /**
     * A summary of the diagram.
     */
    description?: string;
    links?: Link[];
    props?: Property[];
    /**
     * Commentary about the diagram that enhances it.
     */
    remarks?: string;
    /**
     * The identifier for this diagram.
     */
    uuid: string;
}

/**
 * A description of the logical flow of information within the system and across its
 * boundaries, optionally supplemented by diagrams that illustrate these flows.
 */
export interface DataFlow {
    /**
     * A summary of the system's data flow.
     */
    description: string;
    diagrams?: Diagram[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * A description of the system's network architecture, optionally supplemented by diagrams
 * that illustrate the network architecture.
 */
export interface NetworkArchitecture {
    /**
     * A summary of the system's network architecture.
     */
    description: string;
    diagrams?: Diagram[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
}

/**
 * The overall level of expected impact resulting from unauthorized disclosure,
 * modification, or loss of access to information.
 */
export interface SecurityImpactLevel {
    /**
     * A target_level of availability for the system, based on the sensitivity of information
     * within the system.
     */
    security_objective_availability: string;
    /**
     * A target_level of confidentiality for the system, based on the sensitivity of information
     * within the system.
     */
    security_objective_confidentiality: string;
    /**
     * A target_level of integrity for the system, based on the sensitivity of information
     * within the system.
     */
    security_objective_integrity: string;
}

/**
 * Describes the operational status of the system.
 */
export interface SystemCharacteristicsStatus {
    remarks?: string;
    /**
     * The current operating status.
     */
    state: OperatingState;
}

/**
 * The current operating status.
 */
export enum OperatingState {
    Disposition = "disposition",
    Operational = "operational",
    Other = "other",
    UnderDevelopment = "under_development",
    UnderMajorModification = "under_major_modification",
}

/**
 * Contains details about all information types that are stored, processed, or transmitted
 * by the system, such as privacy information, and those defined in NIST SP 800_60.
 */
export interface SystemInformation {
    information_types: InformationType[];
    links?: Link[];
    props?: Property[];
}

/**
 * Contains details about one information type that is stored, processed, or transmitted by
 * the system, such as privacy information, and those defined in NIST SP 800_60.
 */
export interface InformationType {
    /**
     * The expected level of impact resulting from the disruption of access to or use of the
     * described information or the information system.
     */
    availability_impact: AvailabilityImpactLevel;
    categorizations?: InformationTypeCategorization[];
    /**
     * The expected level of impact resulting from the unauthorized disclosure of the described
     * information.
     */
    confidentiality_impact: ConfidentialityImpactLevel;
    /**
     * A summary of how this information type is used within the system.
     */
    description: string;
    /**
     * The expected level of impact resulting from the unauthorized modification of the
     * described information.
     */
    integrity_impact: IntegrityImpactLevel;
    links?: Link[];
    props?: Property[];
    /**
     * A human readable name for the information type. This title should be meaningful within
     * the context of the system.
     */
    title: string;
    /**
     * A globally unique identifier that can be used to reference this information type entry
     * elsewhere in an OSCAL document. A UUID should be consistently used for a given resource
     * across revisions of the document.
     */
    uuid?: string;
}

/**
 * The expected level of impact resulting from the disruption of access to or use of the
 * described information or the information system.
 */
export interface AvailabilityImpactLevel {
    adjustment_justification?: string;
    base: string;
    links?: Link[];
    props?: Property[];
    selected?: string;
}

/**
 * A set of information type identifiers qualified by the given identification system used,
 * such as NIST SP 800_60.
 */
export interface InformationTypeCategorization {
    information_type_ids?: string[];
    /**
     * Specifies the information type identification system used.
     */
    system: string;
}

/**
 * The expected level of impact resulting from the unauthorized disclosure of the described
 * information.
 */
export interface ConfidentialityImpactLevel {
    adjustment_justification?: string;
    base: string;
    links?: Link[];
    props?: Property[];
    selected?: string;
}

/**
 * The expected level of impact resulting from the unauthorized modification of the
 * described information.
 */
export interface IntegrityImpactLevel {
    adjustment_justification?: string;
    base: string;
    links?: Link[];
    props?: Property[];
    selected?: string;
}

/**
 * Provides information as to how the system is implemented.
 */
export interface SystemImplementation {
    components: AssessmentAssetsComponent[];
    inventory_items?: InventoryItem[];
    leveraged_authorizations?: LeveragedAuthorization[];
    links?: Link[];
    props?: Property[];
    remarks?: string;
    users: SystemUser[];
}

/**
 * A description of another authorized system from which this system inherits capabilities
 * that satisfy security requirements. Another term for this concept is a common control
 * provider.
 */
export interface LeveragedAuthorization {
    date_authorized: string;
    links?: Link[];
    /**
     * A reference to the party that manages the leveraged system.
     */
    party_uuid: string;
    props?: Property[];
    remarks?: string;
    /**
     * A human readable name for the leveraged authorization in the context of the system.
     */
    title: string;
    /**
     * A globally unique identifier that can be used to reference this leveraged authorization
     * entry elsewhere in an OSCAL document. A UUID should be consistently used for a given
     * resource across revisions of the document.
     */
    uuid: string;
}


