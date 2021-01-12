/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { PublicationMetadata, Component, Property, AnnotatedProperty, Link, ResponsibleRole, ControlImplementation, DocumentIdentifier, BackMatter } from "src";

/**
 * A globally unique identifier for this component definition instance. This UUID should be changed when this document is revised.
 */
export type ComponentDefinitionUniversallyUniqueIdentifier = string;
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
/**
 * A unique identifier that can be used to reference this property elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
 */
export type PropertyUniversallyUniqueIdentifier = string;
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
 * A unique identifier that can be used to reference this annotated property elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
 */
export type AnnotatedPropertyUniversallyUniqueIdentifier = string;
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
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistantly used for a given location across revisions of the document.
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
 * A unique identifier that can be used to reference this defined location elsewhere in an OSCAL document. A UUID should be consistantly used for a given party across revisions of the document.
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
 * References a party defined in metadata.
 */
export type PartyReference = string;
/**
 * A link to a resource that defines a set of components and/or capabilities to import into this collection.
 */
export type HyperlinkReference = string;
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
export type TitleField = string;
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
 * A unique identifier for the set of implemented controls.
 */
export type ControlImplementationSetIdentifier = string;
/**
 * A reference to an OSCAL catalog or profile providing the referenced control or subcontrol definition.
 */
export type SourceResourceReference = string;
/**
 * A description of how the specified set of controls are implemented for the containing component or capability.
 */
export type ControlImplementationDescription = string;
/**
 * A unique identifier for a specific control implementation.
 */
export type ControlImplementationIdentifier = string;
/**
 * A reference to a control identifier.
 */
export type ControlIdentifierReference = string;
/**
 * A parameter value or set of values.
 */
export type ParameterValue = string;
/**
 * A unique identifier for a specific control implementation.
 */
export type ControlStatementImplementationIdentifier = string;
/**
 * A summary of how the containing control statement is implemented by the component or capability.
 */
export type StatementImplementationDescription = string;
/**
 * The capability's human_readable name.
 */
export type CapabilityName = string;
/**
 * A summary of the capability.
 */
export type CapabilityDescription = string;
/**
 * A description of the component, including information about its function.
 */
export type IncorporatesComponentDescription = string;
/**
 * A globally unique identifier that can be used to reference this defined resource elsewhere in an OSCAL document. A UUID should be consistantly used for a given resource across revisions of the document.
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
 * Method by which a hash is derived
 */
export type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export type FileName = string;

export interface OscalComponentSchema {
  component_definition: ComponentDefinition;
}
/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
  uuid: ComponentDefinitionUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_component_definitions?: [ImportComponentDefinition, ...ImportComponentDefinition[]];
  components?: {
    [k: string]: Component
  };
  capabilities?: {
    [k: string]: Capability
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
 * Defines how the component or capability supports a set of controls.
 */
export interface ControlImplementationSet {
  uuid: ControlImplementationSetIdentifier;
  source: SourceResourceReference;
  description: ControlImplementationDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  implemented_requirements: [ControlImplementation, ...ControlImplementation[]];
}
/**
 * Identifies which statements within a control are addressed.
 */
export interface ControlStatementImplementation {
  uuid: ControlStatementImplementationIdentifier;
  description: StatementImplementationDescription;
  props?: [Property, ...Property[]];
  annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
  links?: [Link, ...Link[]];
  responsible_roles?: {
    [k: string]: ResponsibleRole
  };
  remarks?: Remarks;
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
    [k: string]: IncorporatesComponent
  };
  control_implementations?: [ControlImplementationSet, ...ControlImplementationSet[]];
  remarks?: Remarks;
}
/**
 * TBD
 */
export interface IncorporatesComponent {
  description: IncorporatesComponentDescription;
}
