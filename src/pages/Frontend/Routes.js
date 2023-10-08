import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stickywall from './Stickywall/Stickywall'
import Today from './Today/Today'
import Calender from './Calender/Calender'
import UpComing from './Upcoming/Upcoming'
import NoPage from './NoPage/NoPage'
import Todos from './Todos/Todos'
import Courses from './Courses'
import AddCourses from './AddCourses'
export default function Index() {
  return (
    <>
      <Routes>
                <Route path='/' element={<Stickywall/>} />
                <Route path='/today' element={<Today/>} />
                <Route path='/calender' element={<Calender/>} />
                <Route path='/upcoming' element={<UpComing/>} />
                <Route path='/todos' element={<Todos/>} />
                <Route path='/courses' element={<Courses/>} />
                <Route path='/add-courses' element={<AddCourses/>} />
                <Route path='*' element={<NoPage/>} />
      </Routes>
    </>
  )
}
