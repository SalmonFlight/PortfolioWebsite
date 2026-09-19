// src/App.jsx
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/projects';      // ← lowercase 'p'
import Skills from './components/sections/skills';          // ← lowercase 's'
import Contributions from './components/sections/Contributions'; // ← capital 'C' with 's'
import Contact from './components/sections/contact';        // ← lowercase 'c'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contributions />
      <Contact />
    </Layout>
  );
}

export default App;