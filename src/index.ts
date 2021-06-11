import exportOscal from "./exportOscal";
import importOscal from "./importOscal";



export {
    exportOscal,
    importOscal,
};

/**
 * UUID v4.
 */
export type UniversallyUniqueIdentifier = string;
/**
 * A date string in RFC 3339 format.
 */
export type IsoDate = string;
/**
 * A globally unique identifier for this catalog instance. This UUID should be changed when this document is revised.
 */
export type CatalogUniversallyUniqueIdentifier = string;
/**
 * A name given to the document, which may be used by a tool for display and navigation.
 */
export type DocumentTitle = string;
/**
 * The date and time the document was published. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export type PublicationTimestamp = string;
/**
 * The date and time the document was last modified. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export type LastModifiedTimestamp = string;
/**
 * A string used to distinguish the current version of the document from other previous (and future) versions.
 */
export type DocumentVersion = string;
/**
 * The OSCAL model version the document was authored against.
 */
export type OSCALVersion = string;
/**
 * A name given to the document revision, which may be used by a tool for display and navigation.
 */
export type DocumentRevisionTitle = string;
/**
 * A textual label that uniquely identifies a specific attribute, characteristic, or quality of the property's containing object.
 */
export type PropertyName = string;
/**
 * A unique identifier that can be used to reference this property elsewhere in an OSCAL document. A UUID should be consistently used for a given location across revisions of the document.
 */
export type PropertyUniversallyUniqueIdentifier = string;
/**
 * A namespace qualifying the property's name. This allows different organizations to associate distinct semantics with the same name.
 */
export type PropertyNamespace = string;
/**
 * Indicates the value of the attribute, characteristic, or quality.
 */
export type PropertyValue = string;
/**
 * A textual label that provides a sub_type or characterization of the property's name. This can be used to further distinguish or discriminate between the semantics of multiple properties of the same object with the same name and ns.
 */
export type PropertyClass = string;
/**
 * Additional commentary on the containing object.
 */
export type Remarks = string;
/**
 * A resolvable URL reference to a resource.
 */
export type HypertextReference = string;
/**
 * Describes the type of relationship provided by the link. This can be an indicator of the link's purpose.
 */
export type Relation = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export type MediaType = string;
/**
 * A textual label to associate with the link, which may be used for presentation in a tool.
 */
export type LinkText = string;
/**
 * Qualifies the kind of document identifier using a URI. If the scheme is not provided the value of the element will be interpreted as a string of characters.
 */
export type DocumentIdentificationScheme = string;
/**
 * A unique identifier for a specific role instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same role across minor revisions of the document.
 */
export type RoleIdentifier = string;
/**
 * A name given to the role, which may be used by a tool for display and navigation.
 */
export type RoleTitle = string;
/**
 * A short common name, abbreviation, or acronym for the role.
 */
export type RoleShortName = string;
/**
 * A summary of the role's purpose and associated responsibilities.
 */
export type RoleDescription = string;
/**
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistently used for a given location across revisions of the document.
 */
export type LocationUniversallyUniqueIdentifier = string;
/**
 * A name given to the location, which may be used by a tool for display and navigation.
 */
export type LocationTitle = string;
/**
 * Indicates the type of address.
 */
export type AddressType = string;
/**
 * A single line of an address.
 */
export type AddressLine = string;
/**
 * City, town or geographical region for the mailing address.
 */
export type City = string;
/**
 * State, province or analogous geographical region for mailing address
 */
export type State = string;
/**
 * Postal or ZIP code for mailing address
 */
export type PostalCode = string;
/**
 * The ISO 3166_1 alpha_2 country code for the mailing address.
 */
export type CountryCode = string;
/**
 * An email address as defined by RFC 5322 Section 3.4.1.
 */
export type EmailAddress = string;
/**
 * Indicates the type of phone number.
 */
export type TypeFlag = string;
/**
 * The uniform resource locator (URL) for a web site or Internet presence associated with the location.
 */
export type LocationURL = string;
/**
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistently used for a given party across revisions of the document.
 */
export type PartyUniversallyUniqueIdentifier = string;
/**
 * A category describing the kind of party the object describes.
 */
export type PartyType = "person" | "organization";
/**
 * The full name of the party. This is typically the legal name associated with the party.
 */
export type PartyName = string;
/**
 * A short common name, abbreviation, or acronym for the party.
 */
export type PartyShortName = string;
/**
 * Indicates the type of external identifier.
 */
export type ExternalIdentifierSchema = string;
/**
 * References a location defined in metadata.
 */
export type LocationReference = string;
/**
 * Identifies that the party object is a member of the organization associated with the provided UUID.
 */
export type OrganizationalAffiliation = string;
/**
 * The role that the party is responsible for.
 */
export type ResponsibleRole = string;
/**
 * References a party defined in metadata.
 */
export type PartyReference = string;
/**
 * A unique identifier for a specific parameter instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same parameter across minor revisions of the document.
 */
export type ParameterIdentifier = string;
/**
 * A textual label that provides a characterization of the parameter.
 */
export type ParameterClass = string;
/**
 * Another parameter invoking this one
 */
export type DependsOn = string;
/**
 * A short, placeholder name for the parameter, which can be used as a substitute for a value if no value is assigned.
 */
export type ParameterLabel = string;
/**
 * Describes the purpose and use of a parameter
 */
export type ParameterUsageDescription = string;
/**
 * A textual summary of the constraint to be applied.
 */
export type ConstraintDescription = string;
/**
 * A formal (executable) expression of a constraint
 */
export type ConstraintExpression = string;
/**
 * Prose permits multiple paragraphs, lists, tables etc.
 */
export type GuidelineText = string;
/**
 * A parameter value or set of values.
 */
export type ParameterValue = string;
/**
 * Describes the number of selections that must occur. Without this setting, only one value should be assumed to be permitted.
 */
export type ParameterCardinality = "one" | "one_or_more";
/**
 * A value selection among several such options
 */
export type Choice = string;
/**
 * A unique identifier for a specific control instance that can be used to reference the control in other OSCAL documents. This identifier's uniqueness is document scoped and is intended to be consistent for the same control across minor revisions of the document.
 */
export type ControlIdentifier = string;
/**
 * A textual label that provides a sub_type or characterization of the control.
 */
export type ControlClass = string;
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export type ControlTitle = string;
/**
 * A unique identifier for a specific part instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same part across minor revisions of the document.
 */
export type PartIdentifier = string;
/**
 * A textual label that uniquely identifies the part's semantic type.
 */
export type PartName = string;
/**
 * A namespace qualifying the part's name. This allows different organizations to associate distinct semantics with the same name.
 */
export type PartNamespace = string;
/**
 * A textual label that provides a sub_type or characterization of the part's name. This can be used to further distinguish or discriminate between the semantics of multiple parts of the same control with the same name and ns.
 */
export type PartClass = string;
/**
 * A name given to the part, which may be used by a tool for display and navigation.
 */
export type PartTitle = string;
/**
 * Permits multiple paragraphs, lists, tables etc.
 */
export type PartText = string;
/**
 * A unique identifier for a specific group instance that can be used to reference the group within this and in other OSCAL documents. This identifier's uniqueness is document scoped and is intended to be consistent for the same group across minor revisions of the document.
 */
export type GroupIdentifier = string;
/**
 * A textual label that provides a sub_type or characterization of the group.
 */
export type GroupClass = string;
/**
 * A name given to the group, which may be used by a tool for display and navigation.
 */
