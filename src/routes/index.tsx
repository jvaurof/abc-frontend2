import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Register } from '../pages/Register'
import { Person } from '../pages/Person'

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}
