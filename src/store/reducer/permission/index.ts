// 本文件放置权限相关的reducer
import { IUserInfo, IStore } from './../../interface';
const _ = require('lodash');

// funObj中，存放处理函数
const funObj: any = {
  PMS_SetUserInfo: (state: IStore, action: { type: string, userInfo: IUserInfo }) => { // 保存用户信息
    action = _.omit(action, ['type']);
    return { ...state, ...action }
  }
}

export default function (state: IStore | null = null, action: any) {
  // 不能使用 funObj[PMS_SetUserInfo]的形式，所以只能一个个switch了
  switch (action.type) {
    case 'PMS_SetUserInfo':
      return funObj.PMS_SetUserInfo(state, action);
    default:
      return state;
  }
}