//  import { useState } from "react";

const Lout = ({name})=>{
    const st = {
       color:"rgb(250, 246, 0)",
       fontSize:"35px",
       fontWeight:"100",
       backgroundColor:"green"
    } 
   
    return <div>
        <div style={st}>{name}</div>
        
    </div>
    
 }
  export default Lout;