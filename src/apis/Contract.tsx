import service from "./Service";

export const getSubscriptionSummary = () => {
    return service({
        url: `/contracts/summary`,
        method: 'GET',
    });
}