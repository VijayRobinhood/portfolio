import { Briefcase, GraduationCap } from 'lucide-react'

const events = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Project Lead – FinTech & Insurance Solutions',
    company: 'Robinhood Insurance Broker (OneInsure)',
    location: 'Mumbai',
    period: 'Jan 2019 – Present',
    current: true,
    color: 'from-indigo-500 to-cyan-500',
    borderColor: 'border-indigo-500/30',
    bgColor: 'bg-indigo-500/10',
    highlights: [
      'Led cross-functional teams of 8+ developers, testers, and analysts',
      'Delivered enterprise-grade Mutual Fund platform (B2B & B2C) with 11,000+ users',
      'Deployed 6+ production AI Agents using RAG, LLMs, n8n, Retell AI',
      'Reduced customer onboarding from 24–48 hrs to 5–10 minutes',
      'Reduced QA costs by 65–70% via AI Call Analysis Agent',
      'Migrated legacy systems to Angular 16+ & Flutter',
      'Established engineering processes: code reviews, CI/CD, incident management',
      'Acted as bridge between business stakeholders and engineering teams',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Software Developer',
    company: 'Opal Asia India Pvt. Ltd',
    location: 'Mumbai',
    period: 'Aug 2018 – Jan 2019',
    current: false,
    color: 'from-slate-500 to-slate-600',
    borderColor: 'border-slate-500/30',
    bgColor: 'bg-slate-500/10',
    highlights: [
      'Web application development using C# and ASP.NET',
      'Logistics Software: shipment tracking, inventory management, workflow automation',
      'CRM maintenance and enhancement, production bug resolution',
      'Partnered with clients to analyze requirements and propose technical solutions',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Science in Information Technology',
    company: 'N.K.T.T. College, Mumbai University',
    location: 'Mumbai',
    period: '2017',
    current: false,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    highlights: ['First Class (A Grade)', 'Information Technology'],
  },
]

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience Timeline</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-500/30 to-emerald-500/50" />

          <div className="space-y-8">
            {events.map((event, i) => {
              const Icon = event.icon
              return (
                <div key={i} className="relative flex gap-6 sm:gap-10">
                  {/* Icon node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    {event.current && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0a0f1e] animate-pulse" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 glass rounded-2xl p-6 border ${event.borderColor} mb-2`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight">{event.title}</h3>
                        <p className="text-slate-400 text-sm mt-0.5">
                          {event.company} · {event.location}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${event.bgColor} border ${event.borderColor}`}
                        >
                          {event.period}
                        </span>
                        {event.current && (
                          <span className="block text-center mt-1 text-xs text-emerald-400 font-medium">● Current</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {event.highlights.map((h) => (
                        <li key={h} className="flex gap-2 items-start text-sm text-slate-300">
                          <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
