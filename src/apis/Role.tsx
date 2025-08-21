import service from "./Service";

export const getRoles = (
    name: string | null,
    description: string | null,
    roleVisibleMenus: string | null,
    page: number | null,
    pageSize: number | null
) => {
    return service({
        url: `/roles?name=${name === null ? '' : name}&description=${description === null ? '' : description}&roleVisibleMenus=${roleVisibleMenus === null ? '' : roleVisibleMenus}&page=${page === null ? '' : page}&pageSize=${pageSize === null ? '' : pageSize}`,
        method: 'GET',
    });
}

export const getAllRoles = () => {
    return service({
        url: `/roles`,
        method: 'GET',
    });
}

export const getRoleDetail = (id: string) => {
    return service({
        url: `/roles/${id}`,
        method: 'GET',
    });
}

export const getRoleUsers = (id: string) => {
    return service({
        url: `/roles/${id}/users`,
        method: 'GET',
    });
}

export const createRole = (data: any) => {
    return service({
        url: `/roles`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateRole = (data: any, id: string) => {
    return service({
        url: `/roles/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const deleteRole = (id: string) => {
    return service({
        url: `/roles/${id}`,
        method: 'DELETE',
    });
}