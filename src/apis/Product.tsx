import service from "./Service";

export const getProductDetail = (id: number) => {
    return service({
        url: `/products/${id}`,
        method: 'GET',
    });
}
