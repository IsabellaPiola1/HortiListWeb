"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormCategorias() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/categorias")
    }

    return (
        <>
            <NavBar active="categorias" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="categotia_pai" id="categotiaPai" label="categotia pai" type="number" inputmode="decimal" />
                    <InputText name="icone" id="icone" label="ícone" />

                    <div className="flex justify-around mt-4">
                        <Button href="/categorias" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
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