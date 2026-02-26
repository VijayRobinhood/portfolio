import { useEffect, useRef, useState } from 'react'
import { Users, TrendingDown, Calendar, Bot, Users2 } from 'lucide-react'

const metrics = [
  {
    icon: Users,
    value: 11000,
    suffix: '+',
    label: 'Users Onboarded',
    sublabel: 'Mutual Fund Platform',
    color: 'from-indigo-500 to-cyan-500',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: TrendingDown,
    value: 65,
    suffix: '–70%',
    label: 'QA Cost Reduction',
    sublabel: 'AI Call Analysis Agent',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: Calendar,
    value: 7,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'FinTech & InsureTech',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: Bot,
    value: 6,
    suffix: '+',
    label: 'AI Agents Deployed',
    sublabel: 'Production-grade systems',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: Users2,
    value: 8,
    suffix: '+',
    label: 'Engineers Led',
    sublabel: 'Cross-functional teams',
    color: 'from-orange-500 to-yellow-500',
    glow: 'rgba(249,115,22,0.3)',
  },
]

function AnimatedCounter({ target, suffix, started }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metrics" ref={sectionRef} className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Impact at Scale</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Measurable Results</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className="relative glass rounded-2xl p-6 text-center hover-card-lift group cursor-default"
                style={{ '--glow': m.glow }}
              >
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 30px ${m.glow}, inset 0 0 30px ${m.glow}20` }}
                />

                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <div className={`text-3xl sm:text-4xl font-black mb-1 bg-gradient-to-r ${m.color} gradient-text`}>
                  <AnimatedCounter target={m.value} suffix={m.suffix} started={started} />
                </div>

                <p className="text-white font-semibold text-sm mb-1">{m.label}</p>
                <p className="text-slate-500 text-xs">{m.sublabel}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
