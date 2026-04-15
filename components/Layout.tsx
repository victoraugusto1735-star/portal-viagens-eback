import Link from "next/link"
import styles from "../styles/Layout.module.css"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Portal de Viagens</h1>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 - Portal de Viagens</p>
      </footer>
    </>
  )
}