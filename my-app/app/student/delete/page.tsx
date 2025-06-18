import DeleteStudent from "./DeleteStudent";
import { Suspense } from "react";
    
export default function Page() {
    return (
        <Suspense>
            <DeleteStudent/>
        </Suspense> 
    );
}