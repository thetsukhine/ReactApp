import service from "./Service";

export const getLicenses = (queryParams: string) => {
    return service({
        url: `/license?${queryParams}`,
        method: 'GET',
    });
}
