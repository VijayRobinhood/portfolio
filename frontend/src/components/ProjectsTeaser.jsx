import { Link } from 'react-router-dom'
import { ArrowRight, BarChart2, Phone, Instagram, Code2, FileText } from 'lucide-react'

const projects = [
  { icon: BarChart2, label: 'OneViz AI',       desc: 'AI-Powered BI Platform',                  color: 'from-blue-600 to-blue-800',    accent: 'border-blue-500/30 text-blue-300' },
  { icon: Phone,     label: 'VoiceIQ',          desc: 'AI Call Analysis',                         color: 'from-indigo-600 to-purple-600', accent: 'border-indigo-500/30 text-indigo-300' },
  { icon: Instagram, label: 'InstaLead AI',     desc: 'Social Lead Management',                   color: 'from-pink-600 to-rose-600',    accent: 'border-pink-500/30 text-pink-300' },
  { icon: Code2,     label: 'API Builder',      desc: 'SP → Live API, No Deployment',             color: 'from-emerald-600 to-teal-600', accent: 'border-emerald-500/30 text-emerald-300' },
  { icon: FileText,  label: 'E-CAS Parser',     desc: 'AI Portfolio Analysis Agent',              color: 'from-purple-600 to-indigo-600',accent: 'border-purple-500/30 text-purple-300' },
]

export default function ProjectsTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Live Builds</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Personal &amp; Internal Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Tools I built and shipped — from BI platforms to AI agents. Each with real screenshots and full feature walkthroughs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {projects.map((p) => {
            const Icon = p.icon
            return (
              <Link
                key={p.label}
                to="/projects"
                className={`glass rounded-2xl p-5 border ${p.accent} hover:bg-white/5 transition-all duration-200 hover:-translate-y-1 group`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{p.label}</p>
                <p className="text-slate-500 text-xs">{p.desc}</p>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 glow-indigo"
          >
            Explore All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
