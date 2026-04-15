import '../styles/globals.css'
import Layout from '../components/Layout'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}