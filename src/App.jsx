import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import navigation from "./config/navigation"
import styles from "./App.module.css"

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          {navigation
            .filter((item) => !item.hide)
            .map(({ href, component: Page }) => (
              <Route key={href} path={href} element={<Page />} />
            ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
