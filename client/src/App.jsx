import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import Jobs from './components/jobs/Jobs'
import JobsList from './components/jobs/JobsList'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import CreateJob from './components/jobs/CreateJob'
import JobDetails from './components/jobs/JobDetails'

function App() {

  return (

    <div>

      <Header />

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateJob />} />
        <Route path="/details/:jobId" element={<JobDetails />} />
      </Routes>

      <Info />
      <Footer />

    </div>

  )
}

export default App
