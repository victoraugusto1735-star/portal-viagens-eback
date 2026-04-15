import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Detalhe.module.css"

type Props = {
  params: {
    id: string
  }
}

const destinos = [
  {
    id: "1",
    nome: "Canadá",
    imagem: "/destinos/canada.png",
    descricao: "Um país com paisagens naturais incríveis e cidades modernas.",
  },
  {
    id: "2",
    nome: "Alemanha",
    imagem: "/destinos/alemanha.png",
    descricao: "Rica em história, cultura e arquitetura impressionante.",
  },
  {
    id: "3",
    nome: "Japão",
    imagem: "/destinos/japao.png",
    descricao: "Mistura perfeita entre tradição e tecnologia.",
  },
  {
    id: "4",
    nome: "Rússia",
    imagem: "/destinos/rusia.png",
    descricao: "O maior país do mundo, cheio de história.",
  },
]

export default function DestinoDetalhe({ params }: Props) {
  const destino = destinos.find((d) => d.id === params.id)

  if (!destino) {
    return <h1>Destino não encontrado</h1>
  }

  return (
    <div className={styles.container}>
      
      <h1 className={styles.titulo}>{destino.nome}</h1>

      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={400}
        height={250}
        className={styles.imagem}
      />

      <p className={styles.descricao}>{destino.descricao}</p>

      <Link href="/destinos" className={styles.botao}>
        ← Voltar
      </Link>

    </div>
  )
}