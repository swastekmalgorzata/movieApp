export const MovieBody = ({ name, directors }) => (
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <span className="card-text">Directors: {directors.join(", ")}</span>
  </div>
);
