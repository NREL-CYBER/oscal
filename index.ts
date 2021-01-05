/**
* Oscal Package Types
*/

/**
 * A globally unique identifier that can be used to reference this satisfied entry elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
 */
export type SatisfiedUniversallyUniqueIdentifier = string;
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
 * A textual label that uniquely identifies a specific attribute, characteristic, or quality of the property's containing object.
 */
export type PropertyName = string;
/**
 * A namespace qualifying the property's name. This allows different organizations to associate distinct semantics with the same name.
 */
export type PropertyNamespace = string;
/**
 * A textual label that provides a sub_type or characterization of the property's name. This can be used to further distinguish or discriminate between the semantics of multiple properties of the same object with the same name and ns.
 */
export type PropertyClass = string;
/**
 * A textual label that uniquely identifies a specific attribute, characteristic, or quality of the annotated property's containing object.
 */
export type AnnotatedPropertyName = string;
/**
 * A namespace qualifying the annotated property's name. This allows different organizations to associate distinct semantics with the same name.
 */
export type AnnotatedPropertyNamespace = string;
/**
 * Indicates the value of the attribute, characteristic, or quality.
 */
export type AnnotatedPropertyValue = string;
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
 * Qualifies the kind of document identifier.
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
 * References a party defined in metadata.
 */
export type PartyReference = string;
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
export type InformationTypeSystemizedIdentifier = string;
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
export type SystemState = "operational" | "under_development" | "under_major_modification" | "disposition" | "other";
/**
 * A summary of the system's authorization boundary.
 */
export type AuthorizationBoundaryDescription = string;
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
 * A reference to the party that manages the leveraged system.
 */
export type PartyUuidField = string;
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
 * A category describing the purpose of the component.
 */
export type ComponentType = string;
/**
 * A human readable name for the system component.
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
 * The operational status.
 */
export type OperationalState = "under_development" | "operational" | "disposition" | "other";
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
 * A summary of the inventory item stating its purpose within the system.
 */
export type InventoryItemDescription = string;
/**
 * A reference to a component that is implemented as part of an inventory item.
 */
export type ComponentUniversallyUniqueIdentifierReference = string;
/**
 * A statement describing important things to know about how this set of control satisfaction documentation is approached.
 */
export type ControlImplementationDescription = string;
/**
 * A reference to a control identifier.
 */
export type ControlIdentifierReference = string;
/**
 * A parameter value or set of values.
 */
export type ParameterValue = string;
/**
 * An implementation statement that describes how a control or a control statement is implemented within the referenced system component.
 */
export type ControlImplementationMethodDescription = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be available to another system leveraging this system.
 */
export type ControlImplementationExportDescription = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that can be provided to another system leveraging this system.
 */
export type ProvidedControlImplementationDescription = string;
/**
 * An implementation statement that describes the aspects of the control or control statement implementation that a leveraging system must implement to satisfy the control provided by a leveraged system.
 */
export type ControlImplementationResponsibilityDescription = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is inheriting from a leveraged system.
 */
export type InheritedControlImplementationDescription = string;
/**
 * Identifies a 'provided' assembly associated with this assembly.
 */
export type ProvidedUUID = string;
/**
 * An implementation statement that describes the aspects of a control or control statement implementation that a leveraging system is implementing based on a requirement from a leveraged system.
 */
export type SatisfiedControlImplementationResponsibilityDescription = string;
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
 * Method by which a hash is derived
 */
export type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export type FileName = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export type AssessmentPlanReference = string;
/**
 * A human_readable description of this control objective.
 */
export type ObjectiveDescription = string;
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
 * The title for this included activity.
 */
export type IncludedActivityTitle = string;
/**
 * A human_readable description of this included activity.
 */
export type IncludedActivityDescription = string;
/**
 * The title for this action.
 */
export type ActionTitle = string;
/**
 * A human_readable description of this action.
 */
export type ActionDescription = string;
/**
 * A human_readable description of control objectives.
 */
export type ControlObjectiveDescription = string;
/**
 * A human_readable description of in_scope controls specified for assessment.
 */
export type AssessedControlsDescription = string;
/**
 * A key word to indicate all.
 */
export type All = string;
/**
 * Used to constrain the selection to only specificly identified statements.
 */
export type IncludeSpecificStatements = string;
/**
 * A human_readable description of this collection of control objectives.
 */
export type ControlOjectivesDescription = string;
/**
 * Points to an assessment objective.
 */
export type ObjectiveID = string;
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
 * The title for this event.
 */
export type EventTitle = string;
/**
 * A human_readable description of this event.
 */
export type EventDescription = string;
/**
 * The event must occur on or after the specified date.
 */
export type StartDateCondition = string;
/**
 * The event must occur on or before the specified date.
 */
export type EndDateCondition = string;
/**
 * The event must occur after the specified period has elapsed.
 */
export type Period = number;
/**
 * The unit of time for the period.
 */
export type TimeUnit = "seconds" | "minutes" | "hours" | "days" | "months" | "years";
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
export type UUIDReference = string;
/**
 * References an activity defined in the list of activities.
 */
export type ActivityUniversallyUniqueIdentifierReference = string;
/**
 * A human_readable description of intent of this assessment subject placeholder.
 */
