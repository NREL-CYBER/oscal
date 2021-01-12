import { Property, AnnotatedProperty, Link, Remarks, SubjectType, IncludeSubjectsDescription, All, UUIDReference } from ".";

/**
 * A human_readable description of intent of this assessment subject placeholder.
 */
export type AssessmentSubjectPlaceholderDescription = string;
/**
 * Assessment subjects will be identified while conducting the referenced activity_instance.
 */
export interface AssessmentSubjectSource {
    activity_instance_uuid: ActivityInstanceUniversallyUniqueIdentifier;
}
/**
 * Uniquely identifies an assessment activity to be performed as part of the event. This UUID may be referenced elsewhere in an OSCAL document when refering to this information. A UUID should be consistantly used for this schedule across revisions of the document.
 */
export type ActivityInstanceUniversallyUniqueIdentifier = string;

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
 * Used when the assessment subjects will be determined as part of one or more other assessment activities. These assessment subjects will be recorded in the assessment results.
 */
export interface AssessmentSubjectPlaceholder {
    description?: AssessmentSubjectPlaceholderDescription;
    sources: [AssessmentSubjectSource, ...AssessmentSubjectSource[]];
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    remarks?: Remarks;
}
