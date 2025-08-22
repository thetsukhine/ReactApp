import {NoticeFile} from "./File";

export interface NoticeInfo {
    id: number;
    category: NoticeCategory;
    target: NoticeTarget;
    tenantId: number | null;
    tenantName: string | null;
    title: string | null;
    content: string | null;
    publishAt: string | null;
    createdAt: string;
    updatedAt: string;
    status: NoticeStatus;
    files: NoticeFile[];
}

export enum NoticeTarget {
    AllUser, // 全利用者
    AllAdmin, // 全管理側
    SpecificCompany, // 特定の会社
}

export enum NoticeCategory {
    Notice, // お知らせ
    Information, // アプリップリからのご案内
}

export enum NoticeStatus {
    Draft, // 下書き
    Waiting, // 送信待ち
    Sending, // 送信中
    Sent, // 送信済み
}

export interface PagedNoticeResponse {
    notices: NoticeInfo[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
}

