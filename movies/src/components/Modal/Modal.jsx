export const Modal = ({
  children,
  title,
  saveButtonLabel,
  saveButtonAction,
  onCancelClick,
}) => {
  return (
    <div
      className="modal fade"
      id="movie-modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onCancelClick}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCancelClick}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-add-button"
              onClick={saveButtonAction}
            >
              {saveButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
