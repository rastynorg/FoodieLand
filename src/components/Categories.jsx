import { useContext } from "react";
import FoodielandContext from "../context";

const Categories = () => {
    const context=useContext(FoodielandContext)
    return ( <div className="mt-5">
        <div className="container">
            <div className=" mb-5 d-flex justify-content-between">
                <h1>Categories</h1>
                <button id="category-button">View All Categories</button>
            </div>
            <div className="row">
                {context.categoryState.map((product)=>( <div className="col-2 " >
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