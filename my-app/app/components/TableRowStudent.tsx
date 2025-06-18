export default function TableRowStudent({student}:any){
    return(
        <tr className="border-b hover:bg-muted">
            <td className="px-4 py-2 font-medium">{student.ra}</td>
            <td className="px-4 py-2">{student.nome}</td>
            <td className="px-4 py-2">{student.email}</td>
            <td className="px-4 py-2">
            <a href={`/student/delete?id=${student.id}`} className="text-destructive hover:underline" >
              Deletar
            </a>
          </td>
        </tr>
    )
}