export type AssessmentSubjectPlaceholderDescription = string;
/**
 * Uniquely identifies an assessment activity to be performed as part of the event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export type ActivityInstanceUniversallyUniqueIdentifier = string;
/**
 * The title or name for the assessment platform.
 */
export type AssessmentPlatformTitle = string;
/**
 * A pointer to the party who is making the log entry.
 */
export type PartyUUIDReference = string;
/**
 * A point to the role_id of the role in which the party is making the log entry.
 */
export type ActorRole = string;
/**
 * References a unique action by UUID.
 */
export type ActionUniversallyUniqueIdentifierReference = string;
/**
 * References a unique task by UUID.
 */
export type TaskUniversallyUniqueIdentifierReference = string;
/**
 * The title for this observation.
 */
export type ObservationTitle = string;
/**
 * A human_readable description of this assessment observation.
 */
export type ObservatonDescription = string;
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
export type ActorUUIDReference = string;
/**
 * Used to indicate the type of object pointed to by the uuid_ref.
 */
export type UniversallyUniqueIdentifierReferenceType = string;
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
 * The title for this risk.
 */
export type RiskTitle = string;
/**
 * A human_readable summary of what was identified regarding the risk.
 */
export type RiskDescription = string;
/**
 * An summary of impact for how the risk affects the system.
 */
export type RiskStatement = string;
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
 * The title for this required asset.
 */
export type TitleForRequiredAsset = string;
/**
 * A human_readable description of this required asset.
 */
export type DescriptionOfRequiredAsset = string;
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
export type TaskStartDate = string;
/**
 * The task must occur on or before the specified date.
 */
export type TaskEndDate = string;
/**
 * Describes the status of the associated risk.
 */
export type RiskStatus = string;
/**
 * References a unique risk response by UUID.
 */
export type ResponseUniversallyUniqueIdentifierReference = string;
/**
 * References an observation defined in the list of observations.
 */
export type ObservationUniversallyUniqueIdentifierReference = string;
/**
 * The title for this finding.
 */
export type FindingTitle = string;
/**
 * A human_readable description of this finding.
 */
export type FindingDescription = string;
/**
 * Date/time stamp identifying when the finding information was collected.
 */
export type CollectedField = string;
/**
 * Date/time identifying when the finding information is out_of_date and no longer valid. Typically used with continuous assessment scenarios.
 */
export type ExpiresField = string;
/**
 * The title for this objective status.
 */
export type ObjectiveStatusTitle = string;
/**
 * A human_readable description of the assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export type ObjectiveStatusDescription = string;
/**
 * A brief indication as to whether the objective is satisfied or not within a given system.
 */
export type ImplementationStatus = "satisfied" | "not_satisfied";
/**
 * Identifies the implementation statement in the SSP to which this finding is related.
 */
export type ImplementationStatementUUID = string;
/**
 * References an risk defined in the list of risks.
 */
export type RiskUniversallyUniqueIdentifierReference = string;
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
 * A short, placeholder name for the parameter, which can be used as a subsitute for a value if no value is assigned.
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
 * Prose permits multiple paragraphs, lists, tables etc.
 */
export type GuidelineText = string;
/**
 * Describes the number of selections that must occur.
 */
export type ParameterCardinality = string;
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
 * Value of the 'id' flag on a target control
 */
export type ControlID = string;
/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
export type IncludeContainedControlsWithControl = "yes" | "no";
/**
 * A regular expression matching the IDs of one or more controls to be selected
 */
export type Pattern = string;
/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
export type Order = "keep" | "ascending" | "descending";
/**
 * >A resolvable URL reference to the system security plan for the system being assessed.
 */
export type SystemSecurityPlanReference = string;
/**
 * The title or name for this POA&M item .
 */
export type POAMItemTitle = string;
/**
 * A human_readable description of POA&M item.
 */
export type POAMItemDescription = string;
/**
 * A resolvable URL reference to the base catalog or profile that this profile is tailoring.
 */
export type CatalogOrProfileReference = string;
/**
 * How clashing controls should be handled
 */
export type CombinationMethod = "use_first" | "merge" | "keep";
/**
 * An As_is element indicates that the controls should be structured in resolution as they are structured in their source catalogs. It does not contain any elements or attributes.
 */
export type AsIs = boolean;
/**
 * Items to remove, by assigned name
 */
export type ReferenceByAssignedName = string;
/**
 * Items to remove, by class. A token match.
 */
export type ReferenceByClass = string;
/**
 * Items to remove, indicated by their IDs
 */
export type ReferenceByID = string;
/**
 * Items to remove, by the name of the item's type, or generic identifier, e.g. title or prop
 */
export type ReferencesByItemNameOrGenericIdentifier = string;
/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
export type Position = "before" | "after" | "starting" | "ending";
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export type TitleChange = string;
/**
 * A link to a resource that defines a set of components and/or capabilities to import into this collection.
 */
export type HyperlinkReference = string;
/**
 * The capability's human_readable name.
 */
export type CapabilityName = string;
/**
 * A summary of the capability.
 */
export type CapabilityDescription = string;

/**
 * Oscal Package Types
 */
