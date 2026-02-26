import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'AI Agents',  href: '#ai-agents' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg shadow-indigo-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center glow-indigo">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm hidden sm:block">VRV</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/projects"
              className="px-3 py-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 rounded-lg transition-all duration-200 border border-indigo-500/25"
            >
              Live Projects
            </Link>
            <button
              onClick={() => handleNav('#contact')}
              className="ml-3 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 glow-indigo"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-3 py-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 rounded-lg transition-all border border-indigo-500/25 text-left"
            >
              Live Projects
            </Link>
            <button
              onClick={() => handleNav('#contact')}
              className="w-full mt-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
