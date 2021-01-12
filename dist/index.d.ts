import { SystemSecurityPlan } from "./ssp";
import { PlanOfActionAndMilestones } from "./poam";
import { Profile } from "./profile";
import { Catalog } from "./catalog";
import { SecurityAssessmentResults } from "./assessment_results";
import { SecurityAssessmentPlan } from "./assessment_plan";
export * from "./shared";
export interface oscal {
    sssp: SystemSecurityPlan;
    poam: PlanOfActionAndMilestones;
    profile: Profile;
    catalog: Catalog;
    sar: SecurityAssessmentResults;
    sap: SecurityAssessmentPlan;
}
