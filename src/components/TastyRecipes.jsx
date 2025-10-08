import { useContext } from "react";
import FoodielandContext from "../context";
import RecipeCard from "./RecipeCard";


const TastyRecipes = () => {
    const context=useContext(FoodielandContext)
    return ( <div className="my-5">
        <div className="text-center my-5 py-5">
            <h1>Simple and tasty recipes</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="container">
            <div className="row">
                
               {context.recipesState.map((p)=>(<div className="col-lg-4 col-md-6 mt-5" >{!p.type?(<img src={p.image} className="w-100 h-100"></img>):(<RecipeCard image={p.image} time={p.time} title={p.title} type={p.type}/>)}</div>))}
                
            </div>
        </div>

    </div> );
}
 
export default TastyRecipes;