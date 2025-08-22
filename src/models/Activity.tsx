export interface ActivityInfo {
    id: number;
    tenantId: number;
    tenantName: string;
    event: string;
    title: string;
    content: string;
    service: ActivityService | null;
    options: ActivityOption[];
    description: string | null;
    createdAt: string;
}

export interface ActivityService {
    id: number;
    serviceName: string;
    planName: string;
}

export interface ActivityOption {
    id: number;
    optionName: string;
    optionPlanName: string;
}