export type GroupTitle = string;
/**
 * A globally unique identifier that can be used to reference this defined resource elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ResourceUniversallyUniqueIdentifier = string;
/**
 * A name given to the resource, which may be used by a tool for display and navigation.
 */
export type ResourceTitle = string;
/**
 * A short summary of the resource used to indicate the purpose of the resource.
 */
export type ResourceDescription = string;
/**
 * A line of citation text.
 */
export type CitationText = string;
/**
 * A resolvable URI reference to a resource.
 */
export type ResourceHypertextReference = string;
/**
 * Method by which a hash is derived
 */
export type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export type FileName = string;
/**
 * A globally unique identifier for this profile instance. This UUID should be changed when this document is revised.
 */
export type ProfileUniversallyUniqueIdentifier = string;
/**
 * A resolvable URL reference to the base catalog or profile that this profile is tailoring.
 */
export type CatalogOrProfileReference = string;
/**
 * A reference to a control with a corresponding id value.
 */
export type ControlIdentifierReference = string;
/**
 * Used to constrain the selection to only specificity identified statements.
 */
export type IncludeSpecificStatements = string;
/**
 * How clashing controls should be handled
 */
export type CombinationMethod = "use_first" | "merge" | "keep";
/**
 * An As_is element indicates that the controls should be structured in resolution as they are structured in their source catalogs. It does not contain any elements or attributes.
 */
export type AsIs = boolean;
/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
export type Order = "keep" | "ascending" | "descending";
/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
export type IncludeContainedControlsWithControl = "yes" | "no";
export type MatchControlsByIdentifier = string;
/**
 * A glob expression matching the IDs of one or more controls to be selected.
 */
export type Pattern = string;
/**
 * Indicates the value of the 'id' flag on a target parameter; i.e. which parameter to set
 */
export type ParameterID = string;
/**
 * Identify items to remove by matching their assigned name
 */
export type ReferenceByAssignedName = string;
/**
 * Identify items to remove by matching their class.
 */
export type ReferenceByClass = string;
/**
 * Identify items to add/remove indicated by their id.
 */
export type ReferenceByID = string;
/**
 * Identify items to remove by the name of the item's information element name, e.g. title or prop
 */
export type ItemNameReference = string;
/**
 * Identify items to remove by the item's ns, which is the namespace associated with a part, or prop.
 */
export type ItemNamespaceReference = string;
/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
export type Position = "before" | "after" | "starting" | "ending";
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export type TitleChange = string;
/**
 * A globally unique identifier for this component definition instance. This UUID should be changed when this document is revised.
 */
export type ComponentDefinitionUniversallyUniqueIdentifier = string;
/**
 * A link to a resource that defines a set of components and/or capabilities to import into this collection.
 */
export type HyperlinkReference = string;
/**
 * The unique identifier for the component.
 */
export type ComponentIdentifier = string;
/**
 * A category describing the purpose of the component.
 */
export type ComponentType = string;
/**
 * A human readable name for the component.
 */
export type ComponentTitle = string;
/**
 * A description of the component, including information about its function.
 */
export type ComponentDescription = string;
/**
 * A summary of the technological or business purpose of the component.
 */
export type Purpose = string;
/**
 * The role that is responsible for the business function.
 */
export type ResponsibleRoleID = string;
/**
 * A globally unique identifier that can be used to reference this service protocol entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ServiceProtocolInformationUniversallyUniqueIdentifier = string;
/**
 * The common name of the protocol, which should be the appropriate "service name" from the IANA Service Name and Transport Protocol Port Number Registry.
 */
export type ProtocolName = string;
/**
 * A human readable name for the protocol (e.g., Transport Layer Security).
 */
export type ProtocolTitle = string;
/**
 * Indicates the starting port number in a port range
 */
export type Start = number;
/**
 * Indicates the ending port number in a port range
 */
export type End = number;
/**
 * Indicates the transport type.
 */
export type Transport = "TCP" | "UDP";
/**
 * A statement describing important things to know about how this set of control satisfaction documentation is approached.
 */
export type ControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this control requirement entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ControlRequirementUniversallyUniqueIdentifier = string;
/**
 * A reference to a control with a corresponding id value.
 */
export type ControlIdentifierReference2 = string;
/**
 * A reference to a control statement by its identifier
 */
export type ControlStatementReference = string;
/**
 * A globally unique identifier that can be used to reference this control statement entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ControlStatementReferenceUniversallyUniqueIdentifier = string;
/**
 * A reference to the component that is implementing a given control or control statement.
 */
export type ComponentUniversallyUniqueIdentifierReference = string;
/**
 * A globally unique identifier that can be used to reference this by_component entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ByComponentUniversallyUniqueIdentifier = string;
/**
 * Identifies the implementation status of the control or control objective.
 */
export type ImplementationState = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be available to another system leveraging this system.
 */
export type ControlImplementationExportDescription = string;
/**
 * A globally unique identifier that can be used to reference this provided entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ProvidedUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be provided to another system leveraging this system.
 */
export type ProvidedControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this responsibility entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type ResponsibilityUniversallyUniqueIdentifier = string;
/**
 * Identifies a 'provided' assembly associated with this assembly.
 */
export type ProvidedUUID = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that a leveraging system must implement to satisfy the control provided by a leveraged system.
 */
export type ControlImplementationResponsibilityDescription = string;
/**
 * A globally unique identifier that can be used to reference this inherited entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type InheritedUniversallyUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is inheriting from a leveraged system.
 */
export type InheritedControlImplementationDescription = string;
/**
 * A globally unique identifier that can be used to reference this satisfied entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type SatisfiedUniversallyUniqueIdentifier = string;
/**
 * Identifies a Unique Responsibility associated with this assembly.
 */
export type ResponsibilityUniqueIdentifier = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is implementing based on a requirement from a leveraged system.
 */
export type SatisfiedControlImplementationResponsibilityDescription = string;
/**
 * A unique identifier for a capability.
 */
export type CapabilityIdentifier = string;
/**
 * The capability's human_readable name.
 */
export type CapabilityName = string;
/**
 * A summary of the capability.
 */
export type CapabilityDescription = string;
/**
 * A reference to a component by its identifier
 */
export type ComponentReference = string;
/**
 * A globally unique identifier for this catalog instance. This UUID should be changed when this document is revised.
 */
export type SystemSecurityPlanUniversallyUniqueIdentifier = string;
/**
 * A resolvable URL reference to the profile to use as the system's control baseline.
 */
export type ProfileReference = string;
/**
 * Identifies the identification system from which the provided identifier was assigned.
 */
export type IdentificationSystemType = string;
/**
 * The full name of the system.
 */
export type SystemNameFull = string;
/**
 * A short name for the system, such as an acronym, that is suitable for display in a data table or summary list.
 */
export type SystemNameShort = string;
/**
 * A summary of the system.
 */
export type SystemDescription = string;
/**
 * The date the system received its authorization.
 */
export type SystemAuthorizationDate = string;
/**
 * The overall information system sensitivity categorization, such as defined by FIPS_199.
 */
export type SecuritySensitivityLevel = string;
/**
 * A globally unique identifier that can be used to reference this information type entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type InformationTypeUniversallyUniqueIdentifier = string;
/**
 * A human readable name for the information type. This title should be meaningful within the context of the system.
 */
export type TitleField = string;
/**
 * A summary of how this information type is used within the system.
 */
export type InformationTypeDescription = string;
/**
 * Specifies the information type identification system used.
 */
