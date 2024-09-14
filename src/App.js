
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Analytics from './components/Analytics';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
