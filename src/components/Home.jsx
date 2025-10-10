import Banner from "./Banner";
import Categories from "./Categories";
import { useContext } from "react";
import FoodielandContext from "../context";
import RecipeCard from "./RecipeCard";
import ChefBanner from "./ChefBanner";
import pic from "../img/chefpic.png"
import post1 from "../img/Post1.png"
import post2 from "../img/Post2.png"
import post3 from "../img/Post3.png"
import post4 from "../img/Post4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Home = () => {
     const context=useContext(FoodielandContext)
    return (<>
    <Banner/>
    <Categories/>
    {/* TastyRecipes Section */}
    <div className="my-5">
        <div className="text-center my-5 py-5">
            <h1>Simple and tasty recipes</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="container">
            <div className="row">
                
               {context.recipesState.map((p)=>(<div className="col-lg-4 col-md-6 mt-5 my-2" >{!p.type?(<img src={p.image} className="w-100 h-100"></img>):(<RecipeCard image={p.image} time={p.time} title={p.title} type={p.type}/>)}</div>))}
                
            </div>
        </div>

    </div> 
    {/* TastyRecipes Section */}
    <ChefBanner title="Everyone can be a chef in their own kitchen" text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim " btnText="Learn More" image={pic}/>
    {/*Instagram Section */}
    <div className="mt-5">
        <div className="container-fluid instagram-section mt-5">
            <div className="text-center">
                <h1>Check out @foodieland on Instagram</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className="row p-5">
                <div className="col-lg-3 col-md-6"><img className="w-100 h-100" src={post1} alt="" /></div>
                <div className="col-lg-3 col-md-6"><img className="w-100 h-100" src={post2} alt="" /></div>
                <div className="col-lg-3 col-md-6"><img className="w-100 h-100" src={post3} alt="" /></div>
                <div className="col-lg-3 col-md-6"><img className="w-100 h-100" src={post4} alt="" /></div>
                <div className="d-flex justify-content-center mt-5"><button className="btn bg-black text-white d-flex flex-row align-items-center py-3 px-4"><span>Visit Our Instagram</span><FontAwesomeIcon className="ms-3 fs-3" icon={faInstagram}/></button></div>
            </div>
        </div>
    </div>
    {/*Instagram Section */}
    </>);
}
 
export default Home;