import { Routes, Route, useLocation } from 'react-router';

import Login from '../login/Login'
import Register from '../register/Register'
import Logout from '../logout/Logout'
import About from '../about/About'
import Jobs from '../jobs/Jobs'
import JobsList from '../jobs/JobsList'
import CreateJob from '../jobs/CreateJob'
import JobDetails from '../jobs/JobDetails'
import EditJob from '../jobs/EditJob';
import AuthGuard from '../guards/AuthGuard';
import Favorites from '../favorites/Favorites';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    )
};

export default AnimatedRoutes;