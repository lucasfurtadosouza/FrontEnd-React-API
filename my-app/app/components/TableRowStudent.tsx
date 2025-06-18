export default function TableRowStudent({student}:any){
    return(
        <tr>
            <td>{student.ra}</td>
            <td>{student.nome}</td>
            <td>{student.email}</td>
            <td><a href={`/student/delete?id=${student.id}`}>Deletar</a></td>
        </tr>
    )
}