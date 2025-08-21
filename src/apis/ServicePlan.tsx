import service from "./Service";

export const getServiceList = () => {
    return service({
        url: `/service`,
        method: 'GET',
    });
}

export const createService = (data: any) => {
    return service({
        url: `/service`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateService = (data: any, id: number) => {
    return service({
        url: `/service/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const updateServiceOrder = (data: any, id: number) => {
    return service({
        url: `/service/${id}/order`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const getPlanList = (id: number) => {
    return service({
        url: `/service/${id}/plan`,
        method: 'GET',
    });
}


export const createPlan = (data: any, id: number) => {
    return service({
        url: `/service/${id}/plan`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updatePlan = (data: any, serviceId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const updatePlanOrder = (data: any, serviceId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${id}/order`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const getOptionList = (serviceId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${id}/option`,
        method: 'GET',
    });
}

export const createOption = (data: any, serviceId: number, planId: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateOption = (data: any, serviceId: number, planId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const updateOptionOrder = (data: any, serviceId: number, planId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${id}/order`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}


export const getOptionPlanList = (serviceId: number, planId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${id}/plan`,
        method: 'GET',
    });
}

export const createOptionPlan = (data: any, serviceId: number, planId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${id}/plan`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateOptionPlan = (data: any, serviceId: number, planId: number, optionId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${optionId}/plan/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const updateOptionPlanOrder = (data: any, serviceId: number, planId: number, optionId: number, id: number) => {
    return service({
        url: `/service/${serviceId}/plan/${planId}/option/${optionId}/plan/${id}/order`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}