import { SubjectOfAssessment, AssessmentSubjectPlaceholder } from "./Subject";
import { ExcludeControl } from "../assessment_plan";
/**
 * A name given to the document, which may be used by a tool for display and navigation.
 */
export declare type DocumentTitle = string;
/**
 * The date and time the document was published. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export declare type PublicationTimestamp = string;
/**
 * The date and time the document was last modified. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export declare type LastModifiedTimestamp = string;
/**
 * A string used to distinguish the current version of the document from other previous (and future) versions.
 */
export declare type DocumentVersion = string;
/**
 * The OSCAL model version the document was authored against.
 */
export declare type OSCALVersion = string;
/**
 * A name given to the document revision, which may be used by a tool for display and navigation.
 */
export declare type DocumentRevisionTitle = string;
/**
 * The date and time the document was published. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export declare type PublicationRevisionTitle = string;
/**
 * A string used to distinguish the current version of the document from other previous (and future) versions.
 */
export declare type DocumentRevisionVersion = string;
/**
 * A unique identifier that can be used to reference this property elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
 */
export declare type PropertyUniversallyUniqueIdentifier = string;
/**
 * A textual label that uniquely identifies a specific attribute, characteristic, or quality of the property's containing object.
 */
export declare type PropertyName = string;
/**
 * A namespace qualifying the property's name. This allows different organizations to associate distinct semantics with the same name.
 */
export declare type PropertyNamespace = string;
/**
 * A textual label that provides a sub_type or characterization of the property's name. This can be used to further distinguish or discriminate between the semantics of multiple properties of the same object with the same name and ns.
 */
export declare type PropertyClass = string;
/**
 * A textual label that uniquely identifies a specific attribute, characteristic, or quality of the annotated property's containing object.
 */
export declare type AnnotatedPropertyName = string;
/**
 * A unique identifier that can be used to reference this annotated property elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
 */
export declare type AnnotatedPropertyUniversallyUniqueIdentifier = string;
/**
 * A namespace qualifying the annotated property's name. This allows different organizations to associate distinct semantics with the same name.
 */
export declare type AnnotatedPropertyNamespace = string;
/**
 * Indicates the value of the attribute, characteristic, or quality.
 */
export declare type AnnotatedPropertyValue = string;
/**
 * Additional commentary on the containing object.
 */
export declare type Remarks = string;
/**
 * A resolvable URL reference to a resource.
 */
export declare type HypertextReference = string;
/**
 * Describes the type of relationship provided by the link. This can be an indicator of the link's purpose.
 */
export declare type Relation = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export declare type MediaType = string;
/**
 * A textual label to associate with the link, which may be used for presentation in a tool.
 */
export declare type LinkText = string;
/**
 * Qualifies the kind of document identifier.
 */
export declare type DocumentIdentificationScheme = string;
/**
 * A unique identifier for a specific role instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same role across minor revisions of the document.
 */
export declare type RoleIdentifier = string;
/**
 * References a unique task by UUID.
 */
export declare type TaskUniversallyUniqueIdentifierReference = string;
/**
 * >A resolvable URL reference to the system security plan for the system being assessed.
 */
export declare type SystemSecurityPlanReference = string;
/**
 * A name given to the role, which may be used by a tool for display and navigation.
 */
export declare type RoleTitle = string;
/**
 * A short common name, abbreviation, or acronym for the role.
 */
export declare type RoleShortName = string;
/**
 * A summary of the role's purpose and associated responsibilities.
 */
export declare type RoleDescription = string;
/**
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
 */
export declare type LocationUniversallyUniqueIdentifier = string;
/**
 * A name given to the location, which may be used by a tool for display and navigation.
 */
export declare type LocationTitle = string;
/**
 * Indicates the type of address.
 */
export declare type AddressType = string;
/**
 * A single line of an address.
 */
export declare type AddressLine = string;
/**
 * City, town or geographical region for the mailing address.
 */
export declare type City = string;
/**
 * State, province or analogous geographical region for mailing address
 */
export declare type State = string;
/**
 * Postal or ZIP code for mailing address
 */
export declare type PostalCode = string;
/**
 * The ISO 3166_1 alpha_2 country code for the mailing address.
 */
export declare type CountryCode = string;
/**
 * An email address as defined by RFC 5322 Section 3.4.1.
 */
