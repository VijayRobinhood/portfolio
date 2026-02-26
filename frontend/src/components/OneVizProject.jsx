import { useState } from 'react'
import {
  BarChart2, Database, Layout, Share2, Sparkles, MessageSquare,
  ShieldCheck, Lock, Grid, X, ZoomIn,
} from 'lucide-react'

const screens = [
  {
    id: 'login',
    label: 'Login',
    icon: Lock,
    src: '/screenshots/login.png',
    alt: 'OneViz AI – Login Screen',
  },
  {
    id: 'home',
    label: 'Home',
    icon: Grid,
    src: '/screenshots/home.png',
    alt: 'OneViz AI – Home Dashboard',
  },
  {
    id: 'dashboard',
    label: 'MF Insights',
    icon: BarChart2,
    src: '/screenshots/mf-insights.png',
    alt: 'OneViz AI – MF Insights Dashboard',
  },
  {
    id: 'ai-chat',
    label: 'AI Chat',
    icon: MessageSquare,
    src: '/screenshots/Ai-Chat.png',
    alt: 'OneViz AI – AI Chat powered by Gemini',
  },
]

const features = [
  {
    icon: Database,
    title: 'Multi-Database Connections',
    desc: 'Connect SQL Server, PostgreSQL, MySQL simultaneously. Manage all sources in one place.',
    color: 'from-blue-500/20 to-blue-600/5 border-blue-500/25 text-blue-400',
  },
  {
    icon: Layout,
    title: 'Drag & Drop Dashboards',
    desc: 'Build dashboards with KPI, Bar, Donut, Pivot, and Table charts using a no-code builder.',
    color: 'from-purple-500/20 to-purple-600/5 border-purple-500/25 text-purple-400',
  },
  {
    icon: Sparkles,
    title: 'AI Analysis (Gemini)',
    desc: 'One-click AI analysis of any dashboard. Auto-generates insights, anomalies & recommendations.',
    color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/25 text-emerald-400',
  },
  {
    icon: MessageSquare,
    title: 'AI Chat (Gemini)',
    desc: 'Chat directly with your dashboard data — ask questions in plain English, get instant insights powered by Google Gemini.',
    color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/25 text-indigo-400',
  },
  {
    icon: Share2,
    title: 'Dashboard Sharing',
    desc: 'Share dashboards via secure links with expiry, password protection, and view tracking.',
    color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/25 text-cyan-400',
  },
  {
    icon: ShieldCheck,
    title: 'Row-Level Security (RLS)',
    desc: 'Define security rules so each user sees only their own data on the same shared dashboard.',
    color: 'from-rose-500/20 to-rose-600/5 border-rose-500/25 text-rose-400',
  },
]

export default function OneVizProject() {
  const [activeScreen, setActiveScreen] = useState('home')
  const [lightbox, setLightbox] = useState(null) // src string or null

  const current = screens.find(s => s.id === activeScreen)

  return (
    <section id="oneviz" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Personal Project</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center glow-indigo">
              <BarChart2 size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">OneViz AI</h2>
          </div>
          <p className="text-slate-300 text-lg font-medium mb-2">
            AI-Powered BI &amp; Data Visualization Platform
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            A full-featured Business Intelligence tool — built from scratch — with multi-database connectivity,
            AI-generated insights, drag-and-drop dashboards, real-time sharing, and row-level security.
          </p>
        </div>

        {/* Screenshot viewer + Tech stack */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">

          {/* Left: Screenshot tabs + image */}
          <div className="glass rounded-2xl p-4 border border-blue-500/15">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              {screens.map((s) => {
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeScreen === s.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={12} />
                    {s.label}
                  </button>
                )
              })}
            </div>

            {/* Screenshot image — click to open lightbox */}
            <div
              className="relative rounded-xl overflow-hidden cursor-zoom-in group border border-white/10"
              onClick={() => setLightbox(current.src)}
            >
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="w-full object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center rounded-xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-full">
                  <ZoomIn size={16} />
                  Click to expand
                </div>
              </div>
            </div>

            <p className="text-center text-slate-500 text-xs mt-3">
              Click image to view fullscreen · Switch tabs to see more screens
            </p>
          </div>

          {/* Right: Built with */}
          <div className="space-y-5">
            <div className="glass rounded-2xl p-6 border border-blue-500/10">
              <h3 className="text-white font-bold text-base mb-4">Built With (Same Stack)</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'React + Vite', color: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20' },
                  { label: 'Tailwind CSS', color: 'text-blue-300 bg-blue-500/10 border-blue-500/20' },
                  { label: 'Node.js + Express', color: 'text-green-300 bg-green-500/10 border-green-500/20' },
                  { label: 'MSSQL + PostgreSQL', color: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
                  { label: 'Anthropic Claude', color: 'text-purple-300 bg-purple-500/10 border-purple-500/20' },
                  { label: 'Google Gemini', color: 'text-pink-300 bg-pink-500/10 border-pink-500/20' },
                  { label: 'Recharts', color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' },
                  { label: 'IIS + iisnode', color: 'text-orange-300 bg-orange-500/10 border-orange-500/20' },
                ].map((t) => (
                  <div key={t.label} className={`px-3 py-2 rounded-lg border text-xs font-medium ${t.color}`}>
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* RLS callout */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-rose-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">Row-Level Security (RLS)</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Same dashboard, different data per user. Configure security rules by user role, region, or any
                    custom dimension — no code needed.
                  </p>
                </div>
              </div>
            </div>

            {/* All screenshots as thumbnails */}
            <div className="glass rounded-2xl p-4 border border-white/5">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-3">All Screens</p>
              <div className="grid grid-cols-4 gap-2">
                {screens.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => { setActiveScreen(s.id); setLightbox(s.src) }}
                    className="cursor-zoom-in rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all group"
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                    />
                    <p className="text-center text-slate-500 text-xs py-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`rounded-2xl p-6 bg-gradient-to-br border hover-card-lift ${f.color}`}
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{f.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
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
            alt="OneViz AI Screenshot"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
