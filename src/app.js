import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import C1 from './img/C1.png';import C2 from './img/C2.png'
import C3 from './img/C3.png';import C4 from './img/C4.png'
import C5 from './img/C5.png';import C6 from './img/C6.png'
import pic from "./img/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
import R1 from './img/R1.png'
import R2 from './img/R2.png'
import R3 from './img/R3.png'
import R4 from './img/R4.png'
import R5 from './img/R5.png'
import R6 from './img/R6.png'
import R7 from './img/R7.png'
import R8 from './img/R8.png'
import R9 from './img/R9.png'
import ForkknifeIcon from './img/ForkKnife.png'
import TimerIcon from './img/Timer.png'

import FoodielandContext from "./context";


const App = () => {
    const [categories,setCategories]=useState([
        {id:1,name:"Breakfast",color1:"rgba(112, 130, 70, 0)",color2:"rgba(112, 130, 70, 0.1)",img:C1},{id:2,name:"Vegan",color1:"rgba(108, 198, 63, 0)",color2:"rgba(108, 198, 63, 0.1)",img:C2},
        {id:3,name:"Meat",color1:"rgba(204, 38, 27, 0)",color2:"rgba(204, 38, 27, 0.1)",img:C3},{id:4,name:"Dessert",color1:"rgba(240, 158, 0, 0)",color2:"rgba(240, 158, 0, 0.1)",img:C4},
        {id:5,name:"Lunch",color1:"rgba(0, 0, 0, 0)",color2:"rgba(0, 0, 0, 0.05)",img:C5},{id:6,name:"Chocolate",color1:"rgba(0, 0, 0, 0)",color2:"rgba(0, 0, 0, 0.05)",img:C6}
    ])
    const [Banner,setBanners]=useState({title:"Spicy delicious chicken wings",text:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",time:"30 Minutes",food:"Chicken",image:pic})

    const [recipes,setRecipes]=useState([{image:R1,title:"Big and Juicy Wagyu Beef Cheeseburger",time:"30 Minutes",type:"Snack"},{image:R2,title:"Fresh Lime Roasted Salmon with Ginger Sauce",time:"30 Minutes",type:"Fish"},{image:R3,title:"Strawberry Oatmeal Pancake with Honey Syrup",time:"30 Minutes",type:"Breakfast"},{image:R4,title:"Fresh and Healthy Mixed Mayonnaise Salad",time:"30 Minutes",type:"Healthy"},{image:R5,title:"Chicken Meatballs with Cream Cheese",time:"30 Minutes",type:"Meat"},{image:R9},{image:R6,title:"Fruity Pancake with Orange & Blueberry",time:"30 Minutes",type:"Sweet"},{image:R7,title:"The Best Easy One Pot Chicken and Rice",time:"30 Minutes",type:"Snack"},{image:R8,title:"The Creamiest Creamy Chicken and Bacon Pasta",time:"30 Minutes",type:"Noodles"}])

    return (  <FoodielandContext.Provider value={{
        categoryState:categories,
        BannerState:Banner,
        recipesState:recipes,
        ForkknifeIcon:ForkknifeIcon,
        TimerIcon:TimerIcon,

    }}>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    
    </FoodielandContext.Provider >);
}
 
export default App;