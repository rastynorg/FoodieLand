import { useContext } from "react";
import FoodielandContext from "../context";

const Categories = () => {
    const context=useContext(FoodielandContext)
    return ( <div className="my-5">
        <div className="container" style={{marginTop:'100px'}}>
            <div className=" my-5 d-flex justify-content-between">
                <h1>Categories</h1>
                <button id="category-button">View All Categories</button>
            </div>
            <div className="row justify-content-center">
                {context.categoryState.map((product)=>( <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-5 " >
                    <div className=" category-card"style={{background:`linear-gradient(${product.color1},${product.color2})`}} >
                        <img src={product.img} alt="" />
                    <h1 className="fs-6 pb-4">{product.name}</h1>
                    </div>


                </div>))}
            </div>
        </div>
    </div> );
}
 
export default Categories;