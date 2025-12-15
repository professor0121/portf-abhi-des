import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "../layout/navigationBar/HeaderNavigationBar" // reuse nav links
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border text-muted mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Contact */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-4">Abhishek.dev</h3>
          <p className="text-sm mb-2">
            Full Stack Developer & Portfolio Showcase
          </p>
          <p className="text-sm">Email: <a href="mailto:abhishek@example.com" className="hover:text-primary">abhishek@example.com</a></p>
        </div>

        {/* Quick Links using NavLink */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-medium"
                      : "hover:text-primary transition"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-heading text-lg text-primary mb-4">Follow Me</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="https://github.com/professor0121" target="_blank" className="hover:text-primary"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhishek" target="_blank" className="hover:text-primary"><FaLinkedin /></a>
            <a href="https://twitter.com/abhishek" target="_blank" className="hover:text-primary"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border text-center py-4 text-sm text-muted">
        &copy; {new Date().getFullYear()} Abhishek.dev. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
