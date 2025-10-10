

const ChefBanner = ({title,text,btnText,image}) => {
    return ( <div className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6  col-md-7 chef-banner-left">
                    <h1 >{title}</h1>
                    <p className="my-3">{text}</p>
                    <div>
                        <button className="bg-black btn text-white btn-lg">{btnText}</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 d-none d-md-block rounded-5 chef-banner-right">
                    <img src={image} className="img-fluid" alt="" />

                </div>
            </div>
        </div>
    </div> );
}
 
export default ChefBanner;