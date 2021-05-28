
export type OSPUniversallyUniqueIdentifier = string
export type BusinessFunctionUniversallyUniqueIdentifier = string

/**
 * Organization Business Function.
 */
export interface BusinessFunction {
    uuid: BusinessFunctionUniversallyUniqueIdentifier
    title: string,
    description: string
    remarks?: string
}
/**
 * Business Mission Statement.
 */
type MissionStatement = string
/**
 * Organization Security Policy.
 */
export interface OrganizationSecurityPolicy {
    uuid: OSPUniversallyUniqueIdentifier;
    functions: BusinessFunction[];
    mission: MissionStatement
}
