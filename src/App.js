import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import Registration from './pages/Registration'; 
// import Navbar from './components/navbar';
// import Skills from './components/skills';
// import Carousel from './components/carousel';
// import About from './components/about';
// import Kpis from './components/kpis';
// import Teaser from './components/teaser';
// import Events from './components/events';
// import Register from './components/register';
// import Footer from './components/footer';

function App() {
  return (
    <>
    {/* <Navbar />
    <Carousel />
    <About />
    <Kpis />
    <Teaser />
    <Skills />
    <Events />
    <Register />
    <Footer /> */}
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/registration' element={<Registration />} /> 
      </Routes>
    </>
  );
}

export default App;
