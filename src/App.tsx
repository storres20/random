import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Nationalities } from './pages/Nationalities'
import { Users } from './pages/Users'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/users"
          element={<Nationalities />}
        />
        <Route
          path="/users/nationality/:id"
          element={<Users />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
