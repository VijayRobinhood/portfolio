import { useState } from 'react'
import { Instagram, Facebook, Bot, TrendingUp, MessageSquare, BarChart2, Zap, X, ZoomIn } from 'lucide-react'

const platforms = [
  {
    id: 'instagram',
    label: 'Instagram',
    badgeColor: 'bg-pink-600',
    screens: [
      { id: 'insta-dashboard', label: 'Lead Dashboard', icon: BarChart2, src: '/screenshots/instaLead-dahsboard.png', alt: 'InstaLead – Lead Dashboard' },
      { id: 'insta-video', label: 'Video Analytics', icon: TrendingUp, src: '/screenshots/instalead-intavideodashboard.png', alt: 'InstaLead – Instagram Video Dashboard' },
    ],
  },
  {
    id: 'facebook',
    label: 'Facebook',
    badgeColor: 'bg-blue-600',
    screens: [
      { id: 'fb-video', label: 'Video Analytics', icon: TrendingUp, src: '/screenshots/instalead-facebookvideodashboard.png', alt: 'InstaLead – Facebook Video Dashboard' },
    ],
  },
]

const features = [
  { icon: Bot,          title: 'AI DM Agent',              desc: 'n8n-powered Gemini agent handles Instagram DMs autonomously — qualifies leads and responds in real time.',                      color: 'from-pink-500/20 to-pink-600/5 border-pink-500/25 text-pink-400' },
  { icon: MessageSquare,title: 'Lead Qualification',        desc: 'Every DM conversation scored and categorised. Hot leads surfaced automatically for the sales team.',                          color: 'from-rose-500/20 to-rose-600/5 border-rose-500/25 text-rose-400' },
  { icon: TrendingUp,   title: 'Video / Reel Performance',  desc: 'Track views, reach, engagement, and saves for every video, post, and reel — on one dashboard.',                              color: 'from-orange-500/20 to-orange-600/5 border-orange-500/25 text-orange-400' },
  { icon: Facebook,     title: 'Facebook Analytics',        desc: 'Same insights extended to Facebook — video performance, post reach, and lead activity in a unified view.',                   color: 'from-blue-500/20 to-blue-600/5 border-blue-500/25 text-blue-400' },
  { icon: Zap,          title: 'n8n Automation',            desc: 'All data pipelines, DM triggers, and lead routing automated with n8n — zero manual intervention.',                           color: 'from-amber-500/20 to-amber-600/5 border-amber-500/25 text-amber-400' },
  { icon: BarChart2,    title: 'Unified Analytics',         desc: 'Single platform for both Instagram and Facebook metrics — built on the same React + Node.js + MSSQL stack.',                 color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/25 text-indigo-400' },
]

export default function SocialLeadsProject() {
  const [activePlatform, setActivePlatform] = useState('instagram')
  const [activeScreen, setActiveScreen]     = useState('insta-dashboard')
  const [lightbox, setLightbox]             = useState(null)

  const currentPlatform = platforms.find(p => p.id === activePlatform)
  const currentScreen   = currentPlatform.screens.find(s => s.id === activeScreen) ?? currentPlatform.screens[0]

  const switchPlatform = (platformId) => {
    setActivePlatform(platformId)
    setActiveScreen(platforms.find(p => p.id === platformId).screens[0].id)
  }

  return (
    <section id="social-leads" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-2">AI Agent — Social Media</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center glow-indigo">
              <Instagram size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">InstaLead AI</h2>
          </div>
          <p className="text-slate-300 text-lg font-medium mb-2">
            Instagram &amp; Facebook Lead Management Platform
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            AI agent autonomously handles Instagram DMs, qualifies leads, and routes hot prospects to the
            sales team. Unified dashboard tracks video, post, and reel performance across Instagram and
            Facebook. Powered by n8n &amp; Gemini API.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['DM AI Agent', 'Lead Qualification', 'Instagram Analytics', 'Facebook Analytics', 'Reel Performance', 'n8n Automation', 'Gemini API'].map(t => (
              <span key={t} className="px-3 py-1 glass rounded-full text-xs font-medium text-pink-300 border border-pink-500/20">{t}</span>
            ))}
          </div>
        </div>

        {/* Screenshot viewer + features */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">

          {/* Left: viewer */}
          <div className="glass rounded-2xl p-4 border border-pink-500/15">

            {/* Platform switcher */}
            <div className="flex gap-2 mb-3 p-1 bg-white/5 rounded-xl w-fit">
              {platforms.map(p => (
                <button
                  key={p.id}
                  onClick={() => switchPlatform(p.id)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activePlatform === p.id ? `${p.badgeColor} text-white` : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Screen tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentPlatform.screens.map((s) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeScreen === s.id
                        ? activePlatform === 'facebook' ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'
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

            {/* Thumbnails — all platforms */}
            <div className="mt-4 space-y-4">
              {platforms.map(p => (
                <div key={p.id}>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">{p.label}</p>
                  <div className={`grid gap-2 ${p.screens.length === 1 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {p.screens.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => { switchPlatform(p.id); setActiveScreen(s.id); setLightbox(s.src) }}
                        className={`cursor-zoom-in rounded-lg overflow-hidden border transition-all group ${
                          activeScreen === s.id && activePlatform === p.id
                            ? 'border-pink-500/70 ring-1 ring-pink-500/40'
                            : 'border-white/10 hover:border-pink-500/40'
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

          {/* Right: built with + feature cards */}
          <div className="space-y-5">

            {/* Built with */}
            <div className="glass rounded-2xl p-5 border border-pink-500/10">
              <p className="text-white font-bold text-sm mb-3">Built With</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'React + Vite',       color: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20' },
                  { label: 'Tailwind CSS',        color: 'text-blue-300 bg-blue-500/10 border-blue-500/20' },
                  { label: 'Node.js + Express',   color: 'text-green-300 bg-green-500/10 border-green-500/20' },
                  { label: 'MSSQL',               color: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
                  { label: 'n8n Automation',      color: 'text-orange-300 bg-orange-500/10 border-orange-500/20' },
                  { label: 'Gemini API',          color: 'text-pink-300 bg-pink-500/10 border-pink-500/20' },
                  { label: 'Instagram Graph API', color: 'text-rose-300 bg-rose-500/10 border-rose-500/20' },
                  { label: 'Facebook API',        color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' },
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
            alt="InstaLead Screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
