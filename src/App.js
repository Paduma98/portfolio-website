import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection />
    </div>
  );
}

export default App;
