import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";

async function getMetas(){
  const url = "http://localhost:8080/api/metas"
  const resp = await fetch(url, { next: { revalidate: 3600 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {
  const data = await getMetas()

  return (
    <>
      <NavBar active={"metas"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Metas</h2>
          <Button href="/metas/new" icon={<CreditCardIcon className="h-6 w-6" />}>
            criar metas
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(meta => <DataRow meta={meta} /> )}
        </div>
      </main>
    </>

  )
}