import { BackMatter, ControlImplementation, ImportProfile, PublicationMetadata, SystemCharacteristics, SystemImplementation } from "../shared";
/**
 * A globally unique identifier for this ssp instance. This UUID should be changed when this document is revised.
 */
export declare type SystemSecurityPlanUniversallyUniqueIdentifier = string;
/**
 * A system security plan, such as those described in NIST SP 800_18
 */
export interface SystemSecurityPlan {
    uuid: SystemSecurityPlanUniversallyUniqueIdentifier;
    metadata: PublicationMetadata;
    import_profile: ImportProfile;
    system_characteristics: SystemCharacteristics;
    system_implementation: SystemImplementation;
    control_implementation: ControlImplementation;
    back_matter?: BackMatter;
}
