import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Topbar from './components/Topbar';
import Section from './components/Section';

function App() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;