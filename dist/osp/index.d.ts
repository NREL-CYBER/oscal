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
 * Organization Security Policy.
 */
export interface OrganizationSecurityPolicy {
    uuid: OSPUniversallyUniqueIdentifier;
    functions: BusinessFunction[];
}
