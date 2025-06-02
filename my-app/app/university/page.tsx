export default async function University() {
    const request = await fetch("https://serverapi-kappa.vercel.app/api/universities");
    const listUniversity = await request.json();

    const universities = [];

    for(const university of listUniversity){
        universities.push(<h1 key={university.id}>{university.nome}</h1>);
    }
    
    return{
        
    }
}