import navigation from "../config/navigation"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/" className={styles.logoLink}>
          super-app-zw
        </a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigation.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
