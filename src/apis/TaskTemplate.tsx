import service from "./Service";

export const getTaskTemplates = (taskTemplateId: number) => {
    return service({
        url: `/task-template?taskTemplateId=${taskTemplateId}`,
        method: 'GET',
    });
}

export const updateTaskTemplate = (data: any) => {
    return service({
        url: `/task-template`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

