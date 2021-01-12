import { AnnotatedProperty, DocumentIdentifier, HypertextReference, Link, MediaType, PartClass, PartIdentifier, PartName, PartNamespace, PartText, PartTitle, Property, PublicationMetadata, Remarks } from "../shared";
/**
 * A globally unique identifier for this profile instance. This UUID should be changed when this document is revised.
 */
export declare type ProfileUniversallyUniqueIdentifier = string;
/**
 * A resolvable URL reference to the base catalog or profile that this profile is tailoring.
 */
export declare type CatalogOrProfileReference = string;
/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
export declare type IncludeContainedControlsWithControl = "yes" | "no";
/**
 * Value of the 'id' flag on a target control
 */
export declare type ControlID = string;
/**
 * A regular expression matching the IDs of one or more controls to be selected
 */
export declare type Pattern = string;
/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
export declare type Order = "keep" | "ascending" | "descending";
/**
 * How clashing controls should be handled
 */
export declare type CombinationMethod = "use_first" | "merge" | "keep";
/**
 * An As_is element indicates that the controls should be structured in resolution as they are structured in their source catalogs. It does not contain any elements or attributes.
 */
export declare type AsIs = boolean;
/**
 * A unique identifier for a specific group instance that can be used to reference the group within this and in other OSCAL documents. This identifier's uniqueness is document scoped and is intended to be consistent for the same group across minor revisions of the document.
 */
export declare type GroupIdentifier = string;
/**
 * A textual label that provides a sub_type or characterization of the group.
 */
export declare type GroupClass = string;
/**
 * A name given to the group, which may be used by a tool for display and navigation.
 */
export declare type GroupTitle = string;
/**
 * A unique identifier for a specific parameter instance. This identifier's uniqueness is document scoped and is intended to be consistent for the same parameter across minor revisions of the document.
 */
export declare type ParameterIdentifier = string;
/**
 * A textual label that provides a characterization of the parameter.
 */
export declare type ParameterClass = string;
/**
 * Another parameter invoking this one
 */
export declare type DependsOn = string;
/**
 * A short, placeholder name for the parameter, which can be used as a subsitute for a value if no value is assigned.
 */
export declare type ParameterLabel = string;
/**
 * Describes the purpose and use of a parameter
 */
export declare type ParameterUsageDescription = string;
/**
 * A textual summary of the constraint to be applied.
 */
export declare type ConstraintDescription = string;
/**
 * A formal (executable) expression of a constraint
 */
export declare type ConstraintTestExpression = string;
/**
 * Prose permits multiple paragraphs, lists, tables etc.
 */
export declare type GuidelineText = string;
/**
 * A parameter value or set of values.
 */
export declare type ParameterValue = string;
/**
 * Describes the number of selections that must occur.
 */
export declare type ParameterCardinality = string;
/**
 * A value selection among several such options
 */
export declare type Choice = string;
/**
 * Items to remove, by assigned name
 */
export declare type ReferenceByAssignedName = string;
/**
 * Items to remove, by class. A token match.
 */
export declare type ReferenceByClass = string;
/**
 * Items to remove, indicated by their IDs
 */
export declare type ReferenceByID = string;
/**
 * Items to remove, by the name of the item's type, or generic identifier, e.g. title or prop
 */
export declare type ReferencesByItemNameOrGenericIdentifier = string;
/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
export declare type Position = "before" | "after" | "starting" | "ending";
/**
 * A name given to the control, which may be used by a tool for display and navigation.
 */
export declare type TitleChange = string;
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
 * Method by which a hash is derived
 */
export declare type HashAlgorithm = string;
/**
 * Name of the file before it was encoded as Base64 to be embedded in a resource. This is the name that will be assigned to the file when the file is decoded.
 */
export declare type FileName = string;
/**
 * Each OSCAL profile is defined by a Profile element
 */
export interface Profile {
    uuid: ProfileUniversallyUniqueIdentifier;
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
 * A test expression which is expected to be evaluated by a tool.
 */
export interface ConstraintTest {
    expression: ConstraintTestExpression;
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
    choice?: [Choice, ...Choice[]];
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
 * Set parameters or amend controls in resolution
 */
export interface ModifyControls {
    set_parameters?: {
        [k: string]: ParameterSetting;
    };
    alters?: [Alteration, ...Alteration[]];
}
/**
 * A parameter setting, to be propagated to points of insertion
 */
export interface ParameterSetting {
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
    document_ids?: [DocumentIdentifier, ...DocumentIdentifier[]];
    citation?: Citation;
    rlinks?: [ResourceLink, ...ResourceLink[]];
    base64?: Base64;
    remarks?: Remarks;
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
