import Lout from "../components/Lout/Lout";
// import { useContext } from "react";
// import { Cr } from "./Home";
import { useParams } from "react-router"; 
import { useSelector } from "react-redux";
const About = () =>{
  // const words = useContext(Cr);
  const words = useSelector(state => state.words);
  const {name} = useParams();
  const st =  {
       padding:"15px",
       margin:"10px",
       backgroundColor:"orange",
       borderRadius:"10px",
       width:"max-content"
  }
  // console.log(name);
  // const r = words.data.filter((item,index)=>item.name.includes(name));
  // r.sort((a) => a.name.split("")[0] !== name ? 1 : -1);
  // console.log(r);
    return <div>
      <Lout name={name}/>
      <div style={st}>Совпадения по первой букве</div>   
      {words.data.filter((item,index)=>item.name.includes(name)).sort((a)=>a.name.split("")[0] !== name ? 1 : -1).map((i,index)=><div key={index} style={st}>{i.name}</div>)}
    </div>   
 }
 export default About;