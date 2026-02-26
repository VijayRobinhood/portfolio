import { useState } from 'react'
import { FileText, ExternalLink, Sparkles, X, ZoomIn } from 'lucide-react'

export default function CASAnalysis() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <section id="cas-analysis" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">AI Agent Output</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
              <FileText size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">E-CAS Parser Agent</h2>
          </div>
          <p className="text-slate-300 text-lg font-medium mb-2">
            CAS PDF → AI Portfolio Analysis Report
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Upload any Consolidated Account Statement PDF. The AI agent parses holdings, transactions,
            and demat data — then generates a complete portfolio health report with risk scores,
            AI observations, and actionable recommendations. Powered by n8n &amp; Gemini.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['PDF Parsing', 'Portfolio Health Score', 'Risk Analysis', 'AI Observations', 'Tax Analysis', 'Nominee Check', 'n8n + Gemini'].map(t => (
              <span key={t} className="px-3 py-1 glass rounded-full text-xs font-medium text-purple-300 border border-purple-500/20">{t}</span>
            ))}
          </div>
        </div>

        {/* PDF viewer */}
        <div className="glass rounded-2xl border border-purple-500/15 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-purple-400" />
              <span className="text-white font-semibold text-sm">Sample Report — Soham S. Sharma · Dec 2025</span>
              <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/20 flex items-center gap-1">
                <Sparkles size={10} /> AI Generated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightbox(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-xs text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              >
                <ZoomIn size={13} /> Fullscreen
              </button>
              <a
                href="/docs/cas-analysis-sample.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold transition-all"
              >
                <ExternalLink size={13} /> Open PDF
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="w-full" style={{ height: '80vh' }}>
            <iframe
              src="/docs/cas-analysis-sample.pdf"
              className="w-full h-full"
              title="CAS Portfolio Analysis Report"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          onClick={() => setLightbox(false)}
        >
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/10" onClick={e => e.stopPropagation()}>
            <span className="text-white font-semibold text-sm">CAS Portfolio Analysis Report</span>
            <button
              onClick={() => setLightbox(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1" onClick={e => e.stopPropagation()}>
            <iframe
              src="/docs/cas-analysis-sample.pdf"
              className="w-full h-full"
              title="CAS Portfolio Analysis Report Fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  )
}
