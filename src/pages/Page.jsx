import Lout from "../components/Lout/Lout";
import { Link } from "react-router-dom";
import { useParams } from "react-router"; 

const Page = () =>{


 
  const {name} = useParams();
    const f = name.split("");
    
    return <div>
      <Lout name={name}/>
      {f.map((e,index)=><Link key={index} to={`/about/${e}`}>{e}</Link>)}  
    </div>   
 }
 export default Page;