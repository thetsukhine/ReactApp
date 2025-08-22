export interface TaskInfo {
    id: number;
    tenantId: number;
    tenantName: string;
    taskTemplateId: number;
    summary: string;
    status: TaskStatus;
    priority: TaskPriority;
    deadline: string;
    note: string;
    taskRoles: TaskRoleInfo[];
    subscriptionId: number | null;
}

export interface TaskTemplateInfo {
    id: number;
    taskTemplateId: number;
    summary: string;
    status: TaskStatus | null;
    priority: TaskPriority | null;
    deadline: string;
    note: string;
    taskRoles: TaskRoleInfo[];
}

export interface TaskRoleInfo {
    id: string;
    name: string;
}

export interface PagedTaskResponse {
    tasks: TaskInfo[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
}

export enum TaskStatus {
    Unprocessed, // 未着手
    Processing, // 進行中
    Completed // 完了
}

export enum TaskPriority {
    Low, // 低
    Medium, // 中
    High // 高
}
