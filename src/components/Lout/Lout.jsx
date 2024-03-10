//  import { useState } from "react";

const Lout = ({name})=>{
    const st = {
       textAlign:"center",
       color:"rgb(250, 246, 0)",
       fontSize:"35px",
       fontWeight:"100px",
       backgroundColor:"green",
       margin:"30px",
       display:"block"
    } 
   
    return <div>
        <div style={st}>{name}</div>
        
    </div>
    
 }
  export default Lout;