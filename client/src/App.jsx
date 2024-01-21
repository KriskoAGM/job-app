import { AuthProvider } from './contexts/authContext';


import Header from './components/header/Header';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/animatedRoutes/animatedRoutes';


function App() {

  return (

    <AuthProvider>
      <div>

        <Header />
        <AnimatedRoutes/>
        <Info />
        <Footer />

      </div>
    </AuthProvider>


  )
}

export default App
