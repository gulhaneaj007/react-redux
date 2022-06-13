import React,{useRef,useEffect} from "react";
function User(props){

    const lastval=useRef();

    useEffect(()=>{
        lastval.current=props.count
        
    })
    const preporps=lastval.current
    return(
        <>
        <h1>current val {props.count}</h1>
        <h2>Previouse props {preporps}</h2>
        </>
    )
}

export default User