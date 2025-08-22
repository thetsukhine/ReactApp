export interface InvoiceItem {
    invoiceId: string;
    number: string;
    created: string;
    priceIds: InvoiceItemPriceDetail[];
    amountPaid: number;
    amountDue: number;
    status: string;
    planName: string;
    serviceName: string;
    attempted: boolean;
    dueDate: string | null;
    invoiceStatus: BillingInvoiceStatus;
}

export interface InvoiceItemPriceDetail {
    priceId: string;
}

export interface BillingDetailResponse {
    number: string;
    created: string;
    amountPaid: number;
    amountDue: number;
    paymentMethod: string;
    status: string;
    hostedInvoiceUrl: string | null;
    lineItems: LineItemDetail[];
    optionLineItems: LineItemDetail[];
    invoiceStatus: BillingInvoiceStatus;
}

export interface LineItemDetail {
    detailPriceId: string;
    detailCycleCount: number;
    detailAmount: number;
    detailSubtotal: number;
    detailQuantity: number;
    detailServiceName: string;
    detailPlanName: string;
    detailOptionName: string | null;
    beforeDiscountAmount: number;
    discountRate: number;
    discountAmount: number;
    cycle : ProductBillingCycle;
}

export enum BillingInvoiceStatus {
    Draft, // 決済予定
    Open, // 決済失敗
    Paid, // 決済済
    Void, // キャンセル
    Uncollectible, // 回収不能
    Unknown // 不明
}

export enum ProductBillingCycle {
    INITIAL,
    MONTHLY,
    YEARLY,
    YEARLY2,
    YEARLY3
}
