import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import C1 from './img/C1.png';import C2 from './img/C2.png'
import C3 from './img/C3.png';import C4 from './img/C4.png'
import C5 from './img/C5.png';import C6 from './img/C6.png'
import FoodielandContext from "./context";


const App = () => {
    const [categories,setCategories]=useState([
        {id:1,name:"Breakfast",color1:"rgba(112, 130, 70, 0)",color2:"rgba(112, 130, 70, 0.1)",img:C1},{id:2,name:"Vegan",color1:"rgba(108, 198, 63, 0)",color2:"rgba(108, 198, 63, 0.1)",img:C2},
        {id:3,name:"Meat",color1:"rgba(204, 38, 27, 0)",color2:"rgba(204, 38, 27, 0.1)",img:C3},{id:4,name:"Dessert",color1:"rgba(240, 158, 0, 0)",color2:"rgba(240, 158, 0, 0.1)",img:C4},
        {id:5,name:"Lunch",color1:"rgba(0, 0, 0, 0)",color2:"rgba(0, 0, 0, 0.05)",img:C5},{id:6,name:"Chocolate",color1:"rgba(0, 0, 0, 0)",color2:"rgba(0, 0, 0, 0.05)",img:C6}
    ])
    return (  <FoodielandContext.Provider value={{
        categoryState:categories,

    }}>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    
    </FoodielandContext.Provider >);
}
 
export default App;