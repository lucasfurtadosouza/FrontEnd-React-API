"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteStudent() {
    const id = useSearchParams().get("id");
    const router = useRouter();

    async function handleDelete() {
        console.log("Estudante deletada");
        try {
            const responde = await fetch(`https://serverapi-kappa.vercel.app/api/students/${id}`, {
                method: "DELETE",
            })
            router.push("/student");
        } catch (error) {
            console.error("Erro ao deletar a estudante:", error);
        }
    }
    return (
        <div>
            <h1>Deletar Estudante? </h1>
            <Button variant="destructive" onClick={handleDelete}>Deletar</Button>
        </div>
    );
}