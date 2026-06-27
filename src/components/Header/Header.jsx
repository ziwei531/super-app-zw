import { useState } from "react"
import { Link } from "react-router-dom"
import navigation from "../../config/navigation"
import styles from "./Header.module.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          super-app-zw
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          {navigation.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <Link
                to={item.href}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