export interface OscalPackageSchema {
  system_security_plan?: SystemSecurityPlan;
  assessment_results?: SecurityAssessmentResults;
  catalog?: Catalog;
  plan_of_action_and_milestones?: PlanOfActionAndMilestones;
  profile?: Profile;
  component_definition?: ComponentDefinition;
  assessment_plan?: SecurityAssessmentPlan;
  [k: string]: unknown;
}
/**
 * A system security plan, such as those described in NIST SP 800_18
 */
export interface SystemSecurityPlan {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_profile: ImportProfile;
  system_characteristics: SystemCharacteristics;
  system_implementation: SystemImplementation;
  control_implementation: ControlImplementation;
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
  revisions?: RevisionHistoryEntry;
  document_ids?: DocumentIdentifier;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  roles?: [Role, ...Role[]];
  locations?: [Location, ...Location[]];
  parties?: [PartyOrganizationOrPerson, ...PartyOrganizationOrPerson[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * An entry in a sequential list of revisions to the containing document in reverse chronological order (i.e., most recent previous revision first).
 */
export interface RevisionHistoryEntry {
  title?: DocumentTitle;
  published?: PublicationTimestamp;
  last_modified?: LastModifiedTimestamp;
  version?: DocumentVersion;
  oscal_version?: OSCALVersion;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * An attribute, characteristic, or quality of the containing object expressed as a namespace qualified name/value pair. The value of a property is a simple scalar value, which may be expressed as a list of values in some OSCAL formats.
 */
export interface Property {
  uuid?: SatisfiedUniversallyUniqueIdentifier;
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
  uuid?: SatisfiedUniversallyUniqueIdentifier;
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * A location, with associated metadata that can be referenced.
 */
export interface Location {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: LocationTitle;
  address: Address;
  email_addresses?: EmailAddress;
  telephone_numbers?: TelephoneNumber;
  urls?: LocationURL;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * A postal address for the location.
 */
export interface Address {
  type?: AddressType;
  addr_lines?: AddressLine;
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
export interface PartyOrganizationOrPerson {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  type: PartyType;
  name?: PartyName;
  short_name?: PartyShortName;
  external_ids?: PartyExternalIdentifier;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  email_addresses?: EmailAddress;
  telephone_numbers?: TelephoneNumber;
  addresses?: Address;
  location_uuids?: [LocationReference, ...LocationReference[]];
  member_of_organizations?: OrganizationalAffiliation;
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
  party_uuids: [PartyReference, ...PartyReference[]];
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
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
 * Contains the characteristics of the system, such as its name, purpose, and security impact level.
 */
export interface SystemCharacteristics {
  system_ids: [SystemIdentification, ...SystemIdentification[]];
  system_name: SystemNameFull;
  system_name_short?: SystemNameShort;
  description: SystemDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  date_authorized?: SystemAuthorizationDate;
  security_sensitivity_level: SecuritySensitivityLevel;
  system_information: SystemInformation;
  security_impact_level: SecurityImpactLevel;
  status: Status;
  authorization_boundary: AuthorizationBoundary;
  network_architecture?: NetworkArchitecture;
  data_flow?: DataFlow;
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  information_types: InformationType;
}
/**
 * Contains details about one information type that is stored, processed, or transmitted by the system, such as privacy information, and those defined in NIST SP 800_60.
 */
export interface InformationType {
  uuid?: SatisfiedUniversallyUniqueIdentifier;
  title: TitleField;
  description: InformationTypeDescription;
  categorizations?: InformationTypeCategorization;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  confidentiality_impact: ConfidentialityImpactLevel;
  integrity_impact: IntegrityImpactLevel;
  availability_impact: AvailabilityImpactLevel;
}
/**
 * A set of information type identifiers qualified by the given identification system used, such as NIST SP 800_60.
 */
export interface InformationTypeCategorization {
  system: InformationTypeIdentificationSystem;
  information_type_ids?: InformationTypeSystemizedIdentifier;
}
/**
 * The expected level of impact resulting from the unauthorized disclosure of the described information.
 */
export interface ConfidentialityImpactLevel {
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  base: BaseLevelConfidentialityIntegrityOrAvailability;
  selected?: SelectedLevelConfidentialityIntegrityOrAvailability;
  adjustment_justification?: AdjustmentJustification;
}
/**
 * The expected level of impact resulting from the unauthorized modification of the described information.
 */
export interface IntegrityImpactLevel {
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  base: BaseLevelConfidentialityIntegrityOrAvailability;
  selected?: SelectedLevelConfidentialityIntegrityOrAvailability;
  adjustment_justification?: AdjustmentJustification;
}
/**
 * The expected level of impact resulting from the disruption of access to or use of the described information or the information system.
 */
export interface AvailabilityImpactLevel {
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
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
  state: SystemState;
  remarks?: Remarks;
}
/**
 * A description of this system's authorization boundary, optionally supplemented by diagrams that illustrate the authorization boundary.
 */
export interface AuthorizationBoundary {
  description: AuthorizationBoundaryDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  diagrams?: {
    [k: string]: Diagram & {
      [k: string]: unknown;
    };
  };
  remarks?: RemarksField;
}
/**
 * A graphic that provides a visual representation the system, or some aspect of it.
 */
export interface Diagram {
  description?: DiagramDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  caption?: Caption;
  remarks?: RemarksField;
}
/**
 * A description of the system's network architecture, optionally supplemented by diagrams that illustrate the network architecture.
 */
export interface NetworkArchitecture {
  description: NetworkArchitectureDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  diagrams?: {
    [k: string]: Diagram & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * A description of the logical flow of information within the system and across its boundaries, optionally supplemented by diagrams that illustrate these flows.
 */
export interface DataFlow {
  description: DataFlowDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  diagrams?: {
    [k: string]: Diagram & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Provides information as to how the system is implemented.
 */
export interface SystemImplementation {
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  leveraged_authorizations?: LeveragedAuthorization;
  users: {
    [k: string]: SystemUser & {
      [k: string]: unknown;
    };
  };
  components: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
  remarks?: Remarks;
}
/**
 * A description of another authorized system from which this system inherits capabilities that satisfy security requirements. Another term for this concept is a common control provider.
 */
export interface LeveragedAuthorization {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title: TitleField;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  role_ids?: [RoleIdentifierReference, ...RoleIdentifierReference[]];
  authorized_privileges?: [Privilege, ...Privilege[]];
  remarks?: Remarks;
}
/**
 * Identifies a specific system privilege held by the user, along with an associated description and/or rationale for the privilege.
 */
export interface Privilege {
  title: PrivilegeTitle;
  description?: PrivilegeDescription;
  functions_performed: [FunctionsPerformed, ...FunctionsPerformed[]];
}
/**
 * A defined component that can be part of an implemented system.
 */
export interface Component {
  type: ComponentType;
  title: ComponentTitle;
  description: ComponentDescription;
  purpose?: Purpose;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  status: OperationalStatus;
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  protocols?: [ServiceProtocolInformation, ...ServiceProtocolInformation[]];
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
 * A reference to one or more roles with responsibility for performing a function relative to the containing object.
 */
export interface ResponsibleRole {
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  party_uuids?: [PartyReference, ...PartyReference[]];
  remarks?: Remarks;
}
/**
 * Information about the protocol used to provide a service.
 */
export interface ServiceProtocolInformation {
  uuid?: SatisfiedUniversallyUniqueIdentifier;
  name: ProtocolName;
  title?: ProtocolTitle;
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
 * A single managed inventory item within the system.
 */
export interface InventoryItem {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  description: InventoryItemDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  implemented_components?: ImplementedComponent;
  remarks?: Remarks;
}
/**
 * The set of components that are implemented in a given system inventory item.
 */
export interface ImplementedComponent {
  component_uuid: ComponentUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Describes how the system satisfies a set of controls.
 */
export interface ControlImplementation {
  description: ControlImplementationDescription;
  implemented_requirements: [ControlBasedRequirement, ...ControlBasedRequirement[]];
}
/**
 * Describes how the system satisfies an individual control.
 */
export interface ControlBasedRequirement {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  control_id: ControlIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parameter_settings?: {
    [k: string]: SetParameterValue & {
      [k: string]: unknown;
    };
  };
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  by_components?: {
    [k: string]: ComponentControlImplementation & {
      [k: string]: unknown;
    };
  };
  statements?: {
    [k: string]: SpecificControlStatement & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies the parameter that will be set by the enclosed value.
 */
export interface SetParameterValue {
  values: ParameterValue;
}
/**
 * Defines how the referenced component implements a set of controls.
 */
export interface ComponentControlImplementation {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  description: ControlImplementationMethodDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parameter_settings?: {
    [k: string]: SetParameterValue & {
      [k: string]: unknown;
    };
  };
  export?: Export;
  inherited?: InheritedControlImplementation;
  satisfied?: SatisfiedControlImplementationResponsibility;
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies content intended for external consumption, such as with leveraged organizations.
 */
export interface Export {
  description?: ControlImplementationExportDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  provided?: ProvidedControlImplementation;
  responsibilities?: ControlImplementationResponsibility;
  remarks?: Remarks;
}
/**
 * Describes a capability which may be inherited by a leveraging system.
 */
export interface ProvidedControlImplementation {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  description: ProvidedControlImplementationDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Describes a control implementation responsibiity imposed on a leveraging system.
 */
export interface ControlImplementationResponsibility {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  provided_uuid?: ProvidedUUID;
  description: ControlImplementationResponsibilityDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Describes a control implementation inherited by a leveraging system.
 */
export interface InheritedControlImplementation {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  provided_uuid?: ProvidedUUID;
  description: InheritedControlImplementationDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
}
/**
 * Describes how this system satisfies a responsibiity imposed by a leveraged system.
 */
export interface SatisfiedControlImplementationResponsibility {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  responsibility_uuid?: ProvidedUUID;
  description: SatisfiedControlImplementationResponsibilityDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies which statements within a control are addressed.
 */
export interface SpecificControlStatement {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  by_components?: {
    [k: string]: ComponentControlImplementation & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
  resources?: Resource;
}
/**
 * A resource associated with content in the containing document. A resource may be directly included in the document base64 encoded or may point to one or more equavalent internet resources.
 */
export interface Resource {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: ResourceTitle;
  description?: ResourceDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  document_ids?: DocumentIdentifier;
  citation?: Citation;
  rlinks?: ResourceLink;
  base64?: Base64;
  remarks?: Remarks;
}
/**
 * A document identifier qualified by an identifier type.
 */
export interface DocumentIdentifier {
  scheme: DocumentIdentificationScheme;
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
export interface BibliographicDefinition { }
/**
 * A pointer to an external resource with an optional hash for verification and change detection.
 */
export interface ResourceLink {
  href: HypertextReference;
  media_type?: MediaType;
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
  media_type?: MediaType;
  value: string;
}
/**
 * Security assessment results, such as those provided by a FedRAMP assessor in the FedRAMP Security Assessment Report.
 */
export interface SecurityAssessmentResults {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_ap: ImportAssessmentPlan;
  local_definitions?: SecurityAssessmentResultsLocalDefinitions;
  results: [AssessmentResult, ...AssessmentResult[]];
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
  add_objectives_and_methods?: [AssessmentSpecificControlObjective, ...AssessmentSpecificControlObjective[]];
  activities?: [Activity, ...Activity[]];
  remarks?: Remarks;
}
/**
 * A local definition of a control objective for this assessment. Uses catalog syntax for control objective and assessment actions.
 */
export interface AssessmentSpecificControlObjective {
  control_id: ControlIdentifierReference;
  description?: ObjectiveDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parts: [Part, ...Part[]];
  remarks?: Remarks;
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
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  prose?: PartText;
  parts?: [Part, ...Part[]];
  links?: [Link, ...Link[]];
}
/**
 * Identifies an assessment or related process that can be performed. In the assessment plan, this is an intended activity which may be associated with an assessment task. In the assessment results, this an activity that was actually performed as part of an assessement.
 */
export interface Activity {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: IncludedActivityTitle;
  description: IncludedActivityDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  actions?: Action;
  related_controls?: ReviewedControlsAndControlObjectives;
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies an individual actions, such as test steps or examination procedures.
 */
export interface Action {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description: ActionDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  reviewed_controls?: ReviewedControlsAndControlObjectives;
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies the controls being assessed and their control objectives.
 */
export interface ReviewedControlsAndControlObjectives {
  description?: ControlObjectiveDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  control_selections: AssessedControls;
  control_objective_selections?: ReferenedControlObjectives;
  remarks?: Remarks;
}
/**
 * Identifies the controls being assessed. In the assessment plan, these are the planned controls. In the assessment results, these are the actual controls, and reflects any changes from the plan.
 */
export interface AssessedControls {
  description?: AssessedControlsDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_controls?: SelectControl;
  exclude_controls?: SelectControl;
  remarks?: Remarks;
}
/**
 * Used to select a control for inclusion/exclusion based on the control's identifier. A set of statement identifiers can be optionally used to target the inclusion/exclusion to only specific control statements providing more granularity over the specific statements that are within the asessment scope.
 */
export interface SelectControl {
  control_id: ControlIdentifierReference;
  statement_ids?: IncludeSpecificStatements;
}
/**
 * Identifies the control objectives of the assessment. In the assessment plan, these are the planned objectives. In the assessment results, these are the assessed objectives, and reflects any changes from the plan.
 */
export interface ReferenedControlObjectives {
  description?: ControlOjectivesDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_objectives?: [SelectObjective, ...SelectObjective[]];
  exclude_objectives?: [SelectObjective, ...SelectObjective[]];
  remarks?: Remarks;
}
/**
 * Used to select a control objective for inclusion/exclusion based on the control objective's identifier.
 */
export interface SelectObjective {
  objective_id: ObjectiveID;
}
/**
 * Used by the assessment results and POA&M. In the assessment results, this identifies all of the assessment observations and findings, initial and residual risks, deviations, and disposition. In the POA&M, this identifies initial and residual risks, deviations, and disposition.
 */
export interface AssessmentResult {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title: ResultsTitle;
  description: ResultsDescription;
  start: StartField;
  end?: EndField;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  local_definitions?: AssessmentResultSecurityAssessmentResultsLocalDefinitions;
  reviewed_controls: ReviewedControlsAndControlObjectives;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  assessment_assets?: AssessmentAssets;
  attestations?: AttestationStatements;
  assessment_log?: AssessmentLog;
  observations?: [Objective, ...Objective[]];
  risks?: [IdentifiedRisk, ...IdentifiedRisk[]];
  findings: [Finding, ...Finding[]];
  remarks?: Remarks;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface AssessmentResultSecurityAssessmentResultsLocalDefinitions {
  components?: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
  users?: {
    [k: string]: SystemUser & {
      [k: string]: unknown;
    };
  };
  assessment_actions?: [AssessmentAction, ...AssessmentAction[]];
}
/**
 * Identifies an assessment_related event that must occur as part of executing an assessment plan, the result of which may be recorded within the assessment log in assessment results.
 */
export interface AssessmentAction {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: EventTitle;
  description: EventDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  timing?: EventTiming;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  associated_activities?: AssociatedActivity;
  remarks?: Remarks;
}
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
  date: OnDateCondition;
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
 * Identifies system elements being assessed, such as components, inventory items, and locations. In the assessment plan, this identifies a planned assessment subject. In the assessment results this is an actual assessment subject, and reflects any changes from the plan. exactly what will be the focus of this assessment. Any subjects not identified in this way are out_of_scope.
 */
export interface SubjectOfAssessment {
  type: SubjectType;
  description?: IncludeSubjectsDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  include_all?: All;
  include_subjects?: [SelectAssessmentSubject, ...SelectAssessmentSubject[]];
  exclude_subjects?: [SelectAssessmentSubject, ...SelectAssessmentSubject[]];
  remarks?: Remarks;
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
 * Identifies an individual activity to be performed as part of an action.
 */
export interface AssociatedActivity {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  activity_uuid: ActivityUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  assessment_subject_placeholder?: AssessmentSubjectPlaceholder;
  remarks?: Remarks;
}
/**
 * Used when the assessment subjects will be determined as part of one or more other assessment activities. These assessment subjects will be recorded in the assessment results.
 */
export interface AssessmentSubjectPlaceholder {
  description?: AssessmentSubjectPlaceholderDescription;
  sources: AssessmentSubjectSource;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  remarks?: Remarks;
}
/**
 * Assessment subjects will be identified while conducting the referenced activity_instance.
 */
export interface AssessmentSubjectSource {
  activity_instance_uuid: ActivityInstanceUniversallyUniqueIdentifier;
}
/**
 * Identifies the assets used to perform this assessment, such as the assessment team, scanning tools, and assumptions.
 */
export interface AssessmentAssets {
  components?: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  assessment_platforms: AssessmentPlatform;
}
/**
 * Used to represent the toolset used to perform aspects of the assessment.
 */
export interface AssessmentPlatform {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: AssessmentPlatformTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  uses_components?: UsesComponent;
  remarks?: Remarks;
}
/**
 * The set of components that are used by the assessment platform.
 */
export interface UsesComponent {
  component_uuid: ComponentUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * A set of textual statements, typically written by the assessor.
 */
export interface AttestationStatements {
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  parts: [AssessmentPart, ...AssessmentPart[]];
}
/**
 * A partition of an assessment plan or results or a child of another part.
 */
export interface AssessmentPart {
  uuid?: SatisfiedUniversallyUniqueIdentifier;
  name: PartName;
  ns?: PartNamespace;
  class?: PartClass;
  title?: PartTitle;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  prose: PartText;
  parts?: [AssessmentPart, ...AssessmentPart[]];
  links?: [Link, ...Link[]];
}
/**
 * A log of all assessment_related actions taken.
 */
export interface AssessmentLog {
  entries: AssessmentLogEntry;
}
/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface AssessmentLogEntry {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description?: ActionDescription;
  start: Start;
  end?: End;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  logged_by?: [LoggedBy, ...LoggedBy[]];
  related_actions?: [ActionReference, ...ActionReference[]];
  related_tasks?: [TaskReference, ...TaskReference[]];
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
 * Identifies an individual action for which the containing object is a consequence of.
 */
export interface ActionReference {
  action_uuid: ActionUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * Identifies an individual task for which the containing object is a consequence of.
 */
export interface TaskReference {
  task_uuid: TaskUniversallyUniqueIdentifierReference;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_parties?: {
    [k: string]: ResponsibleParty & {
      [k: string]: unknown;
    };
  };
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  remarks?: Remarks;
}
/**
 * Describes an individual observation.
 */
export interface Objective {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: ObservationTitle;
  description: ObservatonDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  methods: ObservationMethod;
  types?: ObservationType;
  origins?: [Origin, ...Origin[]];
  subjects?: IdentifiesTheSubject;
  relevant_evidence?: RelevantEvidence;
  remarks?: Remarks;
}
/**
 * Identifies the source of the finding, such as a tool, interviewed person, or activity.
 */
export interface Origin {
  actors: AssessmentActor;
  related_actions?: [ActionReference, ...ActionReference[]];
  related_tasks?: [TaskReference, ...TaskReference[]];
}
/**
 * The actor that produces an observation, a finding, or a risk. One or more actor type can be used to specify a person that is using a tool.
 */
export interface AssessmentActor {
  type: ActorType;
  uuid_ref: ActorUUIDReference;
  role_id?: ActorRole;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
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
 * An identified risk.
 */
export interface IdentifiedRisk {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title: RiskTitle;
  description: RiskDescription;
  statement: RiskStatement;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  status: RiskStatus;
  origins?: [Origin, ...Origin[]];
  threat_ids?: [ThreatID, ...ThreatID[]];
  characterizations?: [Characterization, ...Characterization[]];
  mitigating_factors?: MitigatingFactor;
  deadline?: RiskResolutionDeadline;
  remediations?: RiskResponse;
  risk_log?: RiskLog;
  related_observations?: RelatedObservation;
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
  facets: Facet;
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
  uuid: SatisfiedUniversallyUniqueIdentifier;
  implementation_uuid?: ImplementationUUID;
  description: MitigatingFactorDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  subjects?: IdentifiesTheSubject;
}
/**
 * Describes either recommended or an actual plan for addressing the risk.
 */
export interface RiskResponse {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  lifecycle: RemediationIntent;
  title: ResponseTitle;
  description: ResponseDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  origins?: [Origin, ...Origin[]];
  required_assets?: RequiredAsset;
  tasks?: [Task, ...Task[]];
  remarks?: Remarks;
}
/**
 * Identifies an asset required to achieve remediation.
 */
export interface RequiredAsset {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  subjects?: IdentifiesTheSubject;
  title?: TitleForRequiredAsset;
  description: DescriptionOfRequiredAsset;
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
 * Represents a scheduled event or milestone, which may be associated with a series of assessment actions.
 */
export interface Task {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title: TaskTitle;
  description?: TaskDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  start: TaskStartDate;
  end: TaskEndDate;
  related_actions?: [ActionReference, ...ActionReference[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole & {
      [k: string]: unknown;
    };
  };
  remarks?: Remarks;
}
/**
 * A log of all risk_related actions taken.
 */
export interface RiskLog {
  entries: RiskLogEntry;
}
/**
 * Identifies the result of an action and/or task that occured as part of executing an assessment plan or an assessment event that occured in producing the assessment results.
 */
export interface RiskLogEntry {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title?: ActionTitle;
  description?: ActionDescription;
  start: Start;
  end?: End;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  logged_by?: [LoggedBy, ...LoggedBy[]];
  status_change?: RiskStatus;
  related_responses?: RiskActionReference;
  remarks?: Remarks;
}
/**
 * Identifies an individual risk response that this log entry is for.
 */
export interface RiskActionReference {
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
 * Describes an individual finding.
 */
export interface Finding {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  title: FindingTitle;
  description: FindingDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  origins?: [Origin, ...Origin[]];
  collected: CollectedField;
  expires?: ExpiresField;
  objective_status?: ObjectiveStatus;
  implementation_statement_uuid?: ImplementationStatementUUID;
  related_observations?: RelatedObservation;
  related_risks?: AssociatedRisk;
  remarks?: Remarks;
}
/**
 * Captures an assessor's conclusions regarding the degree to which an objective is satisfied.
 */
export interface ObjectiveStatus {
  objective_id?: ObjectiveID;
  control_id?: ControlIdentifierReference;
  title?: ObjectiveStatusTitle;
  description?: ObjectiveStatusDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  status: ImplementationStatus;
  remarks?: Remarks;
}
/**
 * Relates the finding to a set of referenced observations that were used to determine the finding.
 */
export interface RelatedObservation {
  observation_uuid: ObservationUniversallyUniqueIdentifierReference;
}
/**
 * Relates the finding to a set of referenced risks that were used to determine the finding.
 */
export interface AssociatedRisk {
  risk_uuid: RiskUniversallyUniqueIdentifierReference;
}
/**
 * A collection of controls.
 */
export interface Catalog {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  params?: [Parameter, ...Parameter[]];
  controls?: [Control, ...Control[]];
  groups?: [ControlGroup, ...ControlGroup[]];
  back_matter?: BackMatter;
}
/**
 * Parameters provide a mechanism for the dynamic assignment of value(s) in a control.
 */
export interface Parameter {
  id: ParameterIdentifier;
  class?: ParameterClass;
  depends_on?: DependsOn;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  label?: ParameterLabel;
  usage?: ParameterUsageDescription;
  constraints?: [Constraint, ...Constraint[]];
  guidelines?: [Guideline, ...Guideline[]];
  values?: [ParameterValue, ...ParameterValue[]];
  select?: Selection;
}
/**
 * A formal or informal expression of a constraint or test
 */
export interface Constraint {
  description?: ConstraintDescription;
  tests?: ConstraintTest;
}
/**
 * A test expression which is expected to be evaluated by a tool.
 */
export interface ConstraintTest {
  expression: ConstraintTest;
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
  choice?: Choice;
}
/**
 * A structured information object representing a security or privacy control. Each security or privacy control within the Catalog is defined by a distinct control instance.
 */
export interface Control {
  id: ControlIdentifier;
  class?: ControlClass;
  title: ControlTitle;
  params?: [Parameter, ...Parameter[]];
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parts?: [Part, ...Part[]];
  controls?: [Control, ...Control[]];
}
/**
 * A group of (selected) controls or of groups of controls
 */
export interface ControlGroup {
  id?: GroupIdentifier;
  class?: GroupClass;
  title: GroupTitle;
  params?: [Parameter, ...Parameter[]];
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parts?: [Part, ...Part[]];
  groups?: [ControlGroup, ...ControlGroup[]];
  calls?: [Call, ...Call[]];
  matches?: [MatchControlsByIdentifier, ...MatchControlsByIdentifier[]];
}
/**
 * Call a control by its ID
 */
export interface Call {
  control_id: ControlID;
  with_child_controls?: IncludeContainedControlsWithControl;
}
/**
 * Select controls by (regular expression) match on ID
 */
export interface MatchControlsByIdentifier {
  pattern?: Pattern;
  order?: Order;
  with_child_controls?: IncludeContainedControlsWithControl;
}
/**
 * A plan of action and milestones which identifies initial and residual risks, deviations, and disposition, such as those required by FedRAMP.
 */
export interface PlanOfActionAndMilestones {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_ssp?: ImportSystemSecurityPlan;
  system_id?: SystemIdentification;
  local_definitions?: PlanOfActionAndMilestonesSecurityAssessmentResultsLocalDefinitions;
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
 * Allows components, and inventory_items to be defined within the POA&M for circumstances where no OSCAL_based SSP exists, or is not delivered with the POA&M.
 */
export interface PlanOfActionAndMilestonesSecurityAssessmentResultsLocalDefinitions {
  components?: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
  remarks?: Remarks;
}
/**
 * Describes an individual POA&M item.
 */
export interface POAMItem {
  uuid?: SatisfiedUniversallyUniqueIdentifier;
  title: POAMItemTitle;
  description: POAMItemDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  origins?: [Origin, ...Origin[]];
  collected: CollectedField;
  expires?: ExpiresField;
  related_observations?: RelatedObservation;
  related_risks?: AssociatedRisk;
  remarks?: Remarks;
}
/**
 * Each OSCAL profile is defined by a Profile element
 */
export interface Profile {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  imports: [ImportResource, ...ImportResource[]];
  merge?: MergeControls;
  modify?: ModifyControls;
  back_matter?: BackMatter;
}
/**
 * An Import element designates a catalog, profile, or other resource to be included (referenced and potentially modified) by this profile.
 */
export interface ImportResource {
  href: CatalogOrProfileReference;
  include?: IncludeControls;
  exclude?: ExcludeControls;
}
/**
 * Specifies which controls to include from the resource (source catalog) being imported
 */
export interface IncludeControls {
  all?: IncludeAll;
  calls?: [Call, ...Call[]];
  matches?: [MatchControlsByIdentifier, ...MatchControlsByIdentifier[]];
}
/**
 * Include all controls from the imported resource (catalog)
 */
export interface IncludeAll {
  with_child_controls?: IncludeContainedControlsWithControl;
}
/**
 * Which controls to exclude from the resource (source catalog) being imported
 */
export interface ExcludeControls {
  calls?: [Call, ...Call[]];
  matches?: [MatchControlsByIdentifier, ...MatchControlsByIdentifier[]];
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
  groups?: [ControlGroup, ...ControlGroup[]];
  id_selectors?: [Call, ...Call[]];
  pattern_selectors?: [MatchControlsByIdentifier, ...MatchControlsByIdentifier[]];
}
/**
 * Set parameters or amend controls in resolution
 */
export interface ModifyControls {
  set_parameters?: {
    [k: string]: SetParameterValue & {
      [k: string]: unknown;
    };
  };
  alters?: [Alteration, ...Alteration[]];
}
/**
 * An Alter element specifies changes to be made to an included control when a profile is resolved.
 */
export interface Alteration {
  control_id?: ControlID;
  removes?: [Removal, ...Removal[]];
  adds?: [Addition, ...Addition[]];
}
/**
 * Specifies elements to be removed from a control, in resolution
 */
export interface Removal {
  name_ref?: ReferenceByAssignedName;
  class_ref?: ReferenceByClass;
  id_ref?: ReferenceByID;
  item_name?: ReferencesByItemNameOrGenericIdentifier;
}
/**
 * Specifies contents to be added into controls, in resolution
 */
export interface Addition {
  position?: Position;
  id_ref?: ReferenceByID;
  title?: TitleChange;
  params?: [Parameter, ...Parameter[]];
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  parts?: [Part, ...Part[]];
}
/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_component_definitions?: [ImportComponentDefinition, ...ImportComponentDefinition[]];
  components?: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  capabilities?: {
    [k: string]: Capability & {
      [k: string]: unknown;
    };
  };
  back_matter?: BackMatter;
}
/**
 * Loads a component definition from another resource.
 */
export interface ImportComponentDefinition {
  href: HyperlinkReference;
}
/**
 * A grouping of other components and/or capabilities.
 */
export interface Capability {
  name: CapabilityName;
  description: CapabilityDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  incorporates_components?: {
    [k: string]: IncorporatesComponent & {
      [k: string]: unknown;
    };
  };
  control_implementations?: [ControlImplementation, ...ControlImplementation[]];
  remarks?: Remarks;
}
/**
 * TBD
 */
export interface IncorporatesComponent {
  description: ComponentDescription;
}
/**
 * An assessment plan, such as those provided by a FedRAMP assessor.
 */
export interface SecurityAssessmentPlan {
  uuid: SatisfiedUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_ssp: ImportSystemSecurityPlan;
  local_definitions?: SecurityAssessmentPlanSecurityAssessmentResultsLocalDefinitions;
  terms_and_conditions?: AssessmentPlanTermsAndConditions;
  reviewed_controls: ReviewedControlsAndControlObjectives;
  assessment_subjects?: [SubjectOfAssessment, ...SubjectOfAssessment[]];
  assessment_assets?: AssessmentAssets;
  assessment_actions?: [AssessmentAction, ...AssessmentAction[]];
  tasks?: [Task, ...Task[]];
  back_matter?: BackMatter;
}
/**
 * Used to define data objects that are used in the assessment plan, that do not appear in the referenced SSP.
 */
export interface SecurityAssessmentPlanSecurityAssessmentResultsLocalDefinitions {
  components?: {
    [k: string]: Component & {
      [k: string]: unknown;
    };
  };
  inventory_items?: [InventoryItem, ...InventoryItem[]];
  users?: {
    [k: string]: SystemUser & {
      [k: string]: unknown;
    };
  };
  add_objectives_and_methods?: [AssessmentSpecificControlObjective, ...AssessmentSpecificControlObjective[]];
  activities?: [Activity, ...Activity[]];
  remarks?: Remarks;
}
/**
 * Used to define various terms and conditions under which an assessment, described by the plan, can be performed. Each child part defines a different type of term or condition.
 */
export interface AssessmentPlanTermsAndConditions {
  parts?: AssessmentPart | [AssessmentPart, ...AssessmentPart[]];
}
