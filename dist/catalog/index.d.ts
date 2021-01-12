import { Choice, ConstraintDescription, ConstraintTest, DependsOn, GroupClass, GroupIdentifier, GroupTitle, GuidelineText, ParameterCardinality, ParameterClass, ParameterIdentifier, ParameterLabel, ParameterUsageDescription } from "src/profile";
import { AnnotatedProperty, BackMatter, DocumentIdentifier, DocumentTitle, DocumentVersion, ExternalIdentifierSchema, LastModifiedTimestamp, Link, Location, OSCALVersion, ParameterValue, Property, PublicationTimestamp, Remarks, Party, ResponsibleParty, RevisionHistoryEntry, Role, PartIdentifier, PartName, PartNamespace, PartClass, PartTitle, PartText } from "../shared";
/**
 * A unique identifier for a specific control instance that can be used to reference the control in other OSCAL documents. This identifier's uniqueness is document scoped and is intended to be consistent for the same control across minor revisions of the document.
 */
export declare type ControlIdentifier = string;
/**
 * A textual label that provides a sub_type or characterization of the control.
 */
export declare type ControlClass = string;
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export declare type ControlTitle = string;
/**
 * A globally unique identifier for this catalog instance. This UUID should be changed when this document is revised.
 */
export declare type CatalogUniversallyUniqueIdentifier = string;
/**
 * A collection of controls.
 */
export interface Catalog {
    uuid: CatalogUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    params?: [Parameter, ...Parameter[]];
    controls?: [Control, ...Control[]];
    groups?: [ControlGroup, ...ControlGroup[]];
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
    revisions?: [RevisionHistoryEntry, ...RevisionHistoryEntry[]];
    document_ids?: [DocumentIdentifier, ...DocumentIdentifier[]];
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    roles?: [Role, ...Role[]];
    locations?: [Location, ...Location[]];
    parties?: [Party, ...Party[]];
    responsible_parties?: {
        [k: string]: ResponsibleParty;
    };
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
    tests?: [ConstraintTest, ...ConstraintTest[]];
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
    choice?: [Choice, ...Choice[]];
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
 * A group of controls, or of groups of controls.
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
    controls?: [Control, ...Control[]];
}
/**
 * A collection of resources, which may be included directly or by reference.
 */