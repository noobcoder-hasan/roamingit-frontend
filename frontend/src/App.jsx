import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./pages/Contact'));


function App() {
  return (
    <Router>
      <div className="bg-overlay" />
      <Navbar />
      <main>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Destinations route removed */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Destinations page can be added later; using Home section for now */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;