import service from "./Service";
import {NoticeCategory, NoticeStatus} from "../models/Notice";

export const getNotice = (
    target: string | number | null,
    category: NoticeCategory | null,
    title: string | null,
    status: NoticeStatus | null,
    publishFrom: string | null,
    publishTo: string | null,
    page: number,
    pageSize: number,
) => {
    return service({
        url: `/notices?target=${target === null ? '' : target}&category=${category === null ? '' : category}&title=${title === null ? '' : title}&status=${status === null ? '' : status}&publishFrom=${publishFrom === null ? '' : publishFrom}&publishTo=${publishTo === null ? '' : publishTo}&page=${page}&pageSize=${pageSize}`,
        method: 'GET',
    });
}

export const getDashboardNotice = () => {
    return service({
        url: `/notices/dashbord`,
        method: 'GET',
    });
}

export const createNotice = (data: any) => {
    return service({
        url: `/notices`,
        method: 'POST',
        data: JSON.stringify(data)
    });
}

export const uploadNoticeFile = (data: any, id: number) => {
    return service({
        url: `/notices/${id}/file`,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    });
}

export const updateNotice = (data: any, id: number) => {
    return service({
        url: `/notices/${id}`,
        method: 'PUT',
        data: JSON.stringify(data)
    });
}

export const deleteNotice = (id: number) => {
    return service({
        url: `/notices/${id}`,
        method: 'DELETE',
    });
}

export const deleteNoticeFile = (noticeId: number, id: number) => {
    return service({
        url: `/notices/${noticeId}/file/${id}`,
        method: 'DELETE',
    });
}

export const getNoticeDetail = (id: number) => {
    return service({
        url: `/notices/${id}`,
        method: 'GET',
    });
}

export const getNoticeFile = (noticeId: number, id: number) => {
    return service({
        url: `/notices/${noticeId}/file/${id}`,
        method: 'GET',
        responseType: 'blob'
    });
}


