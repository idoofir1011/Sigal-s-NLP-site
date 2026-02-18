import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'בית' },
    { path: '/about', label: 'אודות' },
    { path: '/services', label: 'תחומי פעילות' },
    { path: '/empowerment', label: 'העצמה נשית' },
    { path: '/personal-empowerment', label: 'העצמה אישית' },
    { path: '/contact', label: 'צור קשר' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="Sigal NLP Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary leading-tight">סיגל פולוין</div>
              <div className="text-xs text-gray-500">מאמנת ומטפלת NLP</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              לשיחת ייעוץ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 text-lg font-medium ${
                  isActive(link.path) ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-4 mx-4 text-center btn-primary">
              לשיחת ייעוץ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
