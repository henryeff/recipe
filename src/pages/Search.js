import { Outlet, useNavigate } from "react-router-dom";
import SearchResult from "../component/SearchResult";
import "./Search.module.css";
import { BeatLoader } from "react-spinners";
function Search({
  searchBy,
  handlerChangeSearchBy,
  foodName,
  handlerChangeName,
  searchByName,
  searchResult,
  handlerOpenModal,
  searchRecipe,
  handlerClear,
  displayLoading,
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>
        <select
          name="searchBy"
          value={searchBy}
          onChange={handlerChangeSearchBy}
        >
          <option value="search.php?s=">Search By Name</option>
          <option value="filter.php?i=">Search By Ingeredient</option>
          <option value="filter.php?c=">Search By Category</option>
        </select>{" "}
        <input
          type="text"
          value={foodName}
          label="Search By Food Name"
          onChange={handlerChangeName}
        />{" "}
        <button
          onClick={() => {
            searchByName();
            navigate("/search");
          }}
        >
          Search
        </button>
        <button onClick={handlerClear}>Clear</button>
      </span>
      <br />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {displayLoading && <BeatLoader color="#5f3dc4" />}
      </div>
      {searchResult === null && <h1>No Recipe found!</h1>}
      {searchResult && (
        <div className="search-container">
          <div className="topics-container">
            <SearchResult
              searchResult={searchResult}
              handlerOpenModal={handlerOpenModal}
              searchRecipe={searchRecipe}
            />
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Search;
