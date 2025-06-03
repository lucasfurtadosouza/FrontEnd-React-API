export default function TableRowStudent({student}:any){
    return(
        <tr>
            <td>{student.ra}</td>
            <td>{student.nome}</td>
            <td>{student.email}</td>
        </tr>
    )
}