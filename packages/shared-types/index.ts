export enum CloudProvider {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  VMWARE = "VMWARE",
  ONPREM = "ONPREM"
}

export enum LandingZoneStatus {
  READY = "READY",
  PROVISIONING = "PROVISIONING",
  DRIFTED = "DRIFTED",
  ERROR = "ERROR"
}

export interface LandingZone {
  id: string;
  name: string;
  provider: CloudProvider;
  region: string;
  status: LandingZoneStatus;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  landingZoneId: string;
  name: string;
  providerId: string; // AWS Account ID, Azure Subscription ID, etc.
  type: "PRODUCTION" | "SANDBOX" | "STAGING";
  status: "ACTIVE" | "PENDING" | "SUSPENDED";
}

export interface ComplianceIssue {
  id: string;
  resourceId: string;
  policyId: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  message: string;
  detectedAt: string;
}

export interface CostSummary {
  period: string;
  totalCost: number;
  currency: string;
  byService: Record<string, number>;
  byAccount: Record<string, number>;
}
