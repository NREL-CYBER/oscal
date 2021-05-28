export declare type OSPUniversallyUniqueIdentifier = string;
export declare type BusinessFunctionUniversallyUniqueIdentifier = string;
/**
 * Organization Business Function.
 */
export interface BusinessFunction {
    uuid: BusinessFunctionUniversallyUniqueIdentifier;
    title: string;
    description: string;
    remarks?: string;
}
/**
 * Business Mission Statement.
 */
declare type MissionStatement = string;
/**
 * Organization Security Policy.
 */
export interface OrganizationSecurityPolicy {
    uuid: OSPUniversallyUniqueIdentifier;
    functions: BusinessFunction[];
    mission: MissionStatement;
}
export {};
