import React from "react";
import { useContext } from "react";
import { UserContext } from "./App";

 const Usecontext = ()=>{
    const user = useContext(UserContext)
    return(
        <>
        <h1>
            name:{user.name} <br />
            age:{user.age}
        </h1>
        </>
    )
 }
 export default Usecontext;