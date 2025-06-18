import TableRowStudent from "../components/TableRowStudent";

export default async function Student() {

    const request = await fetch("https://serverapi-kappa.vercel.app/api/students");
    const listStudent = await request.json();

    // Puxa todas os Estudantes e armazenar eles na coleção
    // usando valores dinâmicos para criar linhas para a tabela.
    const students = [];
    for(const student of listStudent){
        students.push(<TableRowStudent key={student.id} student={student} />);
    }

    return(
        <div className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight">Lista de Estudantes</h1>
            <div className="rounded-lg border shadow-sm bg-background w-full max-w-3xl">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted">
                        <tr>
                            <th className="px-4 py-3 font-semibold">RA</th>
                            <th className="px-4 py-3 font-semibold">Nome</th>
                            <th className="px-4 py-3 font-semibold">Email</th>
                            <th className="px-4 py-3 font-semibold">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {students}
                    </tbody>
                </table>
            </div>
        </div>
    )
}