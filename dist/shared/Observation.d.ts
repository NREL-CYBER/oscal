/**
 * References an observation defined in the list of observations.
 */
export declare type ObservationUniversallyUniqueIdentifierReference = string;
/**
 * Relates to a set of referenced observations that were used to determine the finding.
 */
export interface RelatedObservation {
    observation_uuid: ObservationUniversallyUniqueIdentifierReference;
}
