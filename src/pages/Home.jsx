import Lout from "../components/Lout/Lout";
import word from "../assets/data/WordPages.json";
import { Link } from "react-router-dom";
import { createContext } from "react";

export const Cr = createContext(word);
const Home =({name="Home"})=>{ 
    return <span>
    <Lout name={name}/>
    {word.map((e,index)=><Link key={index} to={`/page/${e}`}>
        <span>{e}</span>
    </Link>)}
    </span>   
}
export default Home;