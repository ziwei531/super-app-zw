import styles from "./Footer.module.css"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Created by ZW &copy; {year}</p>
    </footer>
  )
}

export default Footer
