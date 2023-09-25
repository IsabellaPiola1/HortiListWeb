import { getConta } from "@/actions/contas";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormContas({params}) {
    
    const conta = await getConta(params.id)

    return (
        <>
            <NavBar active="categorias" />
            <FormEdit categorias={categorias} />
        </>
    )
}