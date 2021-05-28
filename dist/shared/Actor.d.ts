import { Property, Link } from ".";
/**
 * The kind of actor.
 */
export declare type ActorType = "tool" | "assessment_platform" | "party";
/**
 * A pointer to the tool or person based on the associated type.
 */
export declare type ActorUUIDReference = string;
/**
 * For a party, this can optionally be used to specify the role the actor was performing.
 */
export declare type ActorRole = string;
/**
 * The actor that produces an observation, a finding, or a risk. One or more actor type can be used to specify a person that is using a tool.
 */
export interface AssessmentActor {
    type: ActorType;
    uuid_ref: ActorUUIDReference;
    role_id?: ActorRole;
    props?: Property[];
    links?: Link[];
}
