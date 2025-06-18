"use client"

import { Button } from "@/components/ui/button";


export default function NewStudent() {

    async function saveStudent(event: React.FormEvent) {
        event.preventDefault(); // Impede o reload da página
        console.log("Enviado")
        const ra = document.getElementById("ra") as HTMLInputElement;
        const nome = document.getElementById("nome") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;

        const student = {
            ra: ra.value,
            nome: nome.value,
            email: email.value,
        }

        console.log(student)
        try {
            const response = await fetch("https://serverapi-kappa.vercel.app/api/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar Estudante</h1>
            <form onSubmit={saveStudent} className="space-y-4">
            <div>
                <input
                type="text"
                placeholder="RA"
                id="ra"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Nome"
                id="nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className="pt-2">
                <Button type="submit" className="w-full">
                Salvar
                </Button>
            </div>
            </form>
        </div>

    )
}