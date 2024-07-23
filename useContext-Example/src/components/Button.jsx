import { counterContext } from "../context/context";
import Component1 from "./Component1";
import { useContext } from "react";
const Button=()=>{

    const value=useContext(counterContext);
    return(
        <>
        <h1>Button...</h1>
        <button onClick={()=>value.setCount((count)=>count+1)}><span><Component1></Component1></span>I am a button</button>
        </>
    )
}

export default Button;