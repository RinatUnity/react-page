
import Menu from "./components/Menu/Menu";
import {BrowserRouter,Route,Routes} from"react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import About from "./pages/About";




const App =()=>{ 
     
    return <BrowserRouter>
    <Menu name="Меню" page="Страница слова"></Menu>
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>           
            <Route path="/page/:name" element={<Page/>}></Route>
            <Route path="/about/:name" element={<About/>}></Route>
        </Routes>
       
    </BrowserRouter> 
}

export default App;