import {RoleInfo} from "./Role";

export interface User {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    roleId: string
    department?: string;
    phoneNumber1?: string;
    phoneNumber2?: string;
    phoneNumber3?: string;
    tenantName?: string;
    isUserRole?: boolean;
    IsNeedPwdChange: boolean;
}

export interface ManageUserInfo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: RoleInfo[];
}

export interface PagedManageUserResponse {
    users: ManageUserInfo[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
}