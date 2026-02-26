import { useState } from 'react'
import { Code2, Database, Zap, FileText, TestTube, ScrollText, X, ZoomIn, ShieldCheck, Globe } from 'lucide-react'

const screens = [
  { id: 'login',      label: 'Login',         icon: ShieldCheck, src: '/screenshots/API-Login.png',         alt: 'API Builder – Login' },
  { id: 'dashboard',  label: 'Dashboard',     icon: Globe,       src: '/screenshots/API-Dashboard.png',     alt: 'API Builder – Dashboard' },
  { id: 'endpoints',  label: 'Endpoints',     icon: Code2,       src: '/screenshots/API-Endpoints.png',     alt: 'API Builder – Endpoints' },
  { id: 'tester',     label: 'API Tester',    icon: TestTube,    src: '/screenshots/API-tester.png',        alt: 'API Builder – API Tester' },
  { id: 'docs',       label: 'Docs',          icon: FileText,    src: '/screenshots/API-Documentation.png', alt: 'API Builder – Documentation' },
  { id: 'logs',       label: 'Logs',          icon: ScrollText,  src: '/screenshots/API-Logs.png',          alt: 'API Builder – Logs' },
]

const features = [
  { icon: Database,  title: 'Stored Proc → API',      desc: 'Write a stored procedure, map it to an endpoint — no backend code, no deployment needed.',              color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/25 text-indigo-400' },
  { icon: Zap,       title: 'Zero-Deploy Updates',    desc: 'Add or modify APIs instantly. Changes go live without touching production or restarting the server.',    color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/25 text-emerald-400' },
  { icon: Code2,     title: 'Built-in API Tester',    desc: 'Test endpoints right from the dashboard — pass params, inspect responses, debug without Postman.',       color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/25 text-cyan-400' },
  { icon: FileText,  title: 'Auto Documentation',     desc: 'Every endpoint auto-generates Swagger-style docs — parameters, data types, and sample responses.',      color: 'from-purple-500/20 to-purple-600/5 border-purple-500/25 text-purple-400' },
  { icon: ScrollText,title: 'Request Logging',        desc: 'Full request/response logs with timestamps, IP, status codes, and execution time for every call.',      color: 'from-amber-500/20 to-amber-600/5 border-amber-500/25 text-amber-400' },
  { icon: ShieldCheck,title: 'Auth & Access Control', desc: 'API key authentication and role-based access control — each client gets scoped access to their APIs.',   color: 'from-rose-500/20 to-rose-600/5 border-rose-500/25 text-rose-400' },
]

export default function APIBuilderProject() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const [lightbox, setLightbox]         = useState(null)

  const current = screens.find(s => s.id === activeScreen)

  return (
    <section id="api-builder" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">Internal Tool</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center glow-indigo">
              <Code2 size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Dynamic API Builder</h2>
          </div>
          <p className="text-slate-300 text-lg font-medium mb-2">
            Stored Procedure → Live API — No Code, No Deployment
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Write a stored procedure, map it to an endpoint, and it's live — instantly. No backend changes,
            no production deployments for individual APIs. Comes with a built-in tester, auto-generated docs,
            full request logs, and role-based access control.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['SP → API', 'Zero Deployment', 'Built-in Tester', 'Auto Docs', 'Request Logs', 'API Key Auth', 'MSSQL'].map(t => (
              <span key={t} className="px-3 py-1 glass rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/20">{t}</span>
            ))}
          </div>
        </div>

        {/* Screenshot viewer + features */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Left: viewer */}
          <div className="glass rounded-2xl p-4 border border-emerald-500/15">

            {/* Screen tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {screens.map((s) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeScreen === s.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={12} />
                    {s.label}
                  </button>
                )
              })}
            </div>

            {/* Main image */}
            <div
              className="relative rounded-xl overflow-hidden cursor-zoom-in group border border-white/10"
              onClick={() => setLightbox(current.src)}
            >
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="w-full object-contain object-top rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center rounded-xl">
                <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-full">
                  <ZoomIn size={16} /> Click to expand
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">All Screens</p>
              <div className="grid grid-cols-3 gap-2">
                {screens.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => { setActiveScreen(s.id); setLightbox(s.src) }}
                    className={`cursor-zoom-in rounded-lg overflow-hidden border transition-all group ${
                      activeScreen === s.id
                        ? 'border-emerald-500/70 ring-1 ring-emerald-500/40'
                        : 'border-white/10 hover:border-emerald-500/40'
                    }`}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                    />
                    <p className="text-center text-slate-500 text-xs py-1 truncate px-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-slate-500 text-xs mt-2">
              Click any thumbnail to preview · Click image to expand fullscreen
            </p>
          </div>

          {/* Right: built with + feature cards */}
          <div className="space-y-5">

            {/* Built with */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/10">
              <p className="text-white font-bold text-sm mb-3">Built With</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'React + Vite',      color: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20' },
                  { label: 'Tailwind CSS',       color: 'text-blue-300 bg-blue-500/10 border-blue-500/20' },
                  { label: 'Node.js + Express',  color: 'text-green-300 bg-green-500/10 border-green-500/20' },
                  { label: 'MSSQL',              color: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
                  { label: 'Stored Procedures',  color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
                  { label: 'Dynamic Routing',    color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' },
                  { label: 'API Key Auth',        color: 'text-amber-300 bg-amber-500/10 border-amber-500/20' },
                  { label: 'IIS + iisnode',      color: 'text-orange-300 bg-orange-500/10 border-orange-500/20' },
                ].map(t => (
                  <div key={t.label} className={`px-3 py-2 rounded-lg border text-xs font-medium ${t.color}`}>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className={`rounded-xl p-4 bg-gradient-to-br border ${f.color}`}>
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                      <Icon size={15} />
                    </div>
                    <h4 className="text-white font-bold text-xs mb-1">{f.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="API Builder Screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
