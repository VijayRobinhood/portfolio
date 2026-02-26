import { useState } from 'react'

const tabs = [
  {
    id: 'languages',
    label: 'Languages & Frameworks',
    emoji: '💻',
    skills: [
      { name: 'C# / ASP.NET Core', level: 95 },
      { name: 'ASP.NET MVC', level: 90 },
      { name: 'TypeScript / Angular 16+', level: 88 },
      { name: 'Flutter / Dart', level: 80 },
      { name: 'Node.js / Express', level: 82 },
      { name: 'Python / FastAPI', level: 72 },
    ],
    color: 'indigo',
    bar: 'from-indigo-500 to-cyan-500',
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    emoji: '🤖',
    skills: [
      { name: 'AI Agents & RAG Pipelines', level: 90 },
      { name: 'LLM Integrations', level: 88 },
      { name: 'MCPs (Model Context Protocol)', level: 85 },
      { name: 'n8n Automation', level: 87 },
      { name: 'Retell AI (Voice)', level: 82 },
      { name: 'NLP / Chatbots', level: 80 },
    ],
    color: 'purple',
    bar: 'from-purple-500 to-pink-500',
  },
  {
    id: 'databases',
    label: 'Databases & BI',
    emoji: '🗄️',
    skills: [
      { name: 'SQL Server (MSSQL)', level: 93 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Power BI', level: 75 },
      { name: 'Apache Superset', level: 70 },
      { name: 'Crystal Reports', level: 78 },
    ],
    color: 'teal',
    bar: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'devops',
    label: 'DevOps',
    emoji: '⚙️',
    skills: [
      { name: 'CI/CD Pipelines', level: 83 },
      { name: 'IIS Configuration', level: 88 },
      { name: 'TeamCity', level: 80 },
      { name: 'Release Management', level: 85 },
      { name: 'iisnode Deployment', level: 82 },
    ],
    color: 'orange',
    bar: 'from-orange-500 to-yellow-500',
  },
]

const badges = [
  // Languages
  'C#', 'ASP.NET Core', 'TypeScript', 'Angular', 'Flutter', 'Node.js', 'Python', 'FastAPI',
  // AI
  'RAG', 'LLMs', 'MCPs', 'n8n', 'Retell AI', 'NLP',
  // DB
  'SQL Server', 'PostgreSQL', 'Power BI',
  // DevOps
  'CI/CD', 'IIS', 'TeamCity',
  // Domain
  'Mutual Funds', 'FinTech', 'Payment Gateway', 'AMC APIs', 'Agile', 'Scrum',
]

const colorMap = {
  indigo: { tab: 'border-indigo-500 text-indigo-400', inactive: 'border-transparent text-slate-400 hover:text-slate-200' },
  purple: { tab: 'border-purple-500 text-purple-400', inactive: 'border-transparent text-slate-400 hover:text-slate-200' },
  teal: { tab: 'border-teal-500 text-teal-400', inactive: 'border-transparent text-slate-400 hover:text-slate-200' },
  orange: { tab: 'border-orange-500 text-orange-400', inactive: 'border-transparent text-slate-400 hover:text-slate-200' },
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('languages')
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Technical Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technology Stack</h2>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? colorMap[tab.color].tab
                    : colorMap[tab.color].inactive
                }`}
              >
                <span>{tab.emoji}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="space-y-5">
            {active.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${active.bar} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All badges */}
        <div className="mt-10">
          <h3 className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-5">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 glass rounded-full text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
