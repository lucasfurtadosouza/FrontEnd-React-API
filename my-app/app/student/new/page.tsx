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
        <div>
            <h1>Cadastrar Estudante</h1>
            <form onSubmit={saveStudent}>
                <input type="text" placeholder="RA" id="ra" required />
                <input type="text" placeholder="Nome " id="nome" />
                <input type="text" placeholder="email" id="email" /> <br />

                <Button type="submit"> Salvar </Button>


            </form>
        </div>

    )
}