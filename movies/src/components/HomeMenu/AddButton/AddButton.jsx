import MovieForm from "../../MovieForm";
import "./AddButton.css";

export const AddButton = ({ updateData }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-add-button"
        data-bs-toggle="modal"
        data-bs-target="#movie-modal"
      >
        Add New Movie
      </button>
      <MovieForm updateData={updateData} />
    </>
  );
};
