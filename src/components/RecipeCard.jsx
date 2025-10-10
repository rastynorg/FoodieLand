import React, { useContext, useState } from "react";
import FoodielandContext from "../context";

const RecipeCard = ({ image, title, time, type,color1,color2 }) => {
  const context=useContext(FoodielandContext)
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="recipe-card card shadow-sm border-0 d-flex h-100 p-3" style={{background:`linear-gradient(${color1},${color2})`}}>
      <div className="position-relative">
        <img src={image} alt={title} className="card-img-top recipe-image rounded-5" />

   {/* دکمه قلب با ایموجی */}
<button
  className={`favorite-btn ${isFavorite ? "active" : ""}`}
  onClick={toggleFavorite}
  aria-label="Add to favorites"
>
  {isFavorite ? (
    <span className="emoji-heart">❤️</span>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      stroke="black"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C2.938 9.73 5.042 11.795 8 14.314c2.958-2.52 5.062-4.584 6.286-6.876.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z" />
    </svg>
  )}
</button>



      </div>

      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>

        <div className="d-flex justify-content-start  gap-3 mt-5">
          <div className="d-flex align-items-center gap-1">
            <img src={context.TimerIcon} alt="" />
            <span>{time}</span>
          </div>

          <div className="d-flex align-items-center gap-1">
            <img src={context.ForkknifeIcon} alt="" />
            <span>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
