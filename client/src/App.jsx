import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Jobs from './components/Jobs'
import JobsPage from './components/JobsPage'
import Experts from './components/Experts'
import ExpertsPage from './components/ExpertsPage'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {

  return (
    <div>

      <Header/>

      <Routes>
      <Route
          path="/"
          element={
            <>
              <Jobs />
              <Experts />
            </>
          }
        />
        <Route path="/about" element={<About />}/>
        <Route path="/jobs" element={<JobsPage />}/>
        <Route path="/experts" element={<ExpertsPage />}/>
      </Routes>
      
      <Info />
      <Footer/>
      
    </div>
  )
}

export default App
