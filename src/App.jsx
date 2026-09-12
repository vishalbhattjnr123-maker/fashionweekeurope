import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelProfile from './pages/ModelProfile';
import FashionWeek from './pages/FashionWeek';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Casting from './pages/Casting';
import BecomeAModel from './pages/BecomeAModel';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-offwhite font-sans text-brand-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelProfile />} />
            <Route path="/fashion-week" element={<FashionWeek />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/casting" element={<Casting />} />
            <Route path="/apply" element={<BecomeAModel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
