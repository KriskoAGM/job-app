import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import Jobs from './components/jobs/Jobs'
import JobsPage from './components/jobs/JobsPage'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>

      <Header />

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Info />
      <Footer />

    </div>
  )
}

export default App
