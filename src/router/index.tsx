import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LikeUpdate from './../pages/like-update'
import TestRedux from './../pages/test-redux'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LikeUpdate/>} />
        <Route path='/LikeUpdate' element={<LikeUpdate/>} />
        <Route path='/TestRedux' element={<TestRedux/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;