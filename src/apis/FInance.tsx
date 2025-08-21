import service from "./Service";

export const getFinances = (start: string, pageSize: number, tenantId: number | null, serviceId: number | null, showDetail: boolean) => {
    return service({
        url: `/finances?start=${start}&pageSize=${pageSize}${tenantId ? `&tenantId=${tenantId}` : ''}${serviceId ? `&serviceId=${serviceId}` : ''}${showDetail ? '&showDetail=true' : '&showDetail=false'}`,
        method: 'GET',
    });
}