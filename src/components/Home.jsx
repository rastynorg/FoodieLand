import Banner from "./Banner";
import Categories from "./Categories";
import ChefBanner from "./ChefBanner";
import TastyRecipes from "./TastyRecipes";
import pic from "../img/chefpic.png"


const Home = () => {
    return (<>
    <Banner/>
    <Categories/>
    <TastyRecipes/>
    <ChefBanner title="Everyone can be a chef in their own kitchen" text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim " btnText="Learn More" image={pic}/>
    </>);
}
 
export default Home;