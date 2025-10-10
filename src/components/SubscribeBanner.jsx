import pic1 from "../img/Subscribepic1.png"
import pic2 from "../img/Subscribepic2.png"

const SubscribeBanner = () => {
    return ( <div>
        <div className="container subscribe-container">
            <img src={pic1} className="Subscribe-pic1" alt="" /> 
            <img src={pic2} className="Subscribe-pic2" alt="" /> 
            <div className="text-center ">
                <h1>Deliciousness to your inbox</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <form className="mx-auto d-flex justify-content-between" >
                    <input type="text" placeholder="Your email address..."/>
                    <button className="bg-black btn text-white">Subscribe</button>
                </form>
            </div>

        </div>
    </div> );
}
 
export default SubscribeBanner;