export type InformationTypeIdentificationSystem = string;
/**
 * An identifier qualified by the given identification system used, such as NIST SP 800_60.
 */
export type InformationTypeSystematizedIdentifier = string;
/**
 * The prescribed base (Confidentiality, Integrity, or Availability) security impact level.
 */
export type BaseLevelConfidentialityIntegrityOrAvailability = string;
/**
 * The selected (Confidentiality, Integrity, or Availability) security impact level.
 */
export type SelectedLevelConfidentialityIntegrityOrAvailability = string;
/**
 * If the selected security level is different from the base security level, this contains the justification for the change.
 */
export type AdjustmentJustification = string;
/**
 * A target_level of confidentiality for the system, based on the sensitivity of information within the system.
 */
export type SecurityObjectiveConfidentiality = string;
/**
 * A target_level of integrity for the system, based on the sensitivity of information within the system.
 */
export type SecurityObjectiveIntegrity = string;
/**
 * A target_level of availability for the system, based on the sensitivity of information within the system.
 */
export type SecurityObjectiveAvailability = string;
/**
 * The current operating status.
 */
export type OperatingState = "operational" | "under_development" | "under_major_modification" | "disposition" | "other";
/**
 * A summary of the system's authorization boundary.
 */
export type AuthorizationBoundaryDescription = string;
/**
 * The identifier for this diagram.
 */
export type DiagramID = string;
/**
 * A summary of the diagram.
 */
export type DiagramDescription = string;
/**
 * A brief caption to annotate the diagram.
 */
export type Caption = string;
/**
 * Commentary about the diagram that enhances it.
 */
export type RemarksField = string;
/**
 * A summary of the system's network architecture.
 */
export type NetworkArchitectureDescription = string;
/**
 * A summary of the system's data flow.
 */
export type DataFlowDescription = string;
/**
 * A globally unique identifier that can be used to reference this leveraged authorization entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type LeveragedAuthorizationUniversallyUniqueIdentifier = string;
/**
 * A human readable name for the leveraged authorization in the context of the system.
 */
export type LeveragedAuthorizationTitle = string;
/**
 * A reference to the party that manages the leveraged system.
 */
export type PartyUuidField = string;
/**
 * The unique identifier for the user class.
 */
export type UserUniversallyUniqueIdentifier = string;
/**
 * A name given to the user, which may be used by a tool for display and navigation.
 */
export type UserTitle = string;
/**
 * A short common name, abbreviation, or acronym for the user.
 */
export type UserShortName = string;
/**
 * A summary of the user's purpose within the system.
 */
export type UserDescription = string;
/**
 * A reference to the roles served by the user.
 */
export type RoleIdentifierReference = string;
/**
 * A human readable name for the privilege.
 */
export type PrivilegeTitle = string;
/**
 * A summary of the privilege's purpose within the system.
 */
export type PrivilegeDescription = string;
/**
 * Describes a function performed for a given authorized privilege by this user class.
 */
export type FunctionsPerformed = string;
/**
 * The operational status.
 */
export type OperationalState = "under_development" | "operational" | "disposition" | "other";
/**
 * A globally unique identifier that can be used to reference this inventory item entry elsewhere in an OSCAL document. A UUID should be consistently used for a given resource across revisions of the document.
 */
export type InventoryItemUniversallyUniqueIdentifier = string;
/**
 * A summary of the inventory item stating its purpose within the system.
 */
export type InventoryItemDescription = string;
/**
 * Uniquely identifies this assessment plan. This UUID must be changed each time the content of the plan changes.
 */
export type AssessmentPlanUniversallyUniqueIdentifier = string;
/**
 * >A resolvable URL reference to the system security plan for the system being assessed.
 */
export type SystemSecurityPlanReference = string;
/**
 * A human_readable description of this control objective.
 */
export type ObjectiveDescription = string;
/**
 * Uniquely identifies this assessment activity. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. A UUID should be consistently used for a given included activity across revisions of the document.
 */
export type AssessmentActivityUniversallyUniqueIdentifier = string;
/**
 * The title for this included activity.
 */
export type IncludedActivityTitle = string;
/**
 * A human_readable description of this included activity.
 */
export type IncludedActivityDescription = string;
/**
 * Uniquely identifies a step. This UUID may be referenced elsewhere in an OSCAL document when referring to this step. A UUID should be consistently used for a given test step across revisions of the document.
 */
export type StepUniversallyUniqueIdentifier = string;
/**
 * The title for this step.
 */
export type StepTitle = string;
/**
 * A human_readable description of this step.
 */
export type StepDescription = string;
/**
 * A human_readable description of control objectives.
 */
export type ControlObjectiveDescription = string;
/**
 * A human_readable description of in_scope controls specified for assessment.
 */
export type AssessedControlsDescription = string;
/**
 * A human_readable description of this collection of control objectives.
 */
export type ControlObjectivesDescription = string;
/**
 * Points to an assessment objective.
 */
export type ObjectiveID = string;
/**
 * A unique identifier for a specific part instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same part across minor revisions of the document.
 */
export type AssessmentPartIdentifier = string;
/**
 * A textual label that uniquely identifies the part's semantic type.
 */
export type AssessmentPartName = string;
/**
 * A namespace qualifying the part's name. This allows different organizations to associate distinct semantics with the same name.
 */
export type AssessmentPartNamespace = string;
/**
 * A textual label that provides a sub_type or characterization of the part's name. This can be used to further distinguish or discriminate between the semantics of multiple parts of the same control with the same name and ns.
 */
export type AssessmentPartClass = string;
/**
 * A name given to the part, which may be used by a tool for display and navigation.
 */
export type AssessmentPartTitle = string;
/**
 * Permits multiple paragraphs, lists, tables etc.
 */
export type AssessmentPartText = string;
/**
 * Indicates the type of assessment subject, such as a component, inventory, item, location, or party represented by this selection statement.
 */
export type SubjectType = string;
/**
 * A human_readable description of the collection of subjects being included in this assessment.
 */
export type IncludeSubjectsDescription = string;
/**
 * A pointer to a component, inventory_item, location, party, user, or resource using it's UUID.
 */
export type SubjectUniversallyUniqueIdentifierReference = string;
/**
 * Used to indicate the type of object pointed to by the uuid_ref within a subject.
 */
export type SubjectUniversallyUniqueIdentifierReferenceType = string;
/**
 * Uniquely identifies this assessment Platform.
 */
export type AssessmentPlatformUniversallyUniqueIdentifier = string;
/**
 * The title or name for the assessment platform.
 */
export type AssessmentPlatformTitle = string;
/**
 * A reference to a component that is implemented as part of an inventory item.
 */
export type ComponentUniversallyUniqueIdentifierReference2 = string;
/**
 * Uniquely identifies this assessment task.
 */
export type TaskUniversallyUniqueIdentifier = string;
/**
 * The type of task.
 */
export type TaskType = string;
/**
 * The title for this task.
 */
export type TaskTitle = string;
/**
 * A human_readable description of this task.
 */
export type TaskDescription = string;
/**
 * The task must occur on or after the specified date.
 */
export type StartDateCondition = string;
/**
 * The task must occur on or before the specified date.
 */
export type EndDateCondition = string;
/**
 * The task must occur after the specified period has elapsed.
 */
export type Period = number;
/**
 * The unit of time for the period.
 */
export type TimeUnit = "seconds" | "minutes" | "hours" | "days" | "months" | "years";
/**
 * References a unique task by UUID.
 */
export type TaskUniversallyUniqueIdentifierReference = string;
/**
 * References an activity defined in the list of activities.
 */
