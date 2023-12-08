import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext';

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import About from './components/about/About'
import Jobs from './components/jobs/Jobs'
import JobsList from './components/jobs/JobsList'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'
import CreateJob from './components/jobs/CreateJob'
import JobDetails from './components/jobs/JobDetails'
import EditJob from './components/jobs/EditJob';
import AuthGuard from './components/guards/AuthGuard';
import Favorites from './components/favorites/Favorites';

function App() {

  return (

    <AuthProvider>
      <div>

        <Header />

        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:jobId" element={<JobDetails />} />
          <Route element={<AuthGuard />}>
            <Route path="/details/:jobId/edit" element={<EditJob />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/create" element={<CreateJob />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>

        <Info />
        <Footer />

      </div>
    </AuthProvider>


  )
}

export default App
