import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './pages/Frontend'
export default function Index() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Frontend/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
