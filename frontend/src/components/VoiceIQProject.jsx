import { useState } from 'react'
import { Phone, X, ZoomIn, Bot, TrendingUp, Star, ShieldCheck } from 'lucide-react'

const callTypes = [
  {
    id: 'tele-sales',
    label: 'Tele-Sales Calls',
    badgeColor: 'bg-indigo-600',
    screens: [
      { id: 'call-analysis', label: 'Call Analysis', icon: Phone, src: '/screenshots/Ai-CallAnalysis.png', alt: 'VoiceIQ – AI Call Analysis' },
      { id: 'agent-eval', label: 'Agent Evaluation', icon: Star, src: '/screenshots/Agent-Evaluation.png', alt: 'VoiceIQ – Agent Evaluation' },
      { id: 'lead-analysis', label: 'Lead Analysis', icon: TrendingUp, src: '/screenshots/Lead-Analysis.png', alt: 'VoiceIQ – Lead Analysis' },
    ],
  },
  {
    id: 'plvc',
    label: 'PLVC Calls',
    badgeColor: 'bg-purple-600',
    screens: [
      { id: 'plvc-summary', label: 'Summary', icon: Phone, src: '/screenshots/plvc-summary.png', alt: 'VoiceIQ PLVC – Summary' },
      { id: 'plvc-compliance', label: 'Compliance Check', icon: ShieldCheck, src: '/screenshots/plvc-compliancecheck.png', alt: 'VoiceIQ PLVC – Compliance Check' },
      { id: 'plvc-softskills', label: 'Soft Skills', icon: Star, src: '/screenshots/plvc-agentsoftskills.png', alt: 'VoiceIQ PLVC – Agent Soft Skills' },
      { id: 'plvc-checklist', label: 'Verification', icon: TrendingUp, src: '/screenshots/plvc-verifiationchecklist.png', alt: 'VoiceIQ PLVC – Verification Checklist' },
    ],
  },
]

const features = [
  { icon: Phone,      title: 'Auto Call Transcription',   desc: 'Tele-sales & PLVC recordings auto-transcribed and analysed — no manual effort.',                          color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/25 text-indigo-400' },
  { icon: Star,       title: 'Agent Quality Scoring',      desc: 'Scored on tone, script adherence, objection handling, and closing effectiveness.',                         color: 'from-amber-500/20 to-amber-600/5 border-amber-500/25 text-amber-400' },
  { icon: TrendingUp, title: 'Lead Scoring & Categories',  desc: 'Calls categorised Hot / Warm / Cold and pushed to CRM automatically.',                                    color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/25 text-emerald-400' },
  { icon: ShieldCheck,title: 'PLVC Compliance Check',      desc: 'Post-Login Verification Calls analysed for compliance, soft-skills, and verification checklist adherence.', color: 'from-purple-500/20 to-purple-600/5 border-purple-500/25 text-purple-400' },
  { icon: Bot,        title: 'RAG-Powered Insights',       desc: 'Retrieval-Augmented Generation surfaces context-aware insights from every conversation.',                  color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/25 text-cyan-400' },
]

export default function VoiceIQProject() {
  const [activeType, setActiveType]     = useState('tele-sales')
  const [activeScreen, setActiveScreen] = useState('call-analysis')
  const [lightbox, setLightbox]         = useState(null)

  const currentType   = callTypes.find(t => t.id === activeType)
  const currentScreen = currentType.screens.find(s => s.id === activeScreen) ?? currentType.screens[0]

  const switchType = (typeId) => {
    setActiveType(typeId)
    setActiveScreen(callTypes.find(t => t.id === typeId).screens[0].id)
  }

  return (
    <section id="voiceiq" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">AI Agent — Cost Impact</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center glow-indigo">
              <Phone size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">VoiceIQ</h2>
          </div>
          <p className="text-slate-300 text-lg font-medium mb-2">
            AI-Powered Call Analysis Platform
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Analyses every tele-sales and PLVC recording — generating detailed reports, agent quality scores,
            compliance checks, and lead categorisation. Reduced QA costs by{' '}
            <span className="text-emerald-400 font-semibold">65–70%</span> (₹1.5/call vs ₹45–60K/month for human QA).
            Powered by n8n &amp; RAG Pipeline.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['Tele-Sales Analysis', 'PLVC Compliance', 'Agent Scoring', 'Lead Categorisation', 'RAG Pipeline', 'n8n Automation', '₹1.5 / call'].map(t => (
              <span key={t} className="px-3 py-1 glass rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/20">{t}</span>
            ))}
          </div>
        </div>

        {/* Screenshot viewer + features */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Left: viewer */}
          <div className="glass rounded-2xl p-4 border border-indigo-500/15">

            {/* Call type switcher */}
            <div className="flex gap-2 mb-3 p-1 bg-white/5 rounded-xl w-fit">
              {callTypes.map(ct => (
                <button
                  key={ct.id}
                  onClick={() => switchType(ct.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeType === ct.id ? `${ct.badgeColor} text-white` : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {ct.label}
                </button>
              ))}
            </div>

            {/* Screen tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentType.screens.map((s) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeScreen === s.id
                        ? activeType === 'plvc' ? 'bg-purple-600 text-white' : 'bg-indigo-600 text-white'
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
              onClick={() => setLightbox(currentScreen.src)}
            >
              <img
                key={currentScreen.src}
                src={currentScreen.src}
                alt={currentScreen.alt}
                className="w-full object-contain object-top rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center rounded-xl">
                <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-full">
                  <ZoomIn size={16} /> Click to expand
                </div>
              </div>
            </div>

            {/* Thumbnails — both call types, inside left col */}
            <div className="mt-4 space-y-4">
              {callTypes.map(ct => (
                <div key={ct.id}>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">{ct.label}</p>
                  <div className={`grid gap-2 ${ct.screens.length === 4 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                    {ct.screens.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => { switchType(ct.id); setActiveScreen(s.id); setLightbox(s.src) }}
                        className={`cursor-zoom-in rounded-lg overflow-hidden border transition-all group ${
                          activeScreen === s.id && activeType === ct.id
                            ? 'border-indigo-500/70 ring-1 ring-indigo-500/40'
                            : 'border-white/10 hover:border-indigo-500/40'
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
              ))}
            </div>

            <p className="text-center text-slate-500 text-xs mt-2">
              Click any thumbnail to preview · Click image to expand fullscreen
            </p>
          </div>

          {/* Right: impact + features only */}
          <div className="space-y-5">

            {/* Impact */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <p className="text-white font-bold text-sm mb-3">Business Impact</p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-emerald-400 font-black text-xl">65–70%</p>
                  <p className="text-slate-400 text-xs">QA Cost Reduction</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-emerald-400 font-black text-xl">₹1.5</p>
                  <p className="text-slate-400 text-xs">Per Call (vs ₹45–60K/mo)</p>
                </div>
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
            alt="VoiceIQ Screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
