import {SubscriptionCycle} from "./Subscription";
import {ReactNode} from "react";

export interface FinanceResponse {
    financeResponseCustomers: FinanceResponseCustomer[];
    financeResponseSummaryDetails: FinanceResponseDetail[];
}

export interface FinanceResponseCustomer {
    customerId: number;
    companyName: string;
    serviceName: string;
    cycle: SubscriptionCycle | null;
    financeResponseDetails: FinanceResponseDetail[];
}

export interface FinanceResponseDetail {
    targetDate: string;
    stripeMinyukin: number;
    stripeNyukin: number;
    stripeZandaka: number;
    uriageSyoki: number;
    uriageMaeukeUriage: number;
    uriageUriage: number;
    maeukeHassei: number;
    maeukeZandaka: number;
}

export interface FinanceCustomer {
    customerId: ReactNode;
    companyName: ReactNode;
    serviceName: ReactNode;
    cycle: string;
    financeResponseDetails: FinanceDetail[];
}

export interface FinanceDetail {
    targetDate: string;
    stripeMinyukin: string;
    stripeNyukin: string;
    stripeZandaka: string;
    uriageSyoki: string;
    uriageMaeukeUriage: string;
    uriageUriage: string;
    maeukeHassei: string;
    maeukeZandaka: string;
}

