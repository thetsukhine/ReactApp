import service from "./Service";

export const getTasks = (
    taskTemplateId: number | string | null,
    name: string | null,
    tenant: string | number | null,
    role: string | number | null,
    status: string | number | null,
    deadlineFrom: string | null,
    deadlineTo: string | null,
    page: number,
    pageSize: number
) => {
    return service({
        url: `/tasks?tenant=${tenant === null ? '' : tenant}&taskTemplateId=${taskTemplateId === null ? '' : taskTemplateId}&name=${name === null ? '' : name}&role=${role === null ? '' : role}&status=${status === null ? '' : status}&deadlineFrom=${deadlineFrom === null ? '' : deadlineFrom}&deadlineTo=${deadlineTo === null ? '' : deadlineTo}&page=${page}&pageSize=${pageSize}`,
        method: 'GET',
    });
}

export const getDashboardTasks = () => {
    return service({
        url: `/tasks/dashbord`,
        method: 'GET',
    });
}

export const getTaskDetail = (id: number) => {
    return service({
        url: `/tasks/${id}`,
        method: 'GET',
    });
}

export const createTask = (data: any) => {
    return service({
        url: `/tasks`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateTask = (data: any, id: number) => {
    return service({
        url: `/tasks/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const getActivity = () => {
    return service({
        url: `/tasks/activities?limit=3`,
        method: 'GET',
    });
}

