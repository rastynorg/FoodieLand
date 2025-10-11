import { Link } from "react-router-dom";
import pic from "../img/Foodieland.(1).png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( <div>
        <div className="container footer-container py-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <img src={pic} alt="" />
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <div className="col-6 text-end">
                    <Link className="text-decoration-none text-black ms-5" to="#">Recipes</Link>
                    <Link className="text-decoration-none text-black ms-5" to="#">Blog</Link>
                    <Link className="text-decoration-none text-black ms-5" to="#">Contact</Link>
                    <Link className="text-decoration-none text-black ms-5" to="#">About us</Link>
                </div>
            </div>
                <hr/>
                <div className="d-flex justify-content-center align-items-center position-relative pt-3">
                    
                        <h5 className=" text-center">© 2020 Flowbase. Powered by <span className="text-danger">Webflow</span></h5>
                    
                    <div className="position-absolute end-0 d-flex gap-3" >
                        <Link to="#">
                         <FontAwesomeIcon className="text-black fs-3" icon={faFacebook} />
                       </Link>
                       <Link to="#">
                         <FontAwesomeIcon className="text-black fs-3" icon={faXTwitter} />
                       </Link>
                       <Link to="#">
                         <FontAwesomeIcon className="text-black fs-3" icon={faInstagram} />
                       </Link>

                    </div>
                </div>
                
        </div>
        
    </div> );
}
 
export default Footer;