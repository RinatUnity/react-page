import Lout from "../components/Lout/Lout";
// import word from "../assets/data/WordPages.json";
import { Link } from "react-router-dom";
// import { createContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addWords,deletWords,renameWords } from "../store/words";

// export const Cr = createContext(word);
const Home =({name="Home"})=>{
    
    
    const [win1,setWin1] = useState(false);
    const [win2,setWin2] = useState(false);
    const [nword1,setNword1] = useState("");
    const [nword2,setNword2] = useState("");

    const words = useSelector(state => state.words);
    const dispath = useDispatch();
   
    const funcAddWord = () =>{
        const pro = {
            name:nword1
        }
        if(nword1.length > 0 ){
            dispath(addWords(pro));
        }
        setWin1(false);
        setNword1("");
        setNword2("");

    }
    const funcDelWord = (x) =>{
        const r = {
            name:x
        }
        dispath(deletWords(r));
    }
    const funcRenameWord = () =>{
        const r = {
            name:nword1,
            newname:nword2
        }
        dispath(renameWords(r));
        setWin2(false);
        setNword1("");
        setNword2("");

    }
    const funcCloseWin1 =()=>{
        setWin1(false);
        setNword1("");
        setNword2("");

    } 
    const funcCloseWin2 =()=>{
        setWin2(false);
        setNword1("");
        setNword2("");

    } 
    return <div>
    <Lout name={name}/>
    {/* //////////////////////////////////////////кнопка добавления */}
    <button style={{
        margin:30,
        fontSize:18,
        color:"red",
        backgroundColor:"gold",
        padding:10,
        borderRadius:10,
        fontWeight:700
        }}   
        onClick={(e)=>setWin1(true)}>добавить слово</button>
       {/* //////////////////////////////////////////////окно добавления */}
       { win1 && <div className="modal_wraper">
        <div className="modal">
         <h3>добавить новое слово</h3>
         <input type="text" onChange={(e)=>setNword1(e.target.value)}/>
         <div>
         <button onClick={funcAddWord}>добавить</button>
         <button onClick={funcCloseWin1}>отменить</button>
         </div>
         </div>
        </div>}
        {/* /////////////////////////////////////////////окно изменения */}
        { win2 && <div className="modal_wraper">
        <div className="modal">
         <h3>изменить слово: <span style={{color:"red"}}>{nword1}</span></h3>
         <input type="text" onChange={(e)=>setNword2(e.target.value)} placeholder={nword1}/>
         <div>
         <button onClick={funcRenameWord}>изменить</button>
         <button onClick={funcCloseWin2}>отменить</button>
         </div>
         </div>
        </div>}
        {/* ///////////////////////////////////////////////////////// */}
    <div className="conteint">
    {words.data.map((e,index)=><div key={index} className="kart">
        <Link className="kart_l" to={`/page/${e.name}`}>
        <span>{e.name}</span>  
        </Link>
        <button name={e.name} className="kart_b1" onClick={(e)=>funcDelWord(e.target.name)}>удалит</button>
        <button name={e.name} className="kart_b2" onClick={(e)=>setWin2(true)||setNword1(e.target.name)}>изменить</button>
        </div>)
    }
    </div>    
    </div>   
}
export default Home;