export declare type EmailAddress = string;
/**
 * Indicates the type of phone number.
 */
export declare type PhoneType = string;
/**
 * The uniform resource locator (URL) for a web site or Internet presence associated with the location.
 */
export declare type LocationURL = string;
/**
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistantly used for a given party across revisions of the document.
 */
export declare type PartyUniversallyUniqueIdentifier = string;
/**
 * A category describing the kind of party the object describes.
 */
export declare type PartyType = "person" | "organization" | string;
/**
 * The full name of the party. This is typically the legal name associated with the party.
 */
export declare type PartyName = string;
/**
 * A short common name, abbreviation, or acronym for the party.
 */
export declare type PartyShortName = string;
/**
 * Indicates the type of external identifier.
 */
export declare type ExternalIdentifierSchema = string;
/**
 * A unique identifier for a specific part instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same part across minor revisions of the document.
 */
export declare type PartIdentifier = string;
/**
 * A textual label that uniquely identifies the part's semantic type.
 */
export declare type PartName = string;
/**
 * A namespace qualifying the part's name. This allows different organizations to associate distinct semantics with the same name.
 */
export declare type PartNamespace = string;
/**
 * A textual label that provides a sub_type or characterization of the part's name. This can be used to further distinguish or discriminate between the semantics of multiple parts of the same control with the same name and ns.
 */
export declare type PartClass = string;
/**
 * A name given to the part, which may be used by a tool for display and navigation.
 */
export declare type PartTitle = string;
/**
 * Permits multiple paragraphs, lists, tables etc.
 */
export declare type PartText = string;
/**
 * UUID of a location
 */
export declare type LocationReference = string;
/**
 * Identifies that the party object is a member of the organization associated with the provided UUID.
 */
export declare type OrganizationalAffiliation = string;
/**
 * References a party defined in metadata.
 */
export declare type PartyReference = string;
/**
 * A resolvable URL reference to the profile to use as the system's control baseline.
 */
export declare type ProfileReference = string;
/**
 * Identifies the identification system from which the provided identifier was assigned.
 */
export declare type IdentificationSystemType = string;
/**
 * The full name of the system.
 */
export declare type SystemNameFull = string;
/**
 * A short name for the system, such as an acronym, that is suitable for display in a data table or summary list.
 */
export declare type SystemNameShort = string;
/**
 * A summary of the system.
 */
export declare type SystemDescription = string;
/**
 * The date the system received its authorization.
 */
export declare type SystemAuthorizationDate = string;
/**
 * The overall information system sensitivity categorization, such as defined by FIPS_199.
 */
export declare type SecuritySensitivityLevel = string;
/**
 * A globally unique identifier that can be used to reference this information type entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type InformationTypeUniversallyUniqueIdentifier = string;
/**
 * A human readable name for the information type. This title should be meaningful within the context of the system.
 */
export declare type TitleField = string;
/**
 * A summary of how this information type is used within the system.
 */
export declare type InformationTypeDescription = string;
/**
 * Specifies the information type identification system used.
 */
export declare type InformationTypeIdentificationSystem = string;
/**
 * An identifier qualified by the given identification system used, such as NIST SP 800_60.
 */
export declare type InformationTypeSystemizedIdentifier = string;
/**
 * The prescribed base (Confidentiality, Integrity, or Availability) security impact level.
 */
export declare type BaseLevelConfidentialityIntegrityOrAvailability = string;
/**
 * The selected (Confidentiality, Integrity, or Availability) security impact level.
 */
export declare type SelectedLevelConfidentialityIntegrityOrAvailability = string;
/**
 * If the selected security level is different from the base security level, this contains the justification for the change.
 */
export declare type AdjustmentJustification = string;
/**
 * A target_level of confidentiality for the system, based on the sensitivity of information within the system.
 */
export declare type SecurityObjectiveConfidentiality = string;
/**
 * A target_level of integrity for the system, based on the sensitivity of information within the system.
 */
export declare type SecurityObjectiveIntegrity = string;
/**
 * A target_level of availability for the system, based on the sensitivity of information within the system.
 */
export declare type SecurityObjectiveAvailability = string;
/**
 * The current operating status.
 */
export declare type OperatingState = "operational" | "under_development" | "under_major_modification" | "disposition" | "other";
/**
 * A summary of the system's authorization boundary.
 */
export declare type AuthorizationBoundaryDescription = string;
/**
 * A summary of the diagram.
 */
