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

    return(
        <div>
            {/* Tabela para exibir as Universidades */}
            <h1 className="mb-3  font-bold ">Lista de Universidades</h1>
            <table className="mb-6">
                <tbody>
                    {universities}
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