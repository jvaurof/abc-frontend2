import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