export declare type DiagramDescription = string;
/**
 * A brief caption to annotate the diagram.
 */
export declare type Caption = string;
/**
 * Commentary about the diagram that enhances it.
 */
export declare type RemarksField = string;
/**
 * Commentary about the system's authorization boundary that enhances the diagram.
 */
export declare type AuthorizationBoundaryRemarks = string;
/**
 * A summary of the system's network architecture.
 */
export declare type NetworkArchitectureDescription = string;
/**
 * A summary of the system's data flow.
 */
export declare type DataFlowDescription = string;
/**
 * A globally unique identifier that can be used to reference this leveraged authorization entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type LeveragedAuthorizationUniversallyUniqueIdentifier = string;
/**
 * A reference to the party that manages the leveraged system.
 */
export declare type PartyUuidField = string;
/**
 * A name given to the user, which may be used by a tool for display and navigation.
 */
export declare type UserTitle = string;
/**
 * A short common name, abbreviation, or acronym for the user.
 */
export declare type UserShortName = string;
/**
 * A summary of the user's purpose within the system.
 */
export declare type UserDescription = string;
/**
 * A reference to the roles served by the user.
 */
export declare type RoleIdentifierReference = string;
/**
 * A human readable name for the privilege.
 */
export declare type PrivilegeTitle = string;
/**
 * A summary of the privilege's purpose within the system.
 */
export declare type PrivilegeDescription = string;
/**
 * Describes a function performed for a given authorized privilege by this user class.
 */
export declare type FunctionsPerformed = string;
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
 * The operational status.
 */
export declare type SystemComponentState = "under_development" | "operational" | "disposition" | "other";
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
export declare type ProtocolTitle = string;
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
 * A statement describing important things to know about how this set of control satisfaction documentation is approached.
 */
export declare type ControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this control requirement entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ControlRequirementUniversallyUniqueIdentifier = string;
/**
 * A reference to a control identifier.
 */
export declare type ControlIdentifierReference = string;
/**
 * References a unique action by UUID.
 */
export declare type ActionUniversallyUniqueIdentifierReference = string;
/**
 * The title for this event.
 */
export declare type ActionTitle = string;
/**
 * A human_readable description of this event.
 */
export declare type ActionDescription = string;
/**
 * A key word to indicate all.
 */
export declare type All = "ALL";
/**
 * A parameter value or set of values.
 */
export declare type ParameterValue = string;
/**
 * A globally unique identifier that can be used to reference this by_component entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ByComponentUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be available to another system leveraging this system.
 */
export declare type ControlImplementationExportDescription = string;
/**
 * A globally unique identifier that can be used to reference this provided entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ProvidedUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be provided to another system leveraging this system.
 */
export declare type ProvidedControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this responsibility entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ResponsibilityUniversallyUniqueIdentifier = string;
/**
 * Identifies a 'provided' assembly associated with this assembly.
 */
export declare type ProvidedUUID = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that a leveraging system must implement to satisfy the control provided by a leveraged system.
 */
export declare type ControlImplementationResponsibilityDescription = string;
/**
 * A globally unique identifier that can be used to reference this inherited entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type InheritedUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is inheriting from a leveraged system.
 */
export declare type InheritedControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this satisfied entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type SatisfiedUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is implementing based on a requirement from a leveraged system.
 */
export declare type SatisfiedControlImplementationResponsibilityDescription = string;
/**
 * A globally unique identifier that can be used to reference this control statement entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export declare type ControlStatementReferenceUniversallyUniqueIdentifier = string;
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
 * A line of citation text.
 */
export declare type CitationText = string;
/**
 * The Conditional Date
 */
export declare type ConditionalDate = string;
/**
 * Method by which a hash is derived
 */
export declare type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export declare type FileName = string;
/**
 * Uniquely identifies this defined action. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for a given test step across revisions of the document.
 */
export declare type ActionUniversallyUniqueIdentifier = string;
/**
 * A human_readable description of control objectives.
 */
export declare type ControlObjectiveDescription = string;
/**
 * A human_readable description of in_scope controls specified for assessment.
 */
export declare type AssessedControlsDescription = string;
/**
 * A human_readable description of this collection of control objectives.
 */
export declare type ControlOjectivesDescription = string;
/**
 * Uniquely identifies this assessment activity. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for a given included activity across revisions of the document.
 */
