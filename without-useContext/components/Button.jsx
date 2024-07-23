import Component1 from "./Component1";

const Button=({count})=>{
    return(
        <>
        <h1>Button...</h1>
        <button><span><Component1 count={count}></Component1></span>I am a button</button>
        </>
    )
}

export default Button;