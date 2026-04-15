import CardDestino from "@/components/CardDestino"

const destinos = [
  { id: "1", nome: "Alemanha", imagem: "/destinos/alemanha.png" },

  { id: "2", nome: "Canadá", imagem: "/destinos/canada.png" },

  { id: "3", nome: "Rússia", imagem: "/destinos/rusia.png" },

  { id: "4", nome: "Japão", imagem: "/destinos/japao.png" },
]

export default function Destinos() {
  return (
    <div>
      <h1>Destinos</h1>

      {destinos.map((destino) => (
        <CardDestino key={destino.id} destino={destino} />
      ))}
    </div>
  )
}