export declare type AssessmentActivityUniversallyUniqueIdentifier = string;
/**
 * A human_readable description of this control objective.
 */
export declare type ObjectiveDescription = string;
/**
 * The title for this included activity.
 */
export declare type IncludedActivityTitle = string;
/**
 * A human_readable description of this included activity.
 */
export declare type IncludedActivityDescription = string;
/**
 * Used to constrain the selection to only specificly identified statements.
 */
export declare type IncludeSpecificStatements = string;
/**
 * Points to an assessment objective.
 */
export declare type ObjectiveID = string;
/**
 * Uniquely identifies this assessment Platform.
 */
export declare type AssessmentPlatformUniversallyUniqueIdentifier = string;
/**
 * The title or name for the assessment platform.
 */
export declare type AssessmentPlatformTitle = string;
/**
 * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export declare type EventUniversallyUniqueIdentifier = string;
/**
 * The title for this event.
 */
export declare type EventTitle = string;
/**
 * A human_readable description of this event.
 */
export declare type EventDescription = string;
/**
 * Describes the status of the associated risk.
 */
export declare type AssociatedRiskStatus = string;
/**
 * >A resolvable URL reference to the assessment plan governing the assessment activities.
 */
export declare type AssessmentPlanReference = string;
/**
 * References an activity defined in the list of activities.
 */
export declare type ActivityUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies an assessment activity to be performed as part of the event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export declare type ActivityInstanceUniversallyUniqueIdentifier = string;
/**
 * The event must occur on or after the specified date.
 */
export declare type StartDateCondition = string;
/**
 * The event must occur on or before the specified date.
 */
export declare type EndDateCondition = string;
/**
 * The event must occur after the specified period has elapsed.
 */
export declare type Period = number;
/**
 * The unit of time for the period.
 */
export declare type TimeUnit = "seconds" | "minutes" | "hours" | "days" | "months" | "years";
/**
 * Indicates the type of assessment subject, such as a component, inventory, item, location, or party represented by this selection statement.
 */
export declare type SubjectType = string;
/**
 * A human_readable description of the collection of subjects being included in this assessment.
 */
export declare type IncludeSubjectsDescription = string;
/**
 * Uniquely identifies an activity to be performed as part of the action. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export declare type AssociatedActivityUniversallyUniqueIdentifier = string;
/**
 * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export declare type AssessmentLogEntryUniversallyUniqueIdentifier = string;
/**
 * The title for this objective status.
 */
export declare type ObjectiveStatusTitle = string;
/**
 * A human_readable description of the assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export declare type ObjectiveStatusDescription = string;
/**
 * A brief indication as to whether the objective is satisfied or not within a given system.
 */
export declare type ImplementationStatus = "satisfied" | "not_satisfied";
/**
 * Identifies the implementation statement in the SSP to which this finding is related.
 */
export declare type ImplementationStatementUUID = string;
/**
 * A pointer to a component, inventory_item, location, party, user, or resource using it's UUID.
 */
export declare type UUIDReference = string;
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export declare type UniversallyUniqueIdentifierReferenceType = string;
/**
 * The timing under which the event is intended to occur.
 */
export interface EventTiming {
    on_date?: OnDateCondition;
    within_date_range?: OnDateRangeCondition;
    at_frequency?: FrequencyCondition;
}
/**
 * The event is intended to occur on the specified date.
 */
export interface OnDateCondition {
    date: ConditionalDate;
}
/**
 * The event is intended to occur within the specified date range.
 */
export interface OnDateRangeCondition {
    start: StartDateCondition;
    end: EndDateCondition;
}
/**
 * The event is intended to occur at the specified frequency.
 */
export interface FrequencyCondition {
    period: Period;
    unit: TimeUnit;
}
/**
 * Identifies an individual activity to be performed as part of an action.
 */
export interface AssociatedActivity {
    uuid: AssociatedActivityUniversallyUniqueIdentifier;
    activity_uuid: ActivityUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    assessment_subjects?: SubjectOfAssessment[];
    assessment_subject_placeholder?: AssessmentSubjectPlaceholder;
    remarks?: Remarks;
}
/**
 * Used by the assessment plan and POA&M to import information about the system.
 */
export interface ImportSystemSecurityPlan {
    href: SystemSecurityPlanReference;
    remarks?: Remarks;
}
/**
 * Identifies an individual actions, such as test steps or examination procedures.
 */
