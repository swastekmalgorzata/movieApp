import AddButton from "./AddButton";
import Search from "./Search";

export const HomeMenu = ({
  searchValue,
  changeSearchValue,
  updateMoviesData,
}) => {
  return (
    <div className="d-flex align-items-center mb-3 mt-3 gap-3">
      <div className="flex-grow-1 mr-3">
        <Search
          searchValue={searchValue}
          changeSearchValue={changeSearchValue}
        />
      </div>
      <div>
        <AddButton updateData={updateMoviesData} />
      </div>
    </div>
  );
};
