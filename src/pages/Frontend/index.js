import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Stickywall from './Stickywall/Stickywall'
import Today from './Today/Today'
import Upcoming from './Upcoming/Upcoming'
import NoPage from './NoPage/NoPage'
import Calendar from './Calender'
import Sidebar from '../../components/Sidebar/Sidebar'
import Todos from './Todos/Todos'
export default function Index() {
  return (
    <>
         <Sidebar />
            {/* <Routes>
                <Route path='/' element={<Stickywall/>} />
                <Route path='/today' element={<Today/>} />
                <Route path='/calender' element={<Calendar/>} />
                <Route path='/upcoming' element={<Upcoming/>} />
                <Route path='/todos' element={<Todos/>} />
                <Route path='*' element={<NoPage/>} />


            </Routes>
         */}
    </>
  )
}
