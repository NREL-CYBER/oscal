import { PublicationMetadata, BackMatter } from "src/shared";
export declare type OSPUniversallyUniqueIdentifier = string;
export declare type BusinessProcessUniversallyUniqueIdentifier = string;
/**
 * Organization Security Policy.
 */
export interface BusinessProcess {
    uuid: BusinessProcessUniversallyUniqueIdentifier;
    title: string;
    description: string;
}
/**
 * Organization Security Policy.
 */
export interface OrganizationSecurityPolicy {
    uuid: OSPUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    processes: BusinessProcess[];
    back_matter?: BackMatter;
}
