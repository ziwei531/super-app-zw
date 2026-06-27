import { useState, useEffect, useRef } from "react"
import { getRandomQuote } from "../../api/client"
import styles from "./HomePage.module.css"

function HomePage() {
  const [quote, setQuote] = useState(null)
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current) return
    fetched.current = true

    getRandomQuote()
      .then(setQuote)
      .catch(() => setQuote(null))
  }, [])

  return (
    <main className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.titleLine}>Welcome to</span>
        <span className={`${styles.titleLine} ${styles.titleBrand}`}>Super App ZW!</span>
      </h1>
      <div className={styles.quote}>
        {quote ? (
          <>
            <p className={styles.quoteText}>&ldquo;{quote.content}&rdquo;</p>
            <p className={styles.quoteAuthor}>&mdash; {quote.author}</p>
          </>
        ) : (
          <p className={styles.quoteLoading}>Finding inspiration&hellip;</p>
        )}
      </div>
    </main>
  )
}

export default HomePage
