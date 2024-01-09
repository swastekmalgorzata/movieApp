export const Search = ({ searchValue, changeSearchValue }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search movie by title...."
      value={searchValue}
      onChange={changeSearchValue}
    />
  );
};
