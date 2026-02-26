import { useState } from 'react'
import { Mail, Linkedin, Download, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await axios.post('https://automation.oneinsure.com/webhook/PostForm', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleResumeDownload = async () => {
    try {
      await axios.post('/api/resume/download')
    } catch {
      // silent - just log analytics
    }
    window.open('/api/resume/file', '_blank')
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Let's Build Scalable{' '}
            <span className="gradient-text">FinTech & AI</span>
            <br />
            Systems Together
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Open to senior engineering leadership, project lead, and consulting opportunities. Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Quick links */}
          <div className="space-y-5">
            <a
              href="mailto:vijayvishwakarma333@gmail.com"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-slate-400 text-sm">vijayvishwakarma333@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vijay-vishwakarma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-slate-400 text-sm">Connect on LinkedIn</p>
              </div>
            </a>

            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center gap-4 glass rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group border border-white/5 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Download Resume</p>
                <p className="text-slate-400 text-sm">PDF · Updated 2025</p>
              </div>
            </button>

            {/* Phone */}
            <div className="flex items-center gap-4 glass rounded-2xl p-6 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-slate-400 text-sm">+91 91374 95387</p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass rounded-2xl p-8 border border-indigo-500/10">
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4">
                <CheckCircle2 size={48} className="text-emerald-400" />
                <p className="text-white font-semibold text-center">Message sent successfully!</p>
                <p className="text-slate-400 text-sm text-center">I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus(null)}
                  className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Vijay, I'd like to discuss..."
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    <span>Failed to send. Please email directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all glow-indigo flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send size={18} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
