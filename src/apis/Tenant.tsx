import service from "./Service";

export const getAllTenant = (s: string | null = null, antisocialCheckNone: boolean | null = null) => {
    if (s === null && antisocialCheckNone === null) {
        return service({
            url: '/tenants',
            method: 'GET',
        });
    }

    let query = '';
    if (s) {
        query += `s=${s}`;
    }
    if (antisocialCheckNone !== null && antisocialCheckNone) {
        if (query !== '') {
            query += '&';
        }
        query += `antisocialCheckNone=true`;
    }
    return service({
        url: `/tenants?${query}`,
        method: 'GET',
    });
}

export const updateAntisocialCheck = (data: any, id: number) => {
    return service({
        url: `/tenants/${id}/antisocial-check`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const getTenantDetail = (id: number) => {
    return service({
        url: `/tenants/${id}`,
        method: 'GET',
    });
}

export const GetPendingTenant = (id: number) => {
    return service({
        url: `/tenants/${id}/pending`,
        method: 'GET',
    });
}

export const checkedPendingTenant = (tenantId: number, id: number) => {
    return service({
        url: `/tenants/${tenantId}/pending/${id}`,
        method: 'POST'
    });
}

export const updateMemo = (data: any, id: number) => {
    return service({
        url: `/tenants/${id}/memo`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const getTenantContracts = (keyOnly: boolean) => {
    return service({
        url: `/tenants/contracts?keyOnly=${keyOnly}`,
        method: 'GET',
    });
}

export const getTenantSubscriptions = (id: number) => {
    return service({
        url: `/tenants/${id}/contracts`,
        method: 'GET',
    });
}

export const getTenantSubscriptionDetails = (tenantId: number, id: number) => {
    return service({
        url: `/tenants/${tenantId}/contracts/${id}`,
        method: 'GET',
    });
}

export const getTenantSubscriptionHistory = (tenantId: number, contractId: number) => {
    return service({
        url: `/tenants/${tenantId}/contracts/${contractId}/history`,
        method: 'GET',
    });
}

export const getTenantSubscriptionHistoryDetail = (tenantId: number, contractId: number, historyId: number) => {
    return service({
        url: `/tenants/${tenantId}/contracts/${contractId}/history/${historyId}`,
        method: 'GET',
    });
}

export const getActivities = (id: number) => {
    return service({
        url: `/tenants/${id}/activities`,
        method: 'GET',
    });
}

export const getInvoices = (id: number) => {
    return service({
        url: `/tenants/${id}/invoices`,
        method: 'GET',
    });
}

export const getInvoiceDetail = (id: number, invoiceId: string) => {
    return service({
        url: `/tenants/${id}/invoices/${invoiceId}`,
        method: 'GET',
    });
}

export const getInvoicePdf = (id: number, invoiceId: string) => {
    return service({
        url: `/tenants/${id}/invoices/${invoiceId}/pdf`,
        method: 'GET',
        responseType: "blob",
    });
}

export const getContractOptions = (id: number, queryParams: string) => {
    return service({
        url: `/tenants/${id}/contracts/options?${queryParams}`,
        method: 'GET',
    });
}

export const createContractOptionsComment = (id: number, data: any) => {
    return service({
        url: `/tenants/${id}/contracts/options`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateDeliveryDate = (tenantId: number, contractId: number, data: any) => {
    return service({
        url: `/tenants/${tenantId}/contracts/${contractId}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}