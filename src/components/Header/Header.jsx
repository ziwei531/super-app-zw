import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import navigation from "../../config/navigation"
import styles from "./Header.module.css"

/**
 * Build a tree from the flat navigation array.
 * Top-level items have no `parent`. Children are grouped under their parent by label.
 * Supports two levels: parent -> child -> grandchild.
 */
function buildNavTree(items) {
  const roots = []
  const map = new Map()

  for (const item of items) {
    if (item.hide) continue
    const node = { ...item, children: [] }
    map.set(item.label, node)
    if (!item.parent) {
      roots.push(node)
    }
  }

  for (const item of items) {
    if (item.hide) continue
    if (item.parent && map.has(item.parent)) {
      map.get(item.parent).children.push(map.get(item.label))
    }
  }

  return roots
}

function NavItem({ item, depth = 0 }) {
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    const LabelTag = item.subnav ? Link : "span"
    const labelProps = item.subnav
      ? { to: item.href, className: `${styles.navLink} ${styles.subnavLabel}` }
      : { className: styles.subnavLabel }

    return (
      <li className={`${styles.navItem} ${styles.hasSubnav}`}>
        <LabelTag {...labelProps}>{item.label}</LabelTag>
        <ul className={styles.subnavList}>
          {item.children.map((child) => (
            <NavItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li className={styles.navItem}>
      <Link to={item.href} className={styles.navLink}>
        {item.label}
      </Link>
    </li>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const tree = useMemo(() => buildNavTree(navigation), [])

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
          {tree.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

