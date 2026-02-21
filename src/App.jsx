import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Empowerment from './pages/Empowerment'
import PersonalEmpowerment from './pages/PersonalEmpowerment'
import Anxiety from './pages/Anxiety'
import SocialBullying from './pages/SocialBullying'
import WeightLoss from './pages/WeightLoss'
import CareerCoaching from './pages/CareerCoaching'
import LandingPage from './pages/LandingPage'

const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/empowerment" element={<Empowerment />} />
          <Route path="/personal-empowerment" element={<PersonalEmpowerment />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/social-bullying" element={<SocialBullying />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/career-coaching" element={<CareerCoaching />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
