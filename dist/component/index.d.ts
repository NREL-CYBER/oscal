/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
import { PublicationMetadata, Component, Property, AnnotatedProperty, Link, ResponsibleRole, ControlImplementation } from "src";
/**
 * A globally unique identifier for this component definition instance. This UUID should be changed when this document is revised.
 */
export declare type ComponentDefinitionUniversallyUniqueIdentifier = string;
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
export declare type DocumentTitle1 = string;
/**
 * The date and time the document was published. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export declare type PublicationTimestamp1 = string;
/**
 * The date and time the document was last modified. The date_time value must be formatted according to RFC 3339 with full time and time zone included.
 */
export declare type LastModifiedTimestamp1 = string;
/**
 * A string used to distinguish the current version of the document from other previous (and future) versions.
 */
export declare type DocumentVersion1 = string;
/**
 * The OSCAL model version the document was authored against.
 */
export declare type OSCALVersion1 = string;
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
export declare type TypeFlag = string;
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
export declare type PartyType = "person" | "organization";
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
 * An email address as defined by RFC 5322 Section 3.4.1.
 */
export declare type EmailAddress1 = string;
/**
 * Indicates the type of phone number.
 */
export declare type TypeFlag1 = string;
/**
 * Indicates the type of address.
 */
export declare type AddressType1 = string;
/**
 * A single line of an address.
 */
export declare type AddressLine1 = string;
/**
 * City, town or geographical region for the mailing address.
 */
export declare type City1 = string;
/**
 * State, province or analogous geographical region for mailing address
 */
export declare type State1 = string;
/**
 * Postal or ZIP code for mailing address
 */
export declare type PostalCode1 = string;
/**
 * The ISO 3166_1 alpha_2 country code for the mailing address.
 */
export declare type CountryCode1 = string;
/**
 * References a location defined in metadata.
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
 * A link to a resource that defines a set of components and/or capabilities to import into this collection.
 */
export declare type HyperlinkReference = string;
/**
 * A category describing the purpose of the component.
 */
export declare type ComponentType = string;
/**
 * A human readable name for the component.
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
export declare type TitleField = string;
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
 * A unique identifier for the set of implemented controls.
 */
export declare type ControlImplementationSetIdentifier = string;
/**
 * A reference to an OSCAL catalog or profile providing the referenced control or subcontrol definition.
 */
export declare type SourceResourceReference = string;
/**
 * A description of how the spefied set of controls are implemented for the containing component or capability.
 */
export declare type ControlImplementationDescription = string;
/**
 * A unique identifier for a specific control implementation.
 */
export declare type ControlImplementationIdentifier = string;
/**
 * A reference to a control identifier.
 */
export declare type ControlIdentifierReference = string;
/**
 * A description of how the spefied control is implemented for the containing component or capability.
 */
export declare type ControlImplementationDescription1 = string;
/**
 * A parameter value or set of values.
 */
export declare type ParameterValue = string;
/**
 * A unique identifier for a specific control implementation.
 */
export declare type ControlStatementImplementationIdentifier = string;
/**
 * A summary of how the containing control statement is implemented by the component or capability.
 */
export declare type StatementImplementationDescription = string;
/**
 * The capability's human_readable name.
 */
export declare type CapabilityName = string;
/**
 * A summary of the capability.
 */
export declare type CapabilityDescription = string;
/**
 * A description of the component, including information about its function.
 */
export declare type ComponentDescription1 = string;
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
 * Qualifies the kind of document identifier.
 */
export declare type DocumentIdentificationScheme1 = string;
/**
 * A line of citation text.
 */
export declare type CitationText = string;
/**
 * A resolvable URI reference to a resource.
 */
export declare type HypertextReference1 = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export declare type MediaType1 = string;
/**
 * Method by which a hash is derived
 */
export declare type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export declare type FileName = string;
/**
 * Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) Media Types Registry.
 */
export declare type MediaType2 = string;
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
        [k: string]: Component;
    };
    capabilities?: {
        [k: string]: Capability;
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
        [k: string]: ResponsibleRole;
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
        [k: string]: IncorporatesComponent;
    };
    control_implementations?: [ControlImplementationSet, ...ControlImplementationSet[]];
    remarks?: Remarks;
}
/**
 * TBD
 */
export interface IncorporatesComponent {
    description: ComponentDescription1;
}
/**
 * A collection of resources, which may be included directly or by reference.
 */
export interface BackMatter {
    resources?: [Resource, ...Resource[]];
}
/**
 * A resource associated with content in the containing document. A resource may be directly included in the document base64 encoded or may point to one or more equavalent internet resources.
 */
export interface Resource {
    uuid: ResourceUniversallyUniqueIdentifier;
    title?: ResourceTitle;
    description?: ResourceDescription;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    document_ids?: [DocumentIdentifier1, ...DocumentIdentifier1[]];
    citation?: Citation;
    rlinks?: [ResourceLink, ...ResourceLink[]];
    base64?: Base64;
    remarks?: Remarks;
}
/**
 * A document identifier qualified by an identifier type.
 */
export interface DocumentIdentifier1 {
    scheme: DocumentIdentificationScheme1;
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
export interface BibliographicDefinition {
}
/**
 * A pointer to an external resource with an optional hash for verification and change detection.
 */
export interface ResourceLink {
    href: HypertextReference1;
    media_type?: MediaType1;
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
    media_type?: MediaType2;
    value: string;
}
