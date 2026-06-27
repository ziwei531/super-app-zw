import styles from "./TestPage.module.css"

function TestPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Test Page</h1>
      <p className={styles.text}>This is a test page.</p>
    </main>
  )
}

export default TestPage
