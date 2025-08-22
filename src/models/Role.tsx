export interface RoleInfo {
    id: string;
    name: string;
    description: string;
    deletable: boolean;
    roleVisibleMenus: RoleVisibleMenuInfo[];
    userCount: number;
}

export interface RoleVisibleMenuInfo {
    id: number;
    menu: string;
    menuName: string;
}

export interface PagedRoleResponse {
    roles: RoleInfo[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
}

export interface RoleMenuInfo {
    name: string;
    value: string;
}

export const RoleMenus: RoleMenuInfo[] = [
    {name: "ユーザー管理", value: "user"},
    {name: "権限管理", value: "role"},
    {name: "会社情報", value: "company"},
    {name: "サービス管理", value: "service"},
    {name: "タスク一覧", value: "task-list"},
    {name: "タスク作成", value: "task-create"},
    {name: "お知らせ一覧", value: "notice-list"},
    {name: "お知らせ作成", value: "notice-create"},
]

