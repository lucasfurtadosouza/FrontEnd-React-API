import TableRowUniversity from "../components/TableRowUniversity";

export default async function University() {
    const request = await fetch("https://serverapi-kappa.vercel.app/api/universities");
    const listUniversity = await request.json();

    // Puxa todas as Universidades e armazenar elas na coleção
    // usando valores dinâmicos para criar linhas para a tabela.
    const universities = [];
    for(const university of listUniversity){
        universities.push(<TableRowUniversity key={university.id} university={university} />);
    }

    return (
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight">Lista de Universidades</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
            <table className="w-full text-sm text-center">
                <thead className="bg-muted">
                    <tr>
                        <th className="px-4 py-3 font-semibold">Abreviação</th>
                        <th className="px-4 py-3 font-semibold">Nome</th>
                        <th className="px-4 py-3 font-semibold">Endereço</th>
                        <th className="px-4 py-3 font-semibold">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {universities}
                </tbody>
            </table>
            </div>
        </div>
    );
}