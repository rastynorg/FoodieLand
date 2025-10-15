import { useContext } from "react";
import formPic from "../img/Layer 1 1.png"
import SubscribeBanner from "./SubscribeBanner";
import FoodielandContext from "../context";
import RecipeCard from "./RecipeCard";

const ContactPage = () => {
    const context=useContext(FoodielandContext)
    const sliced=context.deliciousRecipesSTate.slice(0,4)
    return ( <div className="mt-5">
        <div className="container contact-container">
            <h1 className="text-center fw-bold py-5">Contact us</h1>
            <div className="row mt-5">
                <div className="col-4 poster d-flex justify-content-center">
                    <img src={formPic} alt="" className="img-fluid" />
                </div>
                <div className="col-8 ">
                    <form id="contact-form">
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label ps-2" htmlFor="NAME">NAME</label>
                                <input type="text" placeholder="Enter your name..." id="Name" className="form-control mt-2 py-3 px-4 rounded-4" />
                            </div>
                            <div className="col-6">
                                <label className="form-label ps-2" htmlFor="EMAILADDRESS">EMAIL ADDRESS</label>
                                <input type="text" placeholder="Your email address..." id="EMAILADDRESS" className="form-control mt-2 py-3 px-4 rounded-4" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <label className="form-label ps-2" htmlFor="SUBJECT">SUBJECT</label>
                                <input type="text" placeholder="Enter subject..." id="SUBJECT" className="form-control mt-2 py-3 px-4 rounded-4" />
                                
                            </div>
                            <div className="col-6">
                                <label className="form-label ps-2" htmlFor="ENquirytype">ENquiry type</label>
                                <select name="" id="ENquirytype" className="form-select py-3 px-4 rounded-4 mt-2">
                                    <option value="">Advertising</option>
                                    <option value="">Advertising</option>
                                    <option value="">Advertising</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="form-label ps-2" htmlFor="messages">Messages</label>
                            <textarea name="" id="messages" placeholder="Enter your messages..." className="form-control mt-2 no-resize"></textarea>
                        </div>
                        
                    </form>
                </div>
                <div className="text-center mt-5">
                    <div className="col-2"></div>
                    <div className="col-10"><input type="submit" form="contact-form" className="btn  bg-black text-white px-5 py-3 rounded-4 me-5" value="Submit" /></div>
                </div>
                <SubscribeBanner/>
                <div className="row mt-5 pt-5">
                    <h2 className="text-center pt-5 fw-bold h1">Check out the delicious recipe</h2>
                    {sliced.map((p)=>(<div className="col-lg-3 col-md-6 mt-5 my-2" ><RecipeCard image={p.image} time={p.time} title={p.title} type={p.type}/></div>))}
                    
                </div>
            </div>
        </div>
    </div>);
}
 
export default ContactPage;