export const Message = ({ type }) => {
  if (type === "empty") {
    return (
      <div className="container text-center mt-5">
        <i
          className="bi bi-camera-reels"
          style={{ fontSize: "5rem", display: "block", margin: "0 auto 2rem" }}
        ></i>
        <h2>Oops! It seems like no data was added yet!</h2>
      </div>
    );
  }

  if (type === "missing") {
    return (
      <div className="container text-center mt-5">
        <i
          className="bi bi-camera-reels"
          style={{ fontSize: "5rem", display: "block", margin: "0 auto 2rem" }}
        ></i>
        <h2>Oops! It seems this movie is not added yet!</h2>
      </div>
    );
  }
};
