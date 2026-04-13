import CardDestino from "../../components/CardDestino"

export default function Destinos() {
  const destinos = [
    {
      id: 1,
      nome: "alemanha",
      imagem: "/destinos/alemanha.png"
    },
    {
      id: 2,
      nome: "canada",
      imagem: "/destinos/canada.png"
    },
    {
      id: 3,
      nome: "japao",
      imagem: "/destinos/japao.png"
    },
    {
      id: 4,
      nome: "rusia",
      imagem: "/destinos/rusia.png"
    }
  ]

  return (
    <div>
      <h2>Destinos</h2>

      <div
        style={{display: "flex",gap: "20px",flexWrap: "wrap",justifyContent: "center",}}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  )
}