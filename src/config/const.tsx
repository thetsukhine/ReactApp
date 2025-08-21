export const RoutPaths = {
    Current: `${process.env.REACT_APP_BASE_URL}/`,
    Login: `${process.env.REACT_APP_BASE_URL}/login`,
    Dashboard: `${process.env.REACT_APP_BASE_URL}/dashboard`,
    Notice: `${process.env.REACT_APP_BASE_URL}/notice`,
    CreateNotice: `${process.env.REACT_APP_BASE_URL}/create-notice`,
    NoticeDetail: `${process.env.REACT_APP_BASE_URL}/notice/:id`,
    Tenant: `${process.env.REACT_APP_BASE_URL}/tenant`,
    Service: `${process.env.REACT_APP_BASE_URL}/service`,
    Users: `${process.env.REACT_APP_BASE_URL}/tenant/user`,
    ManageUsers: `${process.env.REACT_APP_BASE_URL}/manage-users`,
    ManageUsers1: `${process.env.REACT_APP_BASE_URL}/manage-users111`,
    CreateManageUser: `${process.env.REACT_APP_BASE_URL}/create-manage-user`,
    Role: `${process.env.REACT_APP_BASE_URL}/role`,
    CreateRole: `${process.env.REACT_APP_BASE_URL}/create-role`,
    TaskManage: `${process.env.REACT_APP_BASE_URL}/task-manage`,
    TaskList: `${process.env.REACT_APP_BASE_URL}/task`,
    CreateTask: `${process.env.REACT_APP_BASE_URL}/create-task`,
    TaskDetail: `${process.env.REACT_APP_BASE_URL}/task/:id`,
    Finance: `${process.env.REACT_APP_BASE_URL}/finance`,
    LicenseIssue: `${process.env.REACT_APP_BASE_URL}/license`,
}

export const AssetPaths = {
    NavbarBrandLogo: "https://applippli.co.jp/a-ppli2/wp-content/themes/v6/img/h_logo_color.png?170098"
}

export const UIElements = {
    Hyphen: '―',
    UndefinedComment: 'コメント未設定',
    SearchAll: 'all',
}

export const License = {
    ActiveState: { // 有効状態
        OuterPeriod: "0", // 期限外
        Active: "1" // 有効
    }
}