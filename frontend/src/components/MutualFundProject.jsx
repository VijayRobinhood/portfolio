import { CheckCircle2, ArrowRight, Layers, Database, CreditCard, Globe } from 'lucide-react'

const achievements = [
  'Onboarding reduced: 24–48 hrs → 5–10 minutes',
  '11,000+ active users with high engagement & retention',
  'Real-time NAV-based investments',
  'SIP Management & Portfolio Tracking',
  'Multiple AMC API integrations',
  'Payment gateway integrations for seamless transactions',
  'Multi-platform: Web, Android, iOS',
]

const archNodes = [
  { label: 'Angular 16+\nWeb App', icon: Globe, color: 'from-red-500/20 to-red-600/10 border-red-500/30 text-red-300' },
  { label: 'Flutter\nMobile App', icon: Globe, color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300' },
  { label: 'ASP.NET Core\nBackend APIs', icon: Layers, color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-300' },
  { label: 'SQL Server\nDatabase', icon: Database, color: 'from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-300' },
  { label: 'Payment\nGateway', icon: CreditCard, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-300' },
  { label: 'AMC APIs\nIntegrations', icon: Layers, color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300' },
]

export default function MutualFundProject() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Flagship Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Mutual Fund Platform</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Enterprise-grade multi-platform B2B &amp; B2C Mutual Fund Investment Solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Case study */}
          <div className="space-y-6">
            {/* Overview card */}
            <div className="glass rounded-2xl p-8 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">📈</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Multi-Platform Investment Solution</h3>
                  <p className="text-slate-500 text-xs">Robinhood Insurance Broker (OneInsure)</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Spearheaded the design and delivery of a full-stack mutual fund investment platform serving both B2B
                distribution partners and B2C end customers. Led an engineering team of 8+ across web, mobile, and
                backend tracks.
              </p>
            </div>

            {/* Key achievements */}
            <div className="glass rounded-2xl p-8">
              <h4 className="text-base font-bold text-white mb-5">Key Achievements</h4>
              <div className="space-y-3">
                {achievements.map((a) => (
                  <div key={a} className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact highlight */}
            <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-emerald-400">5–10</div>
                <div>
                  <p className="text-white font-semibold">Minutes to Onboard</p>
                  <p className="text-slate-400 text-xs">Down from 24–48 hours. A 95%+ reduction in time-to-invest.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architecture diagram */}
          <div>
            <div className="glass rounded-2xl p-8 border border-indigo-500/15">
              <h4 className="text-base font-bold text-white mb-6 text-center">Technical Architecture</h4>
              <div className="grid grid-cols-2 gap-3">
                {archNodes.map((node, i) => {
                  const Icon = node.icon
                  return (
                    <div
                      key={node.label}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br border text-center hover-card-lift ${node.color}`}
                    >
                      <Icon size={20} />
                      <p className="text-xs font-medium whitespace-pre-line leading-tight">{node.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Connection lines visualization */}
              <div className="mt-6 p-4 bg-white/3 rounded-xl">
                <div className="flex items-center justify-between text-xs text-slate-500 gap-2">
                  <span className="text-center text-slate-400">Frontend</span>
                  <ArrowRight size={14} />
                  <span className="text-center text-slate-400">APIs</span>
                  <ArrowRight size={14} />
                  <span className="text-center text-slate-400">DB</span>
                  <ArrowRight size={14} />
                  <span className="text-center text-slate-400">AMC / Payment</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-indigo-400 font-bold text-lg">B2B</div>
                  <p className="text-slate-500 text-xs">Distributor Portal</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-cyan-400 font-bold text-lg">B2C</div>
                  <p className="text-slate-500 text-xs">Investor App</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-emerald-400 font-bold text-lg">APIs</div>
                  <p className="text-slate-500 text-xs">Third-party</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
