import { useState } from 'react'
import { Bot, Phone, FileSearch, UserCheck, MessageSquare, Instagram, FileText, ChevronDown, ChevronUp } from 'lucide-react'

const agents = [
  {
    icon: Phone,
    name: 'AI Call Analysis Agent',
    emoji: '📞',
    color: 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/25',
    glowColor: 'rgba(99,102,241,0.15)',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
    problem: 'Manual QA review of 100s of tele-sales calls was expensive (₹45–60K/month) and slow.',
    solution: 'AI agent that automatically analyzes call recordings, categorizes calls, scores agent quality, and qualifies leads.',
    tech: ['RAG Pipeline', 'LLM', 'NLP', 'n8n'],
    impact: '65–70% cost reduction · ₹1.5/call · ₹15–20K/month vs ₹45–60K for human QA',
    impactColor: 'text-emerald-400',
  },
  {
    icon: FileSearch,
    name: 'AI Resume Screening Agent',
    emoji: '📄',
    color: 'from-purple-500/20 to-purple-600/5 border-purple-500/25',
    glowColor: 'rgba(168,85,247,0.15)',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    problem: 'HR team spending hours manually screening hundreds of resumes for key roles.',
    solution: 'Analyzes resumes against JD, produces profile matching scores, highlights key achievements and areas of concern.',
    tech: ['LLM', 'RAG', 'PDF Parsing'],
    impact: 'Hours of HR time saved per hire · Consistent, bias-reduced shortlisting',
    impactColor: 'text-purple-400',
  },
  {
    icon: UserCheck,
    name: 'AI Calling Agent',
    emoji: '🎙️',
    color: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/25',
    glowColor: 'rgba(6,182,212,0.15)',
    badgeColor: 'bg-cyan-500/20 text-cyan-300',
    problem: 'Agents manually calling customers post-booking led to missed follow-ups and unqualified leads in pipeline.',
    solution: 'Voice agent that calls customers post-booking, qualifies leads, verifies appointments, and handles rescheduling.',
    tech: ['Retell AI', 'LLM', 'n8n', 'CRM Integration'],
    impact: 'Automated 100% of post-booking follow-up calls · Zero missed leads',
    impactColor: 'text-cyan-400',
  },
  {
    icon: MessageSquare,
    name: 'AI Customer Service Agent',
    emoji: '💬',
    color: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/25',
    glowColor: 'rgba(16,185,129,0.15)',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    problem: 'High volume of repetitive customer queries about insurance policies overloading support team.',
    solution: 'Conversational agent handling insurance policy queries, claim status, renewals, reducing support ticket volume.',
    tech: ['LLM', 'RAG', 'Chatbot', 'Knowledge Base'],
    impact: 'Significant reduction in support ticket volume · 24/7 availability',
    impactColor: 'text-emerald-400',
  },
  {
    icon: Instagram,
    name: 'Instagram Lead Qualification Agent',
    emoji: '📱',
    color: 'from-pink-500/20 to-pink-600/5 border-pink-500/25',
    glowColor: 'rgba(236,72,153,0.15)',
    badgeColor: 'bg-pink-500/20 text-pink-300',
    problem: 'Instagram viewers expressing interest in products were being missed or delayed in the sales pipeline.',
    solution: 'Engages viewers via DMs, qualifies through conversation, automatically pushes qualified leads into CRM.',
    tech: ['LLM', 'n8n', 'CRM Integration', 'Meta API'],
    impact: 'Automated lead capture from social media · Qualified leads directly in CRM',
    impactColor: 'text-pink-400',
  },
  {
    icon: FileText,
    name: 'E-CAS Parser Agent',
    emoji: '📊',
    color: 'from-orange-500/20 to-orange-600/5 border-orange-500/25',
    glowColor: 'rgba(249,115,22,0.15)',
    badgeColor: 'bg-orange-500/20 text-orange-300',
    problem: 'Advisors manually reviewing CAS (Consolidated Account Statement) PDFs to understand client portfolios.',
    solution: 'Reads customer CAS PDFs and generates automated, structured portfolio summaries with actionable insights.',
    tech: ['PDF Parsing', 'LLM', 'RAG', 'FastAPI'],
    impact: 'Instant portfolio summaries · Advisor productivity multiplied',
    impactColor: 'text-orange-400',
  },
]

function AgentCard({ agent }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = agent.icon

  return (
    <div
      className={`relative rounded-2xl p-6 bg-gradient-to-br border hover-card-lift cursor-pointer ${agent.color}`}
      style={{ boxShadow: expanded ? `0 0 30px ${agent.glowColor}` : undefined }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* AI glow effect */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl pointer-events-none opacity-40"
        style={{ background: agent.glowColor }}
      />

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
            {agent.emoji}
          </div>
          <h3 className="text-white font-bold text-sm leading-tight">{agent.name}</h3>
        </div>
        <button className="text-slate-500 hover:text-white transition-colors mt-0.5">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.tech.map((t) => (
          <span key={t} className={`px-2 py-0.5 rounded-full text-xs font-medium ${agent.badgeColor}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Collapsed: show impact */}
      {!expanded && (
        <p className={`text-xs font-medium ${agent.impactColor}`}>{agent.impact}</p>
      )}

      {/* Expanded: full details */}
      {expanded && (
        <div className="mt-3 space-y-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Problem</p>
            <p className="text-slate-300 text-xs leading-relaxed">{agent.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Solution</p>
            <p className="text-slate-300 text-xs leading-relaxed">{agent.solution}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Business Impact</p>
            <p className={`text-xs font-medium ${agent.impactColor}`}>{agent.impact}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AIAgents() {
  return (
    <section id="ai-agents" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">AI & Automation</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">AI Agents Portfolio</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            6+ production-grade AI agents deployed. Click any card to expand details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        {/* Summary row */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5 text-center">
            <div className="text-2xl font-black text-purple-400 mb-1">RAG</div>
            <p className="text-slate-400 text-sm">Retrieval Augmented Generation</p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <div className="text-2xl font-black text-cyan-400 mb-1">n8n + Retell AI</div>
            <p className="text-slate-400 text-sm">Automation & Voice Agent Platform</p>
          </div>
          <div className="glass rounded-xl p-5 text-center">
            <div className="text-2xl font-black text-emerald-400 mb-1">MCPs & LLMs</div>
            <p className="text-slate-400 text-sm">Model Context Protocol</p>
          </div>
        </div>
      </div>
    </section>
  )
}
