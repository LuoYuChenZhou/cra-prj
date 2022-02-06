import { createStore } from 'redux';
import Reducers from './reducer';
import { IStore } from './interface'

export const initialState: IStore = {
    userInfo: {
        id: '',
        name: '',
        pmsInfo: {
            pmsMenu: [],
            pmsRole: []
        },
    }
}

const store = createStore(Reducers);

// 通过unsubscribe可以解除订阅
// eslint-disable-next-line
export const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

export default store;