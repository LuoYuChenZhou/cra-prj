import { Button } from 'antd'
import store from '@/store'

function App() {
  const doShow = () => {
    store.dispatch({
      type: 'PMS_SetUserInfo',
      userInfo: [123]
    })
  }

  return (
    <Button onClick={doShow} type="primary">这是按钮</Button>
  );
}

export default App;