import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from '../pages/Home/page'
import Animais from '../pages/Animais/page'
import Apoiadores from '../pages/Apoiadores/page'
import Doar from '../pages/Doar/page'
import Login from '../pages/Login/page'


function index() {

    return (

        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/animais' element={<Animais />} />
                    <Route path='/apoiadores' element={<Apoiadores />} />
                    <Route path='/doar' element={<Doar />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>

        </>
    )
}

export default index