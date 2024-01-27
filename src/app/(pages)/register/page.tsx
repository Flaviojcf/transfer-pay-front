import { Loading } from "@/app/components/Loading/Loading";
import { Register } from "@/app/components/Register";

export default function RegisterPage(){
    return(
        <div><Loading>{<Register/>}</Loading></div>
    )
}