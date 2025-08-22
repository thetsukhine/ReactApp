export interface SubscriptionInfo {
    id: number;
    tenantId: number;
    companyName: string;
    applicationDate: string;
    deliveryDate: string | null;
    service: SubscriptionService;
    options: SubscriptionOption[];
    isActive: boolean;
    isCancelled: boolean;
    nextDueDate: string;
    invoiceStatus: string | null;
    nextPaymentAmount: number;
    scheduledCancellationDate: string | null;
    serviceAvailableStartDate: string;
    cancellationNotice: string | null;
    nextPaymentInfo: SubscriptionNextPaymentInfoResponse | null;
    optionDetails?: LicenseGetResponse[];
    optionCloudDetails?: CloudGetDetailResponse[];
}

export interface SubscriptionService {
    id: number;
    serviceName: string;
    planName: string;
    planId: number;
    cycle: SubscriptionCycle;
    quantity: number;
}

export enum SubscriptionType {
    APPLICATION,
    CHANGE,
    CANCELLATION
}

export interface SubscriptionHistory {
    id: number;
    createdAt: string;
    historyType: SubscriptionType;
    summary: string;
    comment: string | null;
}

export interface SubscriptionHistoryOptionChangeInfo {
    id: number | null;
    optionPlanId: number;
    quantity: number;
    isCharge: boolean;
    cycle: SubscriptionCycle;
    optionName: string;
    optionPlanName: string;
}

export interface ContractHistoryOptionInfo {
    before: SubscriptionHistoryOptionChangeInfo | null;
    after: SubscriptionHistoryOptionChangeInfo[];
}

export enum ContractHistoryType {
    Application, // 申込
    Change,      // 変更
    Cancellation // 解約
}

export interface SubscriptionServiceChangeInfo {
    id: number;
    planId: number;
    serviceName: string;
    planName: string;
    quantity: number;
    cycle: SubscriptionCycle;
    comment: string | null;
    nextDueDate: string | null;
}

export interface SubscriptionOption {
    id: number;
    optionName: string;
    optionPlanName: string;
    optionPlanId: number;
    cycle: SubscriptionCycle;
    quantity: number;
    comments: OptionComment[];
    tagId: number | null;
    isInitialOnly: boolean;
}

export interface OptionComment {
    id: number | null;
    comment: string;
}

export enum SubscriptionCycle {
    MONTHLY,
    YEARLY,
    YEARLY2,
    YEARLY3
}

export interface SubscriptionNextPaymentDetailResponse {
    name: string;
    quantity: number;
    countUnit: string;
    amount: number;
    totalAmount: number;
}

export interface SubscriptionNextPaymentInfoResponse {
    items: SubscriptionNextPaymentDetailResponse[];
    totalAmount: number;
    tax: number;
}

export interface LicenseGetResponse {
    subscriptionId: number;
    optionPlanId: number;
    licenseId: number;
    licenseKey?: string;
    expiresAt?: string;
    userComment?: string;
}

export interface CloudGetDetailResponse {
    groupKey?: string;
    subscriptionId?: number;
    optionPlanId?: number;
    detailId?: number;
    detail?: CloudGetExtraResponse;
}

export interface CloudGetExtraResponse {
    userNo?: number;
    ipAddress?: string;
    comment?: string;
}


