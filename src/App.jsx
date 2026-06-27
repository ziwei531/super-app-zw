import Header from "./components/Header"
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Header />
      <main className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Welcome to</span>
          <span className={`${styles.titleLine} ${styles.titleBrand}`}>Super App ZW!</span>
        </h1>
        <p className={styles.subtitle}>Good to see you here</p>
      </main>
    </>
  )
}

export default App
