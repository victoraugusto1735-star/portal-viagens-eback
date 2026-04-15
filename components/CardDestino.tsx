import Link from "next/link"
import Image from "next/image"
import styles from "../styles/CardDestino.module.css"

type Destino = {
  id: string
  nome: string
  imagem: string
}

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <Link href={`/destinos/${destino.id}`}>
      <div className={styles.card}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          width={200}
          height={150}
        />
        <h3>{destino.nome}</h3>
      </div>
    </Link>
  )
}