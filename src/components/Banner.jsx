import pic from "../img/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
import TimerIcon from '../img/Timer.png'
import ForkknifeIcon from '../img/ForkKnife.png'
import image from '../img/image 14.png'
import profImg from '../img/Ellipse 2.png'
import vector from "../img/Vector.png"
import badge from '../img/Badge(1).png'
const Banner = () => {
return (
    <>
    <div className="container mt-5">
        <div className="row rounded-5 banner-row">
            <div className="col-6 banner-left p-5 rounded-start-5">
                <button className="btn bg-white rounded-pill d-flex align-items-center fs-5 text-black "><img src={image} alt="" /><span className="ms-2">Hot Recipes</span></button>
                <h1 className="text-black display-2 fw-bold mt-3">Spicy delicious chicken wings</h1>
                <p className="text-justify my-5">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className="buttons">
                    <button className="btn banner-btns me-2"><img src={TimerIcon} alt="" /><span className="ms-2">30 Minutes</span></button>
                    <button className="btn banner-btns"><img src={ForkknifeIcon} alt="" /><span className="ms-2">Chicken</span></button >
                </div>
                <div className="banner-footer d-flex justify-content-between mt-5">
                    <div className="profile d-flex align-items-center">
                    <img src={profImg} alt="" />
                    <div className="text">
                        <h3 className="fs-6 fw-bold">John Smith</h3>
                        <h4 >15 March 2022</h4>
                    </div>
                </div>
                <button className="btn bg-black d-flex align-items-center px-4 py-3 rounded-pill"><span className="text-white me-3">View Recipes</span><img src={vector} alt="" /></button>
                </div>
            </div>
            <div className="col-6 p-0">
                <img src={pic} alt="" className="img-fluid rounded-end-5" />
            </div>
            <img className="badge-pic" src={badge} alt="" />
            
        </div>
    </div>
    <div className="mt-5 py-2"></div>
    </>
  );}

 
export default Banner;