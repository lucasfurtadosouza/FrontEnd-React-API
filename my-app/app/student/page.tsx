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
        <div>
            {/* Tabela para exibir os Estudantes */}
            <h1 className="mb-3  font-bold ">Lista de Estudantes</h1>
            <table className="mb-6">
                <tbody>
                    {students}
                </tbody>
            </table>

            {/* Botão de Voltar */}
            <a href="../"
                className="inline-flex items-center bg-black px-3 py-1.5 rounded-md text-run-500 hover:bg-gray-900 duration-500">
                    <svg className="h-4 mr-1.5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                <span className="text-white ml-1 font-medium text-md">Voltar</span>
            </a>
        </div>
    )
}