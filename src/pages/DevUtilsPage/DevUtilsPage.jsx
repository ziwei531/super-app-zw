import { Link } from "react-router-dom"
import navigation from "../../config/navigation"
import styles from "./DevUtilsPage.module.css"

function DevUtilsPage() {
  const children = navigation.filter(
    (item) => item.parent === "Dev Utils" && !item.hide
  )

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Dev Utils</h1>
      <p className={styles.text}>A collection of developer utility tools.</p>

      {children.length > 0 && (
        <ul className={styles.childList}>
          {children.map((child) => (
            <li key={child.label}>
              <Link to={child.href} className={styles.childLink}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default DevUtilsPage
