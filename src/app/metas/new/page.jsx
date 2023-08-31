"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormMetas() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/metas")
    }

    return (
        <>
            <NavBar active="metas" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Metas</h2>
                <form action={handleSubmit}>
                    <InputText name="quantidade" id="quantidade" label="quantidade" />
                    <InputText name="valor_estimado" id="valorEstimado" label="valor estimado" type="number" inputmode="decimal" />
                    <InputText name="avaliacao" id="avaliacao" label="avaliacao" />

                    <div className="flex justify-around mt-4">
                        <Button href="/metas" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                            cancelar
                        </Button>
                        <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                            salvar
                        </Button>
                    </div>
                </form>
                <p>{message}</p>
            </main>
        </>
    )
}