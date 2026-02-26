import { CheckCircle2 } from 'lucide-react'

const competencies = [
  { label: 'Team Leadership', icon: '👥' },
  { label: 'Agile / Scrum', icon: '🔄' },
  { label: 'FinTech Architecture', icon: '🏦' },
  { label: 'AI Agents & RAG', icon: '🤖' },
  { label: 'API Integrations', icon: '🔌' },
  { label: 'Payment Gateways', icon: '💳' },
  { label: 'MCPs & LLMs', icon: '🧠' },
  { label: 'CI/CD Pipelines', icon: '🚀' },
  { label: 'Stakeholder Mgmt', icon: '🤝' },
  { label: 'System Design', icon: '⚙️' },
]

const philosophyPoints = [
  'Ship quality fast — code reviews, testing culture, and release pipelines matter',
  'Bridge business and engineering — drive alignment on priorities',
  'Lead by mentoring — structured feedback grows the team faster than you alone',
  'Measure everything — impact over effort, outcomes over output',
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Leadership Profile</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Profile + Philosophy */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Profile Summary</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Project Lead with <span className="text-indigo-400 font-semibold">7+ years</span> of experience in FinTech
                and Insurance Technology, specializing in building scalable platforms, leading high-performing engineering
                teams, and driving technical excellence.
              </p>
              <p className="text-slate-300 leading-relaxed text-base mt-4">
                Proven track record of delivering enterprise-grade Mutual Fund investment platforms (B2B &amp; B2C) that
                reduced customer onboarding from <span className="text-red-400 font-semibold line-through">24–48 hrs</span>{' '}
                to{' '}
                <span className="text-emerald-400 font-semibold">5–10 minutes</span>. Expert in designing and deploying
                AI Agents, RAG Pipelines, and automation solutions that improve efficiency, compliance, and customer
                experience.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-5">Leadership Philosophy</h3>
              <div className="space-y-3">
                {philosophyPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Competencies grid */}
          <div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {competencies.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-indigo-500/10 border border-white/5 hover:border-indigo-500/30 rounded-xl transition-all duration-200 cursor-default group"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-black gradient-text mb-1">B.Sc. IT</div>
                <p className="text-slate-400 text-xs">Mumbai University</p>
                <p className="text-slate-500 text-xs">First Class · 2017</p>
              </div>
              <div className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-black gradient-text mb-1">Mumbai</div>
                <p className="text-slate-400 text-xs">India</p>
                <p className="text-slate-500 text-xs">Open to Remote / Hybrid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
