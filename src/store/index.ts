import { createStore } from 'redux';
import Reducers from './reducer';
import { IStore } from './interface'

const initialState: IStore = {
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
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

export default store;