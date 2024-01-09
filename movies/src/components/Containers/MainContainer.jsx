import "./Containers.css";

export const MainContainer = ({ children, style }) => (
  <div className="main-container" style={style}>
    {children}
  </div>
);
