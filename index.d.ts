export * from './baseline-profile'; // re-export all of its exports
export * from "./catalog"
export * from "./system-security-plan"
export * from "./assessment-results"
export * from "./assessment-plan"
export * from "./plan-of-action-and-milestones"

export default interface Oscal {
    profile: Profile,
    catalog?: Catalog;
    systemSecurityPlan?: SystemSecurityPlanSSP;
    assessmentPlan?: SecurityAssessmentResultsSAR;
    assessmentResults?: SecurityAssessmentPlanSAP;
    planOfActionAndMilestones?: PlanOfActionAndMilestonesPOAM;
}
