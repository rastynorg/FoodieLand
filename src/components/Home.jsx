import Banner from "./Banner";
import Categories from "./Categories";
import ChefBanner from "./ChefBanner";
import TastyRecipes from "./TastyRecipes";
import pic from "../img/chefpic.png"
import post1 from "../img/Post1.png"
import post2 from "../img/Post2.png"
import post3 from "../img/Post3.png"
import post4 from "../img/Post4.png"


const Home = () => {
    return (<>
    <Banner/>
    <Categories/>
    <TastyRecipes/>
    <ChefBanner title="Everyone can be a chef in their own kitchen" text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim " btnText="Learn More" image={pic}/>
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
            </div>
        </div>
    </div>
    </>);
}
 
export default Home;