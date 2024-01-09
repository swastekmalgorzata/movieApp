import "./Containers.css";

export const ContentContainer = ({ children, style }) => (
  <div className="content-container" style={style}>
    {children}
  </div>
);
