import { useEffect } from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import OneVizProject from '../components/OneVizProject'
import VoiceIQProject from '../components/VoiceIQProject'
import SocialLeadsProject from '../components/SocialLeadsProject'
import APIBuilderProject from '../components/APIBuilderProject'
import CASAnalysis from '../components/CASAnalysis'
import Footer from '../components/Footer'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 overflow-x-hidden">
      <ProjectsNavbar />
      <main className="pt-16">
        <OneVizProject />
        <VoiceIQProject />
        <SocialLeadsProject />
        <APIBuilderProject />
        <CASAnalysis />
      </main>
      <Footer />
    </div>
  )
}
