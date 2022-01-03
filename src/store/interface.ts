export interface IStore {
    userInfo: IUserInfo
}

export interface IUserInfo {
    id: string;
    name: string;
    sex?: 'female' | 'male' | 'other';
    age?: number;
    pmsInfo: IPMSInfo;
}

// 权限信息
export interface IPMSInfo {
    pmsMenu: MenuInfo[]; // 用户能够访问的菜单列表
    pmsRole: RoleInfo[]; // 用户对应的角色列表
}

// 菜单类型
export interface MenuInfo {
    menuId: string;
    menuType: string;
    menuIcon?: string;
    menuPath: string;
}

// 角色类型
export interface RoleInfo {
    roleId: string;
    roleName: string;
    roleType: 'ADMIN' | 'NORMAL';
}
