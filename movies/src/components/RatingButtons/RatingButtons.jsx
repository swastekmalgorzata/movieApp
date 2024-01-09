import { useState } from "react";
import { renderStars } from "../utils";
import "./RatingButtons.css";

export const RatingButtons = ({ changeRating, value }) => {
  const handleRatingChange = (e) => {
    changeRating(parseFloat(e.target.value));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-9 d-flex justify-content-center">
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={value}
          onChange={handleRatingChange}
          className="form-range mt-1 custom-range"
        />
      </div>
      <div className="col-3">{renderStars(value)}</div>
    </div>
  );
};