export interface Action {
    uuid: ActionUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description: ActionDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    reviewed_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferenedControlObjectives {
    description?: ControlOjectivesDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    include_all?: All;
    include_objectives?: SelectObjective[];
    exclude_objectives?: SelectObjective[];
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
    description?: ControlObjectiveDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    control_selections: AssessedControls[];
    control_objective_selections?: ReferenedControlObjectives[];
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned controls. In the assessment results, these are the actual controls, and reflects any changes from the plan.
 */
export interface AssessedControls {
    description?: AssessedControlsDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    include_all?: All;
    include_controls?: SelectControl[];
    exclude_controls?: ExcludeControl[];
    remarks?: Remarks;
}
/**
 * Identifies an assessment or related process that can be performed. In the assessment plan, this is an intended activity which may be associated with an assessment task. In the assessment results, this an activity that was actually performed as part of an assessement.
 */
export interface Activity {
    uuid: AssessmentActivityUniversallyUniqueIdentifier;
    title?: IncludedActivityTitle;
    description: IncludedActivityDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    actions?: Action[];
    related_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies an individual actions, such as test steps or examination procedures.
 */
export interface Action {
    uuid: ActionUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description: ActionDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    reviewed_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
    description?: ControlObjectiveDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    control_selections: AssessedControls[];
    control_objective_selections?: ReferenedControlObjectives[];
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned controls. In the assessment results, these are the actual controls, and reflects any changes from the plan.
 */
export interface AssessedControls {
    description?: AssessedControlsDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    include_all?: All;
    include_controls?: SelectControl[];
    exclude_controls?: ExcludeControl[];
    remarks?: Remarks;
}
/**
 * Used to select a control for inclusion/exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
    control_id: ControlIdentifierReference;
    statement_ids?: IncludeSpecificStatements[];
}
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferenedControlObjectives {
    description?: ControlOjectivesDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    include_all?: All;
    include_objectives?: SelectObjective[];
    exclude_objectives?: SelectObjective[];
    remarks?: Remarks;
}
/**
 * Used to select a control objective for inclusion/exclusion based on the control objective's identifier.
 */
export interface SelectObjective {
    objective_id: ObjectiveID;
}
/**
 * Provides information about the publication and availability of the containing document.
 */
export interface PublicationMetadata {
    title: DocumentTitle;
    published?: PublicationTimestamp;
    last_modified: LastModifiedTimestamp;
    version: DocumentVersion;
    oscal_version: OSCALVersion;
    revisions?: RevisionHistoryEntry[];
    document_ids?: DocumentIdentifier[];
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    roles?: Role[];
    locations?: Location[];
    parties?: Party[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * An entry in a sequential list of revisions to the containing document in reverse chronological order (i.e., most recent previous revision first).
 */
export interface RevisionHistoryEntry {
    title?: DocumentRevisionTitle;
    published?: PublicationRevisionTitle;
    last_modified?: LastModifiedTimestamp;
    version?: DocumentRevisionVersion;
    oscal_version?: OSCALVersion;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * An attribute, characteristic, or quality of the containing object expressed as a namespace qualified name/value pair. The value of a property is a simple scalar value, which may be expressed as a list of values in some OSCAL formats.
 */
export interface Property {
    uuid?: PropertyUniversallyUniqueIdentifier;
    name: PropertyName;
    ns?: PropertyNamespace;
    class?: PropertyClass;
    value: string;
}
/**
 * An attribute, characteristic, or quality of the containing object expressed as a namespace qualified name/value pair with optional explanatory remarks. The value of an annotated property is a simple scalar value.
 */
export interface AnnotatedProperty {
    name: AnnotatedPropertyName;
    uuid?: AnnotatedPropertyUniversallyUniqueIdentifier;
    ns?: AnnotatedPropertyNamespace;
    value: AnnotatedPropertyValue;
    remarks?: Remarks;
}
/**
 * A reference to a local or remote resource
 */
export interface Link {
    href: HypertextReference;
    rel?: Relation;
    media_type?: MediaType;
    text?: LinkText;
}
/**
 * A document identifier qualified by an identifier type.
 */
export interface DocumentIdentifier {
    scheme: DocumentIdentificationScheme;
    identifier: string;
}
/**
 * Defines a function assumed or expected to be assumed by a party in a specific situation.
 */
export interface Role {
    id: RoleIdentifier;
    title: RoleTitle;
    short_name?: RoleShortName;
    description?: RoleDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * A location, with associated metadata that can be referenced.
 */
export interface Location {
    uuid: LocationUniversallyUniqueIdentifier;
    title?: LocationTitle;
    address: Address;
    email_addresses?: EmailAddress[];
    telephone_numbers?: TelephoneNumber[];
    urls?: LocationURL[];
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * A postal address for the location.
 */
export interface Address {
    type?: AddressType;
    addr_lines?: AddressLine[];
    city?: City;
    state?: State;
    postal_code?: PostalCode;
    country?: CountryCode;
}
/**
 * Contact number by telephone.
 */
export interface TelephoneNumber {
    type?: PhoneType;
    number: string;
}
/**
 * A responsible entity which is either a person or an organization.
 */
export interface Party {
    uuid: PartyUniversallyUniqueIdentifier;
    type: PartyType;
    name?: PartyName;
    short_name?: PartyShortName;
    external_ids?: PartyExternalIdentifier[];
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    email_addresses?: EmailAddress[];
    telephone_numbers?: TelephoneNumber[];
    addresses?: Address[];
    location_uuids?: LocationReference[];
    member_of_organizations?: OrganizationalAffiliation[];
    remarks?: Remarks;
}
/**
 * An identifier for a person or organization using a designated scheme. e.g. an Open Researcher and Contributor ID (ORCID)
 */
export interface PartyExternalIdentifier {
    scheme: ExternalIdentifierSchema;
    id: string;
}
/**
 * A reference to a set of organizations or persons that have responsibility for performing a referenced role in the context of the containing object.
 */
export interface ResponsibleParty {
    party_uuids: PartyReference[];
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Used to import the OSCAL profile representing the system's control baseline.
 */
export interface ImportProfile {
    href: ProfileReference;
    remarks?: Remarks;
}
/**
 * Identifies an individual action for which the containing object is a consequence of.
 */
export interface ActionReference {
    action_uuid: ActionUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
    task_uuid: TaskUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    assessment_subjects?: SubjectOfAssessment[];
    remarks?: Remarks;
}
/**
 * Contains the characteristics of the system, such as its name, purpose, and security impact level.
 */
export interface SystemCharacteristics {
    system_ids: SystemIdentification[];
    system_name: SystemNameFull;
    system_name_short?: SystemNameShort;
    description: SystemDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    date_authorized?: SystemAuthorizationDate;
    security_sensitivity_level: SecuritySensitivityLevel;
    system_information: SystemInformation;
    security_impact_level: SecurityImpactLevel;
    status: Status;
    authorization_boundary: AuthorizationBoundary;
    network_architecture?: NetworkArchitecture;
    data_flow?: DataFlow;
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
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
 * Contains details about all information types that are stored, processed, or transmitted by the system, such as privacy information, and those defined in NIST SP 800_60.
 */
export interface SystemInformation {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    information_types: InformationType[];
}
/**
 * Contains details about one information type that is stored, processed, or transmitted by the system, such as privacy information, and those defined in NIST SP 800_60.
 */
export interface InformationType {
    uuid?: InformationTypeUniversallyUniqueIdentifier;
    title: TitleField;
    description: InformationTypeDescription;
    categorizations?: InformationTypeCategorization[];
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    confidentiality_impact: ConfidentialityImpactLevel;
    integrity_impact: IntegrityImpactLevel;
    availability_impact: AvailabilityImpactLevel;
}
/**
 * A set of information type identifiers qualified by the given identification system used, such as NIST SP 800_60.
 */
export interface InformationTypeCategorization {
    system: InformationTypeIdentificationSystem;
    information_type_ids?: InformationTypeSystemizedIdentifier[];
}
/**
 * The expected level of impact resulting from the unauthorized disclosure of the described information.
 */
export interface ConfidentialityImpactLevel {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    base: BaseLevelConfidentialityIntegrityOrAvailability;
    selected?: SelectedLevelConfidentialityIntegrityOrAvailability;
    adjustment_justification?: AdjustmentJustification;
}
/**
 * The expected level of impact resulting from the unauthorized modification of the described information.
 */
export interface IntegrityImpactLevel {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    base: BaseLevelConfidentialityIntegrityOrAvailability;
    selected?: SelectedLevelConfidentialityIntegrityOrAvailability;
    adjustment_justification?: AdjustmentJustification;
}
/**
 * The expected level of impact resulting from the disruption of access to or use of the described information or the information system.
 */
export interface AvailabilityImpactLevel {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    base: BaseLevelConfidentialityIntegrityOrAvailability;
    selected?: SelectedLevelConfidentialityIntegrityOrAvailability;
    adjustment_justification?: AdjustmentJustification;
}
/**
 * The overall level of expected impact resulting from unauthorized disclosure, modification, or loss of access to information.
 */
export interface SecurityImpactLevel {
    security_objective_confidentiality: SecurityObjectiveConfidentiality;
    security_objective_integrity: SecurityObjectiveIntegrity;
    security_objective_availability: SecurityObjectiveAvailability;
}
/**
 * Describes the operational status of the system.
 */
export interface Status {
    state: OperatingState;
    remarks?: Remarks;
}
/**
 * A description of this system's authorization boundary, optionally supplemented by diagrams that illustrate the authorization boundary.
 */
export interface AuthorizationBoundary {
    description: AuthorizationBoundaryDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    diagrams?: {
        [k: string]: Diagram;
    };
    remarks?: AuthorizationBoundaryRemarks;
}
/**
 * A graphic that provides a visual representation the system, or some aspect of it.
 */
export interface Diagram {
    description?: DiagramDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    caption?: Caption;
    remarks?: RemarksField;
}
/**
 * A description of the system's network architecture, optionally supplemented by diagrams that illustrate the network architecture.
 */
export interface NetworkArchitecture {
    description: NetworkArchitectureDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    diagrams?: {
        [k: string]: Diagram;
    };
    remarks?: Remarks;
}
/**
 * A description of the logical flow of information within the system and across its boundaries, optionally supplemented by diagrams that illustrate these flows.
 */
export interface DataFlow {
    description: DataFlowDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    diagrams?: {
        [k: string]: Diagram;
    };
    remarks?: Remarks;
}
/**
 * Identifies an individual action for which the containing object is a consequence of.
 */
export interface ActionReference {
    action_uuid: ActionUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * Provides information as to how the system is implemented.
 */
export interface SystemImplementation {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    leveraged_authorizations?: LeveragedAuthorization[];
    users: {
        [k: string]: SystemUser;
    };
    components: {
        [k: string]: Component;
    };
    inventory_items?: InventoryItem[];
    remarks?: Remarks;
}
/**
 * A description of another authorized system from which this system inherits capabilities that satisfy security requirements. Another term for this concept is a common control provider.
 */
export interface LeveragedAuthorization {
    uuid: LeveragedAuthorizationUniversallyUniqueIdentifier;
    title: TitleField;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    party_uuid: PartyUuidField;
    date_authorized: SystemAuthorizationDate;
    remarks?: Remarks;
}
/**
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUser {
    title?: UserTitle;
    short_name?: UserShortName;
    description?: UserDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    role_ids?: RoleIdentifierReference[];
    authorized_privileges?: Privilege[];
    remarks?: Remarks;
}
/**
 * Identifies a specific system privilege held by the user, along with an associated description and/or rationale for the privilege.
 */
export interface Privilege {
    title: PrivilegeTitle;
    description?: PrivilegeDescription;
    functions_performed: FunctionsPerformed[];
}
/**
 * A defined component that can be part of an implemented system.
 */
export interface Component {
    type: ComponentType;
    title: ComponentTitle;
    description: ComponentDescription;
    purpose?: Purpose;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    status: ComponentStatus;
    responsible_roles?: {
        [k: string]: ResponsibleRole;
    };
    protocols?: ServiceProtocolInformation[];
    remarks?: Remarks;
}
/**
 * Describes the operational status of the system component.
 */
export interface ComponentStatus {
    state: SystemComponentState;
    remarks?: Remarks;
}
/**
 * A reference to one or more roles with responsibility for performing a function relative to the containing object.
 */
export interface ResponsibleRole {
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    party_uuids?: PartyReference[];
    remarks?: Remarks;
}
/**
 * Information about the protocol used to provide a service.
 */
export interface ServiceProtocolInformation {
    uuid?: ServiceProtocolInformationUniversallyUniqueIdentifier;
    name: ProtocolName;
    title?: ProtocolTitle;
    port_ranges?: PortRange[];
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
 * A partition of a control's definition or a child of another part.
 */
export interface Part {
    id?: PartIdentifier;
    name: PartName;
    ns?: PartNamespace;
    class?: PartClass;
    title?: PartTitle;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    prose?: PartText;
    parts?: Part[];
    links?: Link[];
}
/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
    uuid: InventoryItemUniversallyUniqueIdentifier;
    description: InventoryItemDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    implemented_components?: ImplementedComponent[];
    remarks?: Remarks;
}
/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_parties?: Record<RoleIdentifier, ResponsibleParty>;
    remarks?: Remarks;
}
/**
 * Describes how the system satisfies a set of controls.
 */
export interface ControlImplementation {
    description: ControlImplementationDescription;
    implemented_requirements: ControlBasedRequirement[];
}
/**
 * Describes how the system satisfies an individual control.
 */
export interface ControlBasedRequirement {
    uuid: ControlRequirementUniversallyUniqueIdentifier;
    control_id: ControlIdentifierReference;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    parameter_settings?: {
        [k: string]: SetParameterValue;
    };
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    by_components?: {
        [k: string]: ComponentControlImplementation;
    };
    statements?: {
        [k: string]: SpecificControlStatement;
    };
    remarks?: Remarks;
}
/**
 * Identifies the parameter that will be set by the enclosed value.
 */
export interface SetParameterValue {
    values: ParameterValue[];
}
/**
 * Defines how the referenced component implements a set of controls.
 */
export interface ComponentControlImplementation {
    uuid: ByComponentUniversallyUniqueIdentifier;
    description: ControlImplementationDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    parameter_settings?: {
        [k: string]: SetParameterValue;
    };
    export?: Export;
    inherited?: InheritedControlImplementation[];
    satisfied?: SatisfiedControlImplementationResponsibility[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies content intended for external consumption, such as with leveraged organizations.
 */
export interface Export {
    description?: ControlImplementationExportDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    provided?: ProvidedControlImplementation[];
    responsibilities?: ControlImplementationResponsibility[];
    remarks?: Remarks;
}
/**
 * Describes a capability which may be inherited by a leveraging system.
 */
export interface ProvidedControlImplementation {
    uuid: ProvidedUniversallyUniqueIdentifier;
    description: ProvidedControlImplementationDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Describes a control implementation responsibiity imposed on a leveraging system.
 */
export interface ControlImplementationResponsibility {
    uuid: ResponsibilityUniversallyUniqueIdentifier;
    provided_uuid?: ProvidedUUID;
    description: ControlImplementationResponsibilityDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Describes a control implementation inherited by a leveraging system.
 */
export interface InheritedControlImplementation {
    uuid: InheritedUniversallyUniqueIdentifier;
    provided_uuid?: ProvidedUUID;
    description: InheritedControlImplementationDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
}
/**
 * Describes how this system satisfies a responsibiity imposed by a leveraged system.
 */
export interface SatisfiedControlImplementationResponsibility {
    uuid: SatisfiedUniversallyUniqueIdentifier;
    responsibility_uuid?: ProvidedUUID;
    description: SatisfiedControlImplementationResponsibilityDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
    remarks?: Remarks;
}
/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificControlStatement {
    uuid: ControlStatementReferenceUniversallyUniqueIdentifier;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    links?: Link[];
    by_components?: {
        [k: string]: ComponentControlImplementation;
    };
    remarks?: Remarks;
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
    resources?: Resource[];
}
/**
 * A resource associated with content in the containing document. A resource may be directly included in the document base64 encoded or may point to one or more equavalent internet resources.
 */
export interface Resource {
    uuid: ResourceUniversallyUniqueIdentifier;
    title?: ResourceTitle;
    description?: ResourceDescription;
    props?: Property[];
    annotations?: AnnotatedProperty[];
    document_ids?: DocumentIdentifier[];
    citation?: Citation;
    rlinks?: ResourceLink[];
    base64?: Base64;
    remarks?: Remarks;
}
/**
 * A citation consisting of end note text and optional structured bibliographic data.
 */
export interface Citation {
    text: CitationText;
    props?: Property[];
    annotations?: AnnotatedProperty[];
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
    href: HypertextReference;
    media_type?: MediaType;
    hashes?: Hash[];
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
    media_type?: MediaType;
    value: string;
}