export type ActivityUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies this assessment results file. This UUID must be changed each time the content of the results changes.
 */
export type AssessmentResultsUniversallyUniqueIdentifier = string;
/**
 * >A resolvable URL reference to the assessment plan governing the assessment activities.
 */
export type AssessmentPlanReference = string;
/**
 * Uniquely identifies this set of results. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given set of results across revisions.
 */
export type ResultsUniversallyUniqueIdentifier = string;
/**
 * The title for this set of results.
 */
export type ResultsTitle = string;
/**
 * A human_readable description of this set of test results.
 */
export type ResultsDescription = string;
/**
 * Date/time stamp identifying the start of the evidence collection reflected in these results.
 */
export type StartField = string;
/**
 * Date/time stamp identifying the end of the evidence collection reflected in these results. In a continuous motoring scenario, this may contain the same value as start if appropriate.
 */
export type EndField = string;
/**
 * Uniquely identifies an assessment event. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. A UUID should be consistently used for this schedule across revisions of the document.
 */
export type AssessmentLogEntryUniversallyUniqueIdentifier = string;
/**
 * The title for this event.
 */
export type ActionTitle = string;
/**
 * A human_readable description of this event.
 */
export type ActionDescription = string;
/**
 * A pointer to the party who is making the log entry.
 */
export type PartyUUIDReference = string;
/**
 * A point to the role_id of the role in which the party is making the log entry.
 */
export type ActorRole = RoleIdentifier;
/**
 * References a unique assessment subject placeholder defined by this task.
 */
export type AssessmentSubjectPlaceholderUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies this observation. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given observation across revisions.
 */
export type ObservationUniversallyUniqueIdentifier = string;
/**
 * The title for this observation.
 */
export type ObservationTitle = string;
/**
 * A human_readable description of this assessment observation.
 */
export type ObservationDescription = string;
/**
 * Identifies how the observation was made.
 */
export type ObservationMethod = string;
/**
 * Identifies the nature of the observation. More than one may be used to further qualify and enable filtering.
 */
export type ObservationType = string;
/**
 * The kind of actor.
 */
export type ActorType = "tool" | "assessment_platform" | "party";
/**
 * A pointer to the tool or person based on the associated type.
 */
export type ActorUniversallyUniqueIdentifierReference = string;
/**
 * For a party, this can optionally be used to specify the role the actor was performing.
 */
export type OriginActorRole = RoleIdentifier;
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
 * Date/time stamp identifying when the finding information was collected.
 */
export type CollectedField = string;
/**
 * Date/time identifying when the finding information is out_of_date and no longer valid. Typically used with continuous assessment scenarios.
 */
export type ExpiresField = string;
/**
 * Uniquely identifies this risk. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given risk across revisions.
 */
export type RiskUniversallyUniqueIdentifier = string;
/**
 * The title for this risk.
 */
export type RiskTitle = string;
/**
 * A human_readable summary of the identified risk, to include a statement of how the risk impacts the system.
 */
export type RiskDescription = string;
/**
 * An summary of impact for how the risk affects the system.
 */
export type RiskStatement = string;
/**
 * Describes the status of the associated risk.
 */
export type RiskStatus = string;
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
 * Uniquely identifies this mitigating factor. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given mitigating factor across revisions.
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
 * The date/time by which the risk must be resolved.
 */
export type RiskResolutionDeadline = string;
/**
 * Uniquely identifies this remediation. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given remediation across revisions.
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
 * Uniquely identifies this required asset. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given required asset across revisions.
 */
export type RequiredUniversallyUniqueIdentifier = string;
/**
 * The title for this required asset.
 */
export type TitleForRequiredAsset = string;
/**
 * A human_readable description of this required asset.
 */
export type DescriptionOfRequiredAsset = string;
/**
 * Uniquely identifies a risk log entry. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. A UUID should be consistently used for this schedule across revisions of the document.
 */
export type RiskLogEntryUniversallyUniqueIdentifier = string;
/**
 * The title for this risk log entry.
 */
export type Title = string;
/**
 * A human_readable description of what was done regarding the risk.
 */
export type RiskTaskDescription = string;
/**
 * Identifies the start date and time of the event.
 */
export type EventStart = string;
/**
 * Identifies the end date and time of the event. If the event is a point in time, the start and end will be the same date and time.
 */
export type EventEnd = string;
/**
 * References a unique risk response by UUID.
 */
export type ResponseUniversallyUniqueIdentifierReference = string;
/**
 * References an observation defined in the list of observations.
 */
export type ObservationUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies this finding. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. Once assigned, a UUID should be consistently used for a given finding across revisions.
 */
export type FindingUniversallyUniqueIdentifier = string;
/**
 * The title for this finding.
 */
export type FindingTitle = string;
/**
 * A human_readable description of this finding.
 */
export type FindingDescription = string;
/**
 * Identifies the type of the target.
 */
export type FindingTargetType = "statement_id" | "objective_id";
/**
 * Identifies the specific target qualified by the type.
 */
export type FindingTargetIdentifierReference = string;
/**
 * The title for this objective status.
 */
export type ObjectiveStatusTitle = string;
/**
 * A human_readable description of the assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export type ObjectiveStatusDescription = string;
/**
 * An indication as to whether the objective is satisfied or not.
 */
export type ObjectiveStatusState = "satisfied" | "not_satisfied";
/**
 * The reason the objective was given it's status.
 */
export type ObjectiveStatusReason = string;
/**
 * Identifies the implementation statement in the SSP to which this finding is related.
 */
export type ImplementationStatementUUID = string;
/**
 * References an risk defined in the list of risks.
 */
export type RiskUniversallyUniqueIdentifierReference = string;
/**
 * Uniquely identifies this POA&M. This UUID must be changed each time the content of the POA&M changes.
 */
export type POAMUniversallyUniqueIdentifier = string;
/**
 * Uniquely identifies the POA&M entry. This UUID may be referenced elsewhere in an OSCAL document when referring to this information. A UUID should be consistently used for a given POA&M item across revisions of the document.
 */
export type POAMItemUniversallyUniqueIdentifier = string;
/**
 * The title or name for this POA&M item .
 */
export type POAMItemTitle = string;
/**
 * A human_readable description of POA&M item.
 */
export type POAMItemDescription = string;
/**
 * References an observation defined in the list of observations.
 */
export type ObservationUniversallyUniqueIdentifierReference2 = string;

/**
 * A collection of controls.
 */
export interface Catalog {
    uuid: CatalogUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    params?: Parameter[];
    controls?: Control[];
    groups?: ControlGroup[];
    back_matter?: BackMatter;
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
    links?: Link[];
    roles?: Role[];
    locations?: Location[];
    parties?: Party[];
    responsible_parties?: ResponsibleParty[];
    remarks?: Remarks;
}
/**
 * An entry in a sequential list of revisions to the containing document in reverse chronological order (i.e., most recent previous revision first).
 */
