export interface TenantInfo {
    id: number;
    customerId: number;
    companyName: string;
    phoneNumber: string;
    postalCode: string;
    prefectures: string;
    address: string;
    representativeName: string;
    industry: string;
    corporation: string;
    numberOfEmployees: string;
    capital: string;
    contactPerson: string;
    memo: string;
    isAntisocialChecked: boolean;
    isAnyPending: boolean;
}

export interface PendingTenantInfo {
    id: number;
    tenantId: number;
    companyName: string;
    phoneNumber: string;
    postalCode: string;
    prefectures: string;
    address: string;
    representativeName: string;
}
