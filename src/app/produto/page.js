import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getProduto } from "@/actions/produto";

export default async function Home() {
  const data = await getProduto()

  return (
    <>
      <NavBar active={"produto"} />

      <main className="bg-slate-900 mt-20 m-auto max-w-lg p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Produto</h2>
          <Button href="/produto/new" icon={<CreditCardIcon className="h-6 w-6" />}>
            criar produto
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(produto => <DataRow produto={produto} /> )}
        </div>
      </main>
    </>

  )
}