import { useEffect, useState } from "react";
import "./TagInput.css";

const Chip = ({ label, onDelete }) => {
  return (
    <span className="badge me-2 mb-2 director">
      {label}
      <button
        type="button"
        className="btn-close ms-2"
        onClick={onDelete}
      ></button>
    </span>
  );
};

export const TagInput = ({ changeInput, error, value }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag) {
        changeInput([...value, newTag]);
        setInputValue("");
      }
    }
  };

  const handleDeleteTag = (indexToRemove) => {
    const updatedTags = value.filter((_, index) => index !== indexToRemove);
    changeInput(updatedTags);
  };

  return (
    <div>
      <div className="form-group">
        <div className="form-floating gx-1">
          <input
            id="directors"
            type="text"
            className="form-control"
            placeholder="Directors"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          {!error ? (
            <span className="form-text text-muted" style={{ fontSize: 10 }}>
              Press Enter or comma to add a director.
            </span>
          ) : (
            <span className="invalid-feedback d-flex">
              Please fill the directors.
            </span>
          )}
          <label htmlFor="directors">Directors</label>
        </div>
        {value.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleDeleteTag(index)}
          />
        ))}
      </div>
    </div>
  );
};
