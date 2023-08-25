import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getCategoria(){
  const url = "http://localhost:8080/api/categoria"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getCategoria()

  return (
    <>
      <NavBar active={"categoria"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Categoria</h2>

        <div id="data" className="text-slate-300 m-1">
          {data.map(categoria => <DataRow categoria={categoria} /> )}
        </div>
      </main>
    </>

  )
}