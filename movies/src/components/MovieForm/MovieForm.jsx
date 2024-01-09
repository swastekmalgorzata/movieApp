import { useState } from "react";
import Modal from "../Modal";
import RatingButtons from "../RatingButtons";
import { TagInput } from "./TagInput";
import { addMovie } from "../../data/mockRequests/requests";

export const MovieForm = ({ updateData }) => {
  const [formData, setFormData] = useState({
    photoUrl: "",
    name: "",
    directors: [],
    rating: 0,
  });
  const [errors, setErrors] = useState({
    photoUrl: false,
    name: false,
    directors: false,
  });

  const changeName = (value) =>
    setFormData((prevState) => ({ ...prevState, name: value }));

  const changePoster = (value) =>
    setFormData((prevState) => ({ ...prevState, photoUrl: value }));

  const changeDirectors = (value) =>
    setFormData((prevState) => ({ ...prevState, directors: value }));

  const changeRating = (value) =>
    setFormData((prevState) => ({ ...prevState, rating: value }));

  const clearForm = () => {
    setFormData({
      photoUrl: "",
      name: "",
      directors: [],
      rating: 0,
    });
    setErrors({
      photoUrl: false,
      name: false,
      directors: false,
    });
  };

  const onSave = () => {
    if (!formData.name || !formData.photoUrl || !formData.directors.length) {
      setErrors({
        name: !formData.name,
        photoUrl: !formData.photoUrl,
        directors: !formData.directors.length,
      });
      return;
    }

    addMovie(formData);
    updateData();
    clearForm();
  };

  return (
    <Modal
      title="Add new movie"
      saveButtonLabel={"Add movie"}
      saveButtonAction={onSave}
      onCancelClick={clearForm}
    >
      <form className="row m-1">
        <div className="form-floating mb-3 gx-1">
          <input
            type="text"
            className="form-control"
            id="poster"
            placeholder="Poster"
            value={formData.photoUrl}
            onChange={(e) => changePoster(e.target.value)}
          />
          <label htmlFor="poster">Link to poster image</label>
          {errors.photoUrl && (
            <span className="invalid-feedback d-flex">
              Please fill the link.
            </span>
          )}
        </div>
        <div className="form-floating mb-3 gx-1">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Title"
            value={formData.name}
            onChange={(e) => changeName(e.target.value)}
          />
          <label htmlFor="name">Title</label>
          {errors.name && (
            <span className="invalid-feedback d-flex">
              Please fill the name.
            </span>
          )}
        </div>
        <div className="form-floating mb-3 gx-1">
          <TagInput
            changeInput={changeDirectors}
            error={errors.directors}
            value={formData.directors}
          />
        </div>
        <div className="form-floating mb-3 gx-1">
          <RatingButtons changeRating={changeRating} value={formData.rating} />
        </div>
      </form>
    </Modal>
  );
};
