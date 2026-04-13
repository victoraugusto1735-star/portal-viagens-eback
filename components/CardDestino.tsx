import Image from "next/image"
import styles from "../styles/CardDestino.module.css"

export default function CardDestino({ destino }) {
  return (
    <div className={styles.card}>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={200}
        height={120}
      />
      <h3>{destino.nome}</h3>
    </div>
  )
}