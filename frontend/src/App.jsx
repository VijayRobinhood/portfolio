import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import MutualFundProject from './components/MutualFundProject'
import AIAgents from './components/AIAgents'
import ProjectsTeaser from './components/ProjectsTeaser'
import TechStack from './components/TechStack'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <MutualFundProject />
        <AIAgents />
        <ProjectsTeaser />
        <TechStack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
