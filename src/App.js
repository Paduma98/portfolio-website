import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <AboutSection/>
      <ServicesSection />
      <ProjectsSection/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
