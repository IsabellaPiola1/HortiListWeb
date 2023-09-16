import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getMetas } from "@/actions/metas";

export default async function Home() {
  const data = await getMetas()

  return (
    <>
      <NavBar active={"metas"} />

      <main className="bg-slate-900 mt-20 m-auto max-w-lg p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Metas</h2>
          <Button href="/metas/new" icon={<CreditCardIcon className="h-6 w-6" />}>
            criar meta
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(meta => <DataRow meta={meta} /> )}
        </div>
      </main>
    </>

  )
}