import service from "./Service";

export const getTagsByCategory = (category: string) => {
    return service({
        url: `/tags?category=${category}`,
        method: 'GET',
    });
}