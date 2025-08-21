import service from "./Service";

export const getManageUsers = (
    name: string | null,
    role: string | null,
    email: string | null,
    page: number | null,
    pageSize: number | null
) => {
    return service({
        url: `/manage-users?name=${name === null ? '' : name}&role=${role === null ? '' : role}&email=${email === null ? '' : email}&page=${page === null ? '' : page}&pageSize=${pageSize === null ? '' : pageSize}`,
        method: 'GET',
    });
}

export const getManageUserDetail = (id: string) => {
    return service({
        url: `/manage-users/${id}`,
        method: 'GET',
    });
}

export const createManageUser = (data: any) => {
    return service({
        url: `/manage-users`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const updateManageUser = (data: any, id: string) => {
    return service({
        url: `/manage-users/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const deleteManageUser = (id: string) => {
    return service({
        url: `/manage-users/${id}`,
        method: 'DELETE',
    });
}

export const getMe = () => {
    return service({
        url: `/manage-users/me?locationPath=${window.location.pathname}`,
        method: 'GET',
    });
}