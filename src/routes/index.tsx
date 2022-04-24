import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'
import { Person } from '../pages/Person'

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}
