import {BrowserRouter , Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'



function app (){
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<h1>Home Page </h1>} />
    <Route path='/login' element={< LoginPage />} />
    <Route path='/register' element={< LoginPage />} />
    <Route path='/tasks' element={<h1>Tasks Page </h1>} />
    <Route path='/add-task' element={<h1>New Page </h1>} />
    <Route path='/tasks/:id' element={<h1>Update Page </h1>} />
    <Route path='/profile' element={<h1>Profile </h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default app