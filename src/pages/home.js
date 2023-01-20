import Navbar from '../components/navbar';
import Skills from '../components/skills';
import Carousel from '../components/carousel';
import About from '../components/about';
import Kpis from '../components/kpis';
import Teaser from '../components/teaser';
import Events from '../components/events';
import Register from '../components/register';
import Footer from '../components/footer';

function home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <About />
            <Kpis />
            <Teaser />
            <Skills />
            <Events />
            <Register />
            <Footer />
        </>
    );
}

export default home;