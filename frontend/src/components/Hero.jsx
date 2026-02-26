import { useEffect, useRef } from 'react'
import { Download, Mail, ExternalLink, ArrowDown, Briefcase, Users, TrendingDown, Bot } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { icon: Users,       value: '11K+',    label: 'Active Users',       color: 'text-cyan-400',    bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: TrendingDown,value: '65–70%',  label: 'QA Cost Reduced',    color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: Bot,         value: '6',       label: 'AI Agents Built',    color: 'text-purple-400',  bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: Briefcase,   value: '7 Yrs',   label: 'FinTech Experience', color: 'text-indigo-400',  bg: 'bg-indigo-500/10 border-indigo-500/20' },
]

const techBadges = [
  { label: 'React',      color: 'text-cyan-300    border-cyan-500/30    bg-cyan-500/10' },
  { label: 'Node.js',    color: 'text-green-300   border-green-500/30   bg-green-500/10' },
  { label: 'AI Agents',  color: 'text-purple-300  border-purple-500/30  bg-purple-500/10' },
  { label: 'n8n',        color: 'text-orange-300  border-orange-500/30  bg-orange-500/10' },
  { label: 'RAG',        color: 'text-pink-300    border-pink-500/30    bg-pink-500/10' },
  { label: 'Angular',    color: 'text-red-300     border-red-500/30     bg-red-500/10' },
  { label: 'Flutter',    color: 'text-blue-300    border-blue-500/30    bg-blue-500/10' },
  { label: 'FinTech',    color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' },
  { label: 'LLMs',       color: 'text-indigo-300  border-indigo-500/30  bg-indigo-500/10' },
  { label: 'SQL Server', color: 'text-teal-300    border-teal-500/30    bg-teal-500/10' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame
    const particles = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.opacity})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - d / 100)})`
            ctx.stroke()
          }
        }
      }
      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text + CTAs ── */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Open to Senior / Lead Engineering Roles
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[1.05] tracking-tight">
              <span className="text-white block">Vijay</span>
              <span className="gradient-text block">Vishwakarma</span>
            </h1>

            {/* Role */}
            <p className="text-lg sm:text-xl font-semibold text-slate-300 mb-4">
              Project Lead &nbsp;·&nbsp; FinTech &nbsp;·&nbsp; AI Agents &amp; Automation
            </p>

            {/* Tagline */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Building scalable FinTech platforms &amp; AI-powered automation systems
              that drive{' '}
              <span className="text-emerald-400 font-semibold">measurable business impact</span>.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {techBadges.map((b, i) => (
                <span
                  key={b.label}
                  className={`px-3 py-1 rounded-full text-xs font-medium border float-animation ${b.color}`}
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 glow-indigo inline-flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <ExternalLink size={16} />
                View Live Projects
              </Link>
              <a
                href="/api/resume/download"
                className="px-6 py-3 glass border border-white/15 text-slate-200 font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 glass border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-200 inline-flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>
          </div>

          {/* ── RIGHT: Identity card ── */}
          <div className="flex flex-col gap-5">

            {/* Profile card */}
            <div className="glass rounded-2xl p-6 border border-indigo-500/20">
              <div className="flex items-center gap-4 mb-5">
                {/* Avatar initials */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shrink-0 glow-indigo">
                  <span className="text-white font-black text-xl">VV</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Vijay R. Vishwakarma</p>
                  <p className="text-slate-400 text-sm">Project Lead — OneInsure</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 mb-5" />

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className={`rounded-xl p-3 border flex items-center gap-3 ${s.bg}`}>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <Icon size={15} className={s.color} />
                      </div>
                      <div>
                        <p className={`font-black text-sm ${s.color}`}>{s.value}</p>
                        <p className="text-slate-400 text-xs">{s.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* What I build card */}
            <div className="glass rounded-2xl p-5 border border-white/8">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">What I Build</p>
              <div className="space-y-2.5">
                {[
                  { label: 'FinTech Platforms',       sub: 'Mutual fund apps · 11K+ users · Angular + Flutter',  dot: 'bg-indigo-400' },
                  { label: 'AI Automation Agents',    sub: 'n8n + LLMs · Call analysis · Lead qualification',    dot: 'bg-purple-400' },
                  { label: 'Internal Tools',          sub: 'BI platform · API builder · No-deploy pipelines',    dot: 'bg-emerald-400' },
                  { label: 'Full-Stack Products',     sub: 'React + Node.js + MSSQL · IIS deployed',            dot: 'bg-cyan-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.dot}`} />
                    <div>
                      <p className="text-white text-sm font-semibold leading-snug">{item.label}</p>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#metrics')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
