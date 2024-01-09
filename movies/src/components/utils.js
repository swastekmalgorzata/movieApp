export const renderStars = (rating, starClick) => {
  const maxRating = 5;
  const integerPart = Math.floor(rating);
  const isHalfStar = !!(rating - integerPart);
  const emptyStars = Math.floor(maxRating - integerPart);
  const getStarIcon = (index) => {
    if (index > emptyStars - 1) {
      return "bi-star-fill";
    }

    if (index === emptyStars - 1 && isHalfStar) {
      return "bi-star-half";
    }

    return "bi-star";
  };
  return (
    <div className="btn-group btn-group-sm" role="group">
      {Array(maxRating)
        .fill()
        .map((_, index) =>
          starClick ? (
            <button
              key={index}
              type="button"
              className="btn border-0 p-1"
              onClick={() => starClick(maxRating - index)}
            >
              <i className={`bi ${getStarIcon(index)} star`} />
            </button>
          ) : (
            <i key={index} className={`bi ${getStarIcon(index)} star`} />
          )
        )
        .reverse()}
    </div>
  );
};
