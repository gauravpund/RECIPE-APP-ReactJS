import { useContext } from "react";
import { counterContext } from "../context/context";
const Component1=()=>{

 const val=useContext(counterContext);

        return(
            <h1>Componenet1...count  {val.count}</h1>
        )
}

export default Component1;