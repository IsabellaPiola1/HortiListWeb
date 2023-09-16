import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getDespesa } from "@/actions/despesa";

export default async function Home() {
  const data = await getDespesa()

  return (
    <>
      <NavBar active={"despesa"} />

      <main className="bg-slate-900 mt-20 m-auto max-w-lg p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Despesa</h2>
          <Button href="/despesa/new" icon={<CreditCardIcon className="h-6 w-6" />}>
            criar despesa
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(despesa => <DataRow despesa={despesa} /> )}
        </div>
      </main>
    </>

  )
}