export interface RevisionHistoryEntry {
    title?: DocumentRevisionTitle;
    published?: PublicationTimestamp;
    last_modified?: LastModifiedTimestamp;
    version?: DocumentVersion;
    oscal_version?: OSCALVersion;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * An attribute, characteristic, or quality of the containing object expressed as a namespace qualified name/value pair. The value of a property is a simple scalar value, which may be expressed as a list of values.
 */
export interface Property {
    name: PropertyName;
    uuid?: PropertyUniversallyUniqueIdentifier;
    ns?: PropertyNamespace;
    value: PropertyValue;
    class?: PropertyClass;
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
 * A document identifier qualified by an identifier scheme. A document identifier provides a globally unique identifier for a group of documents that are to be treated as different versions of the same document. If this element does not appear, or if the value of this element is empty, the value of "document_id" is equal to the value of the "uuid" flag of the top_level root element.
 */
export interface DocumentIdentifier {
    scheme?: DocumentIdentificationScheme;
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
    type?: TypeFlag;
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
    role_id: ResponsibleRole;
    party_uuids: PartyReference[];
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Parameters provide a mechanism for the dynamic assignment of value(s) in a control.
 */
export interface Parameter {
    id: ParameterIdentifier;
    class?: ParameterClass;
    depends_on?: DependsOn;
    props?: Property[];
    links?: Link[];
    label?: ParameterLabel;
    usage?: ParameterUsageDescription;
    constraints?: Constraint[];
    guidelines?: Guideline[];
    values?: ParameterValue[];
    select?: Selection;
    remarks?: Remarks;
}
/**
 * A formal or informal expression of a constraint or test
 */
export interface Constraint {
    description?: ConstraintDescription;
    tests?: ConstraintTest[];
}
/**
 * A test expression which is expected to be evaluated by a tool.
 */
export interface ConstraintTest {
    expression: ConstraintExpression;
    remarks?: Remarks;
}
/**
 * A prose statement that provides a recommendation for the use of a parameter.
 */
export interface Guideline {
    prose: GuidelineText;
}
/**
 * Presenting a choice among alternatives
 */
export interface Selection {
    how_many?: ParameterCardinality;
    choice?: Choice[];
}
/**
 * A structured information object representing a security or privacy control. Each security or privacy control within the Catalog is defined by a distinct control instance.
 */
export interface Control {
    id: ControlIdentifier;
    class?: ControlClass;
    title: ControlTitle;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
    controls?: Control[];
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
    prose?: PartText;
    parts?: Part[];
    links?: Link[];
}
/**
 * A group of controls, or of groups of controls.
 */
export interface ControlGroup {
    id?: GroupIdentifier;
    class?: GroupClass;
    title: GroupTitle;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
    groups?: ControlGroup[];
    controls?: Control[];
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
    resources?: Resource[];
}
/**
 * A resource associated with content in the containing document. A resource may be directly included in the document base64 encoded or may point to one or more equivalent internet resources.
 */
export interface Resource {
    uuid: ResourceUniversallyUniqueIdentifier;
    title?: ResourceTitle;
    description?: ResourceDescription;
    props?: Property[];
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
    links?: Link[];
}
/**
 * A pointer to an external resource with an optional hash for verification and change detection.
 */
export interface ResourceLink {
    href: ResourceHypertextReference;
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
/**
 * Each OSCAL profile is defined by a Profile element
 */
export interface Profile {
    uuid: ProfileUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    imports: ImportResource[];
    merge?: MergeControls;
    modify?: ModifyControls;
    back_matter?: BackMatter;
}
/**
 * The import designates a catalog, profile, or other resource to be included (referenced and potentially modified) by this profile. The import also identifies which controls to select using the include_all, include_controls, and exclude_controls directives.
 */
export interface ImportResource {
    href: CatalogOrProfileReference;
    include_all?: InsertAll;
    include_controls?: Call[];
    exclude_controls?: Call[];
}
/**
 * Insert all controls from the imported catalog or profile resources identified in the import directive.
 */
export interface InsertAll { }
/**
 * Used to select a control for inclusion/exclusion based on one or more control identifiers. A set of statement identifiers can be used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
    control_id: ControlIdentifierReference;
    statement_ids?: IncludeSpecificStatements[];
}
/**
 * A Merge element merges controls in resolution.
 */
export interface MergeControls {
    combine?: CombinationRule;
    as_is?: AsIs;
    custom?: CustomGrouping;
}
/**
 * A Combine element defines whether and how to combine multiple (competing) versions of the same control
 */
export interface CombinationRule {
    method?: CombinationMethod;
}
/**
 * A Custom element frames a structure for embedding represented controls in resolution.
 */
export interface CustomGrouping {
    groups?: ControlGroup[];
    insert_controls?: SelectControls[];
}
/**
 * A group of (selected) controls or of groups of controls
 */
export interface SelectedControlGroup extends ControlGroup {
    id?: GroupIdentifier;
    class?: GroupClass;
    title: GroupTitle;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
    groups?: ControlGroup[];
    insert_controls?: SelectControls[];
}
/**
 * Specifies which controls to use in the containing context.
 */
export interface SelectControls {
    order?: Order;
    include_all?: InsertAll;
    include_controls?: Call[];
    exclude_controls?: Call[];
}
/**
 * Call a control by its ID
 */
export interface Call {
    with_child_controls?: IncludeContainedControlsWithControl;
    with_ids?: MatchControlsByIdentifier[];
    matching?: MatchControlsByPattern[];
}
/**
 * Select controls by (regular expression) match on ID
 */
export interface MatchControlsByPattern {
    pattern?: Pattern;
}
/**
 * Set parameters or amend controls in resolution
 */
export interface ModifyControls {
    set_parameters?: ParameterSetting[];
    alters?: Alteration[];
}
/**
 * A parameter setting, to be propagated to points of insertion
 */
export interface ParameterSetting {
    param_id: ParameterID;
    class?: ParameterClass;
    depends_on?: DependsOn;
    props?: Property[];
    links?: Link[];
    label?: ParameterLabel;
    usage?: ParameterUsageDescription;
    constraints?: Constraint[];
    guidelines?: Guideline[];
    values?: ParameterValue[];
    select?: Selection;
}
/**
 * An Alter element specifies changes to be made to an included control when a profile is resolved.
 */
export interface Alteration {
    control_id?: ControlIdentifierReference;
    removes?: Removal[];
    adds?: Addition[];
}
/**
 * Specifies objects to be removed from a control based on specific aspects of the object that must all match.
 */
export interface Removal {
    by_name?: ReferenceByAssignedName;
    by_class?: ReferenceByClass;
    by_id?: ReferenceByID;
    by_item_name?: ItemNameReference;
    by_ns?: ItemNamespaceReference;
}
/**
 * Specifies contents to be added into controls, in resolution
 */
export interface Addition {
    position?: Position;
    by_id?: ReferenceByID;
    title?: TitleChange;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
}
/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
    uuid: ComponentDefinitionUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_component_definitions?: ImportComponentDefinition[];
    components?: DefinedComponent[];
    capabilities?: Capability[];
    back_matter?: BackMatter;
}
/**
 * Loads a component definition from another resource.
 */
export interface ImportComponentDefinition {
    href: HyperlinkReference;
}
/**
 * A defined component that can be part of an implemented system.
 */
export interface DefinedComponent extends SystemComponent {
    control_implementations?: ControlImplementation[];
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
 * Describes how the system satisfies a set of controls.
 */
export interface ControlImplementation {
    description: ControlImplementationDescription;
    set_parameters?: SetParameterValue[];
    implemented_requirements: ControlBasedRequirement[];
}
/**
 * Identifies the parameter that will be set by the enclosed value.
 */
export interface SetParameterValue {
    param_id: ParameterID;
    values: ParameterValue[];
    remarks?: Remarks;
}
/**
 * Describes how the system satisfies an individual control.
 */
export interface ControlBasedRequirement {
    uuid: ControlRequirementUniversallyUniqueIdentifier;
    control_id: ControlIdentifierReference;
    props?: Property[];
    links?: Link[];
    set_parameters?: SetParameterValue[];
    responsible_roles?: ResponsibleRole[];
    statements?: SpecificControlStatement[];
    by_components?: ComponentControlImplementation[];
    remarks?: Remarks;
}
/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificControlStatement {
    statement_id: ControlStatementReference;
    uuid: ControlStatementReferenceUniversallyUniqueIdentifier;
    props?: Property[];
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
    by_components?: ComponentControlImplementation[];
    remarks?: Remarks;
}
/**
 * Defines how the referenced component implements a set of controls.
 */
export interface ComponentControlImplementation {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    uuid: ByComponentUniversallyUniqueIdentifier;
    description: ControlImplementationDescription;
    props?: Property[];
    links?: Link[];
    set_parameters?: SetParameterValue[];
    implementation_status?: ImplementationStatus;
    export?: Export;
    inherited?: InheritedControlImplementation[];
    satisfied?: SatisfiedControlImplementationResponsibility[];
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * Indicates the degree to which the a given control is implemented.
 */
export interface ImplementationStatus {
    state: ImplementationState;
    remarks?: Remarks;
}
/**
 * Identifies content intended for external consumption, such as with leveraged organizations.
 */
export interface Export {
    description?: ControlImplementationExportDescription;
    props?: Property[];
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
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * Describes a control implementation responsibility imposed on a leveraging system.
 */
export interface ControlImplementationResponsibility {
    uuid: ResponsibilityUniversallyUniqueIdentifier;
    provided_uuid?: ProvidedUUID;
    description: ControlImplementationResponsibilityDescription;
    props?: Property[];
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
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
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
}
/**
 * Describes how this system satisfies a responsibility imposed by a leveraged system.
 */
export interface SatisfiedControlImplementationResponsibility {
    uuid: SatisfiedUniversallyUniqueIdentifier;
    responsibility_uuid?: ResponsibilityUniqueIdentifier;
    description: SatisfiedControlImplementationResponsibilityDescription;
    props?: Property[];
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * A grouping of other components and/or capabilities.
 */
export interface Capability {
    uuid: CapabilityIdentifier;
    name: CapabilityName;
    description: CapabilityDescription;
    props?: Property[];
    links?: Link[];
    incorporates_components?: IncorporatesComponent[];
    control_implementations?: ControlImplementation[];
    remarks?: Remarks;
}
/**
 * TBD
 */
export interface IncorporatesComponent {
    component_uuid: ComponentReference;
    description: ComponentDescription;
}
/**
 * A system security plan, such as those described in NIST SP 800_18
 */
export interface SystemSecurityPlan {
    uuid: SystemSecurityPlanUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_profile: ImportProfile;
    system_characteristics: SystemCharacteristics;
    system_implementation: SystemImplementation;
    control_implementation: ControlImplementation;
    back_matter?: BackMatter;
}
/**
 * Used to import the OSCAL profile representing the system's control baseline.
 */
export interface ImportProfile {
    href: ProfileReference;
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
    links?: Link[];
    date_authorized?: SystemAuthorizationDate;
    security_sensitivity_level: SecuritySensitivityLevel;
    system_information: SystemInformation;
    security_impact_level: SecurityImpactLevel;
    status: Status;
    authorization_boundary: AuthorizationBoundary;
    network_architecture?: NetworkArchitecture;
    data_flow?: DataFlow;
    responsible_parties?: ResponsibleParty[];
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
    information_type_ids?: InformationTypeSystematizedIdentifier[];
}
/**
 * The expected level of impact resulting from the unauthorized disclosure of the described information.
 */
export interface ConfidentialityImpactLevel {
    props?: Property[];
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
    state: OperationalState;
    remarks?: Remarks;
}
/**
 * A description of this system's authorization boundary, optionally supplemented by diagrams that illustrate the authorization boundary.
 */
export interface AuthorizationBoundary {
    description: AuthorizationBoundaryDescription;
    props?: Property[];
    links?: Link[];
    diagrams?: Diagram[];
    remarks?: RemarksField;
}
/**
 * A graphic that provides a visual representation the system, or some aspect of it.
 */
export interface Diagram {
    uuid: DiagramID;
    description?: DiagramDescription;
    props?: Property[];
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
    links?: Link[];
    diagrams?: Diagram[];
    remarks?: Remarks;
}
/**
 * A description of the logical flow of information within the system and across its boundaries, optionally supplemented by diagrams that illustrate these flows.
 */
export interface DataFlow {
    description: DataFlowDescription;
    props?: Property[];
    links?: Link[];
    diagrams?: Diagram[];
    remarks?: Remarks;
}
/**
 * Provides information as to how the system is implemented.
 */
export interface SystemImplementation {
    props?: Property[];
    links?: Link[];
    leveraged_authorizations?: LeveragedAuthorization[];
    users: SystemUser[];
    components: SystemComponent[];
    inventory_items?: InventoryItem[];
    remarks?: Remarks;
}
/**
 * A description of another authorized system from which this system inherits capabilities that satisfy security requirements. Another term for this concept is a common control provider.
 */
export interface LeveragedAuthorization {
    uuid: LeveragedAuthorizationUniversallyUniqueIdentifier;
    title: LeveragedAuthorizationTitle;
    props?: Property[];
    links?: Link[];
    party_uuid: PartyUuidField;
    date_authorized: SystemAuthorizationDate;
    remarks?: Remarks;
}
/**
 * A type of user that interacts with the system based on an associated role.
 */
export interface SystemUser {
    uuid: UserUniversallyUniqueIdentifier;
    title?: UserTitle;
    short_name?: UserShortName;
    description?: UserDescription;
    props?: Property[];
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
export interface SystemComponent {
    uuid: ComponentIdentifier;
    type: ComponentType;
    title: ComponentTitle;
    description: ComponentDescription;
    purpose?: Purpose;
    props?: Property[];
    links?: Link[];
    status: OperationalStatus;
    responsible_roles?: ResponsibleRole[];
    protocols?: ServiceProtocolInformation[];
    remarks?: Remarks;
}
/**
 * Describes the operational status of the system component.
 */
export interface OperationalStatus {
    state: OperationalState;
    remarks?: Remarks;
}
/**
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
    uuid: InventoryItemUniversallyUniqueIdentifier;
    description: InventoryItemDescription;
    props?: Property[];
    links?: Link[];
    responsible_parties?: ResponsibleParty[];
    implemented_components?: ImplementedComponent[];
    remarks?: Remarks;
}
/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    responsible_parties?: ResponsibleParty[];
    remarks?: Remarks;
}
/**
 * An assessment plan, such as those provided by a FedRAMP assessor.
 */
export interface SecurityAssessmentPlan {
    uuid: AssessmentPlanUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ssp: ImportSystemSecurityPlan;
    local_definitions?: AssessmentPlanLocalDefinitions;
    terms_and_conditions?: AssessmentPlanTermsAndConditions;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    assessment_subjects?: SubjectOfAssessment[];
    assessment_assets?: AssessmentAssets;
    tasks?: Task[];
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
 * Used to define data objects that are used in the assessment results, that do not appear in the referenced SSP.
 */
export interface AssessmentResultsLocalDefinitions {
    components?: SystemComponent[];
    inventory_items?: InventoryItem[];
    users?: SystemUser[];
    objectives_and_methods?: AssessmentSpecificControlObjective[];
    activities?: Activity[];
    remarks?: Remarks;
}
/**
 * A local definition of a control objective for this assessment. Uses catalog syntax for control objective and assessment actions.
 */
export interface AssessmentSpecificControlObjective {
    control_id: ControlIdentifierReference;
    description?: ObjectiveDescription;
    props?: Property[];
    links?: Link[];
    parts: Part[];
    remarks?: Remarks;
}
/**
 * Identifies an assessment or related process that can be performed. In the assessment plan, this is an intended activity which may be associated with an assessment task. In the assessment results, this an activity that was actually performed as part of an assessment.
 */
export interface Activity {
    uuid: AssessmentActivityUniversallyUniqueIdentifier;
    title?: IncludedActivityTitle;
    description: IncludedActivityDescription;
    props?: Property[];
    links?: Link[];
    steps?: Step[];
    related_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * Identifies an individual step in a series of steps related to an activity, such as an assessment test or examination procedure.
 */
export interface Step {
    uuid: StepUniversallyUniqueIdentifier;
    title?: StepTitle;
    description: StepDescription;
    props?: Property[];
    links?: Link[];
    reviewed_controls?: ReviewedControlsAndControlObjectives;
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
    description?: ControlObjectiveDescription;
    props?: Property[];
    links?: Link[];
    control_selections: AssessedControls[];
    control_objective_selections?: ReferencedControlObjectives[];
    remarks?: Remarks;
}
/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned controls. In the assessment results, these are the actual controls, and reflects any changes from the plan.
 */
export interface AssessedControls {
    description?: AssessedControlsDescription;
    props?: Property[];
    links?: Link[];
    include_all?: All;
    include_controls?: SelectControl[];
    exclude_controls?: SelectControl[];
    remarks?: Remarks;
}
/**
 * A key word to indicate all.
 */
export interface All { }
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferencedControlObjectives {
    description?: ControlObjectivesDescription;
    props?: Property[];
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
 * Used to define various terms and conditions under which an assessment, described by the plan, can be performed. Each child part defines a different type of term or condition.
 */
export interface AssessmentPlanTermsAndConditions {
    parts?: AssessmentPart[];
}
/**
 * A partition of an assessment plan or results or a child of another part.
 */
export interface AssessmentPart {
    uuid?: AssessmentPartIdentifier;
    name: AssessmentPartName;
    ns?: AssessmentPartNamespace;
    class?: AssessmentPartClass;
    title?: AssessmentPartTitle;
    props?: Property[];
    prose?: AssessmentPartText;
    parts?: AssessmentPart[];
    links?: Link[];
}
/**
 * Identifies system elements being assessed, such as components, inventory items, and locations. In the assessment plan, this identifies a planned assessment subject. In the assessment results this is an actual assessment subject, and reflects any changes from the plan. exactly what will be the focus of this assessment. Any subjects not identified in this way are out_of_scope.
 */
export interface SubjectOfAssessment {
    type: SubjectType;
    description?: IncludeSubjectsDescription;
    props?: Property[];
    links?: Link[];
    include_all?: All;
    include_subjects?: SelectAssessmentSubject[];
    exclude_subjects?: SelectAssessmentSubject[];
    remarks?: Remarks;
}
/**
 * Identifies a set of assessment subjects to include/exclude by UUID.
 */
export interface SelectAssessmentSubject {
    subject_uuid: SubjectUniversallyUniqueIdentifierReference;
    type: SubjectUniversallyUniqueIdentifierReferenceType;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Identifies the assets used to perform this assessment, such as the assessment team, scanning tools, and assumptions.
 */
export interface AssessmentAssets {
    components?: SystemComponent[];
    assessment_platforms: AssessmentPlatform[];
}
/**
 * Used to represent the toolset used to perform aspects of the assessment.
 */
export interface AssessmentPlatform {
    uuid: AssessmentPlatformUniversallyUniqueIdentifier;
    title?: AssessmentPlatformTitle;
    props?: Property[];
    links?: Link[];
    uses_components?: UsesComponent[];
    remarks?: Remarks;
}
/**
 * The set of components that are used by the assessment platform.
 */
export interface UsesComponent {
    component_uuid: ComponentUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    responsible_parties?: ResponsibleParty[];
    remarks?: Remarks;
}
/**
 * Represents a scheduled event or milestone, which may be associated with a series of assessment actions.
 */
export interface Task {
    uuid: TaskUniversallyUniqueIdentifier;
    type: TaskType;
    title: TaskTitle;
    description?: TaskDescription;
    props?: Property[];
    links?: Link[];
    timing?: EventTiming;
    dependencies?: TaskDependency[];
    tasks?: Task[];
    associated_activities?: AssociatedActivity[];
    subjects?: SubjectOfAssessment[];
    responsible_roles?: ResponsibleRole[];
    remarks?: Remarks;
}
/**
 * The timing under which the task is intended to occur.
 */
export interface EventTiming {
    on_date?: OnDateCondition;
    within_date_range?: OnDateRangeCondition;
    at_frequency?: FrequencyCondition;
}
/**
 * The task is intended to occur on the specified date.
 */
export interface OnDateCondition {
    date: IsoDate;
}
/**
 * The task is intended to occur within the specified date range.
 */
export interface OnDateRangeCondition {
    start: StartDateCondition;
    end: EndDateCondition;
}
/**
 * The task is intended to occur at the specified frequency.
 */
export interface FrequencyCondition {
    period: Period;
    unit: TimeUnit;
}
/**
 * Used to indicate that a task is dependent on another task.
 */
export interface TaskDependency {
    task_uuid: TaskUniversallyUniqueIdentifierReference;
    remarks?: Remarks;
}
/**
 * Identifies an individual activity to be performed as part of a task.
 */
export interface AssociatedActivity {
    activity_uuid: ActivityUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    responsible_roles?: ResponsibleRole[];
    subjects: SubjectOfAssessment[];
    remarks?: Remarks;
}
/**
 * Security assessment results, such as those provided by a FedRAMP assessor in the FedRAMP Security Assessment Report.
 */
export interface SecurityAssessmentResults {
    uuid: AssessmentResultsUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ap: ImportAssessmentPlan;
    local_definitions?: SecurityAssessmentResultsLocalDefinitions;
    results: AssessmentResult[];
    back_matter?: BackMatter;
}
/**
 * Used by assessment_results to import information about the original plan for assessing the system.
 */
export interface ImportAssessmentPlan {
    href: AssessmentPlanReference;
    remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SecurityAssessmentResultsLocalDefinitions {
    objectives_and_methods?: AssessmentSpecificControlObjective[];
    activities?: Activity[];
    remarks?: Remarks;
}
/**
 * Used by the assessment results and POA&M. In the assessment results, this identifies all of the assessment observations and findings, initial and residual risks, deviations, and disposition. In the POA&M, this identifies initial and residual risks, deviations, and disposition.
 */
export interface AssessmentResult {
    uuid: ResultsUniversallyUniqueIdentifier;
    title: ResultsTitle;
    description: ResultsDescription;
    start: StartField;
    end?: EndField;
    prop?: Property[];
    links?: Link[];
    local_definitions?: AssessmentResultsLocalDefinitions;
    reviewed_controls: ReviewedControlsAndControlObjectives;
    attestations?: AttestationStatements[];
    assessment_log?: AssessmentLog;
    observations?: Observation[];
    risks?: IdentifiedRisk[];
    findings?: Finding[];
    remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface AssessmentPlanLocalDefinitions {
    components?: SystemComponent[];
    inventory_items?: InventoryItem[];
    users?: SystemUser[];
    assessment_assets?: AssessmentAssets;
    tasks?: Task[];
}
/**
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
    responsible_parties?: ResponsibleParty[];
    parts: AssessmentPart[];
}
/**
 * A log of all assessment_related actions taken.
 */
export interface AssessmentLog {
    entries: AssessmentLogEntry[];
}
/**
 * Identifies the result of an action and/or task that occurred as part of executing an assessment plan or an assessment event that occurred in producing the assessment results.
 */
export interface AssessmentLogEntry {
    uuid: AssessmentLogEntryUniversallyUniqueIdentifier;
    title?: ActionTitle;
    description?: ActionDescription;
    start: Start;
    end?: End;
    props?: Property[];
    links?: Link[];
    logged_by?: LoggedBy[];
    related_tasks?: TaskReference[];
    remarks?: Remarks;
}
/**
 * Used to indicate who created a log entry in what role.
 */
export interface LoggedBy {
    party_uuid: PartyUUIDReference;
    role_id?: ActorRole;
}
/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
    task_uuid: TaskUniversallyUniqueIdentifierReference;
    props?: Property[];
    links?: Link[];
    responsible_parties?: ResponsibleParty[];
    subjects?: SubjectOfAssessment[];
    identified_subject?: IdentifiedSubject;
    remarks?: Remarks;
}
/**
 * Used to detail assessment subjects that were identfied by this task.
 */
export interface IdentifiedSubject {
    subject_placeholder_uuid: AssessmentSubjectPlaceholderUniversallyUniqueIdentifierReference;
    subjects: SubjectOfAssessment[];
}
/**
 * Describes an individual observation.
 */
export interface Observation {
    uuid: ObservationUniversallyUniqueIdentifier;
    title?: ObservationTitle;
    description: ObservationDescription;
    props?: Property[];
    links?: Link[];
    methods: ObservationMethod[];
    types?: ObservationType[];
    origins?: Origin[];
    subjects?: IdentifiesTheSubject[];
    relevant_evidence?: RelevantEvidence[];
    collected: CollectedField;
    expires?: ExpiresField;
    remarks?: Remarks;
}
/**
 * Identifies the source of the finding, such as a tool, interviewed person, or activity.
 */
export interface Origin {
    actors: OriginatingActor[];
    related_tasks?: TaskReference[];
}
/**
 * The actor that produces an observation, a finding, or a risk. One or more actor type can be used to specify a person that is using a tool.
 */
export interface OriginatingActor {
    type: ActorType;
    actor_uuid: ActorUniversallyUniqueIdentifierReference;
    role_id?: OriginActorRole;
    props?: Property[];
    links?: Link[];
}
/**
 * A pointer to a resource based on its universally unique identifier (UUID). Use type to indicate whether the identified resource is a component, inventory item, location, user, or something else.
 */
export interface IdentifiesTheSubject {
    subject_uuid: SubjectUniversallyUniqueIdentifierReference;
    type: SubjectUniversallyUniqueIdentifierReferenceType;
    title?: SubjectReferenceTitle;
    props?: Property[];
    links?: Link[];
    remarks?: Remarks;
}
/**
 * Links this observation to relevant evidence.
 */
export interface RelevantEvidence {
    href?: RelevantEvidenceReference;
    description: RelevantEvidenceDescription;
    props?: Property[];
    links?: Link[];
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
    status: RiskStatus;
    origins?: Origin[];
    threat_ids?: ThreatID[];
    characterizations?: Characterization[];
    mitigating_factors?: MitigatingFactor[];
    deadline?: RiskResolutionDeadline;
    remediations?: RiskResponse[]
    risk_log?: RiskLog;
    related_observations?: RelatedObservation[];
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
    facets: Facet[];
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
 * A log of all risk_related tasks taken.
 */
export interface RiskLog {
    entries: RiskLogEntry[];
}
/**
 * Identifies an individual risk response that occurred as part of managing an identified risk.
 */
export interface RiskLogEntry {
    uuid: RiskLogEntryUniversallyUniqueIdentifier;
    title?: Title;
    description?: RiskTaskDescription;
    start: EventStart;
    end?: EventEnd;
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
    related_tasks?: TaskReference[];
    remarks?: Remarks;
}
/**
 * Relates the finding to a set of referenced observations that were used to determine the finding.
 */
export interface RelatedObservation {
    observation_uuid: ObservationUniversallyUniqueIdentifierReference;
}
/**
 * Describes an individual finding.
 */
export interface Finding {
    uuid: FindingUniversallyUniqueIdentifier;
    title: FindingTitle;
    description: FindingDescription;
    props?: Property[];
    links?: Link[];
    origins?: Origin[];
    target: ObjectiveStatus;
    implementation_statement_uuid?: ImplementationStatementUUID;
    related_observations?: RelatedObservation[];
    related_risks?: AssociatedRisk[];
    remarks?: Remarks;
}
export interface BusinessFunction {
    uuid: UniversallyUniqueIdentifier
    title: string,
    description: string
    links: Link[]
}
export interface OrganizationMissionStatement {
    uuid: UniversallyUniqueIdentifier
    mission: string,
    business_functions: BusinessFunction[]
}
/**
 * Acceptable values for @system_component.type
 */
export const SystemComponentTypes =
    [
        "subnet",
        "leveraged-system",
        "interconnection",
        "software",
        "hardware",
        "service",
        "policy",
        "physical",
        "process-procedure",
        "plan",
        "guidance",
        "standard",
        "validation"]
/**
 * Captures an assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export interface ObjectiveStatus {
    type: FindingTargetType;
    target_id: FindingTargetIdentifierReference;
    title?: ObjectiveStatusTitle;
    description?: ObjectiveStatusDescription;
    props?: Property[];
    links?: Link[];
    status: ObjectiveOperationalStatus;
    implementation_status?: ImplementationStatus;
    remarks?: Remarks;
}
/**
 * A determination of if the objective is satisfied or not within a given system.
 */
export interface ObjectiveOperationalStatus {
    state: ObjectiveStatusState;
    reason?: ObjectiveStatusReason;
    remarks?: Remarks;
}
/**
 * Relates the finding to a set of referenced risks that were used to determine the finding.
 */
export interface AssociatedRisk {
    risk_uuid: RiskUniversallyUniqueIdentifierReference;
}
/**
 * A plan of action and milestones which identifies initial and residual risks, deviations, and disposition, such as those required by FedRAMP.
 */
export interface PlanOfActionAndMilestones {
    uuid: POAMUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ssp?: ImportSystemSecurityPlan;
    system_id?: SystemIdentification;
    local_definitions?: PlanOfActionAndMilestonesLocalDefinitions;
    observations?: Observation[];
    risks?: IdentifiedRisk[];
    items?: POAMItem[];
    back_matter?: BackMatter;
}
/**
 * Allows components, and inventory_items to be defined within the POA&M for circumstances where no OSCAL_based SSP exists, or is not delivered with the POA&M.
 */
export interface PlanOfActionAndMilestonesLocalDefinitions {
    components?: SystemComponent[];
    inventory_items?: InventoryItem[];
    remarks?: Remarks;
}
/**
 * Describes an individual POA&M item.
 */
export interface POAMItem {
    uuid?: POAMItemUniversallyUniqueIdentifier;
    title: POAMItemTitle;
    description: POAMItemDescription;
    props?: Property[];
    links?: Link[];
    origins?: Origin[];
    related_observations?: RelatedObservation[];
    related_risks?: AssociatedRisk[];
    remarks?: Remarks;
}
/**
 * Relates the poam_item to a set of referenced observations that were used to determine the finding.
 */
export interface PoamRelatedObservation extends RelatedObservation {
}

