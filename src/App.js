
import Header from './Components/Head/Header';
import './App.css';
import Home from './Components/Hero/Home';
import Contact from './Components/Contact/Contact';
 
import Features from './Components/Features/Features';
import Update from './Components/Update/Update';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from  './Components/Testimonial/Testimonial'
import Footer from './Components/Footer';
import Resume from './Components/Resume/Resume'
import Blog from './Components/Blog/Blog'
const App = () => {
  

  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Contact />
      
      <Portfolio/>
      <Testimonial/>
      <Resume/>
      <Blog/>
      <Footer/>
      
          </div>
  );
};

export default App;
