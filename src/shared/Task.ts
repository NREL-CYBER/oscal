import { Property, AnnotatedProperty, Link, ActionReference, ResponsibleRole, Remarks } from ".";

/**
 * The title for this required asset.
 */
export type TitleForRequiredAsset = string;
/**
 * A human_readable description of this required asset.
 */
export type DescriptionOfRequiredAsset = string;
/**
 * Uniquely identifies this assessment task.
 */
export type TaskUniversallyUniqueIdentifier = string;
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
 * Represents a scheduled event or milestone, which may be associated with a series of assessment actions.
 */
export interface Task {
    uuid: TaskUniversallyUniqueIdentifier;
    title: TaskTitle;
    description?: TaskDescription;
    props?: [Property, ...Property[]];
    annotations?: [AnnotatedProperty, ...AnnotatedProperty[]];
    links?: [Link, ...Link[]];
    start: TaskStartDate;
    end: TaskEndDate;
    related_actions?: [ActionReference, ...ActionReference[]];
    responsible_roles?: {
        [k: string]: ResponsibleRole;
    };
    remarks?: Remarks;
}