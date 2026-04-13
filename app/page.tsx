import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h2>Bem-vindo ✈️</h2>
      <p>Explore destinos incríveis pelo mundo.</p>

      <Link href="/destinos">Ver destinos</Link>
    </div>
  )
}