import { useEffect } from "react";
import AddMyRecipe from "../component/AddMyRecipe";
import MyRecipeList from "../component/MyRecipeList";
import { Outlet } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function MyRecipe({
  handlerAddMyRecipe,
  openModal,
  handlerOpenModal,
  handlerCloseModal,
  addMyRecipeLoading,
  refreshKey,
  myRecipeList,
  searchMyRecipe,
  handlerRecipeChange,
  handlerSubmit,
  myRecipe,
  handlerFormStatus,
  formStatus,
  handlerDisplayMyRecipe,
  displayLoading,
}) {
  useEffect(() => {
    searchMyRecipe();
  }, [refreshKey]);

  return (
    <>
      {!formStatus && (
        <button
          onClick={() => {
            handlerFormStatus(true);
            handlerOpenModal();
          }}
        >
          Add New Recipe
        </button>
      )}
      <br />
      <br />
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
            <MyRecipeList
              myRecipeList={myRecipeList}
              handlerOpenModal={handlerOpenModal}
              handlerDisplayMyRecipe={handlerDisplayMyRecipe}
            />
          </div>
        </div>
      )}
      {formStatus && (
        <AddMyRecipe
          handlerAddMyRecipe={handlerAddMyRecipe}
          handlerFormStatus={handlerFormStatus}
          openModal={openModal}
          handlerCloseModal={handlerCloseModal}
          addMyRecipeLoading={addMyRecipeLoading}
          handlerRecipeChange={handlerRecipeChange}
          handlerSubmit={handlerSubmit}
          myRecipe={myRecipe}
        />
      )}
      <Outlet />
    </>
  );
}
export default MyRecipe;
