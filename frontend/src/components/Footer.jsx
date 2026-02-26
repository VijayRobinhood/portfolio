import { Code2, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'AI Agents',  href: '#ai-agents' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Vijay Vishwakarma</p>
              <p className="text-slate-500 text-xs">Project Lead · FinTech · AI</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/projects"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors font-medium"
            >
              Live Projects
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-slate-600 text-xs">
            <span>Built with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>React + Vite + Tailwind</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © 2025 Vijay Rajmangal Vishwakarma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
