import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import MyFavoriteList from "../component/MyFavoriteList";
import { BeatLoader } from "react-spinners";

function Favorite({
  myFavoriteList,
  getMyFavourite,
  handlerOpenModal,
  refreshKey,
  searchRecipe,
  displayLoading,
}) {
  useEffect(() => {
    getMyFavourite();
  }, [refreshKey]);

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {displayLoading && <BeatLoader color="#5f3dc4" />}
      </div>
      {!displayLoading && (
        <div className="search-container">
          <div className="topics-container">
            <MyFavoriteList
              myFavoriteList={myFavoriteList}
              handlerOpenModal={handlerOpenModal}
              searchRecipe={searchRecipe}
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Favorite;
