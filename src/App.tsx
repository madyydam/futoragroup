import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CommandMenu from './components/CommandMenu';
import CookieBanner from './components/CookieBanner';
import AnimatedRoutes from './AnimatedRoutes';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <CustomCursor />
        <Navbar />
        <CommandMenu />
        <CookieBanner />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
