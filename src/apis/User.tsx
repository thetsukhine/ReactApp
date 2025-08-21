import service from "./Service";

export const login = (email: string, password: string) => {
    const data = {
        email: email,
        password: password,
    }
    return service({
        url: `/users/login?useCookies=true`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const logout = async () => {
    return await service({
        url: `/users/logout`,
        method: 'POST',
        data: '{}',
    }).catch((_) => {
    });
}