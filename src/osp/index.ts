import { PublicationMetadata, ImportSystemSecurityPlan, SystemIdentification, BackMatter } from "src/shared";

export type OSPUniversallyUniqueIdentifier = string
/**
 * Organization Security Policy.
 */
export interface BusinessProcess {
    title: string,
    description: string
    responsible_roles: string
}

export interface OrganizationSecurityPolicy {
    uuid: OSPUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_ssps?: ImportSystemSecurityPlan[];
    systems?: SystemIdentification[];
    processes: BusinessProcess[];
    back_matter?: BackMatter;
}