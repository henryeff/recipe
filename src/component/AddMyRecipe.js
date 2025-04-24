import { Modal } from "./Modal";
import { BeatLoader } from "react-spinners";

function AddMyRecipe({
  handlerAddMyRecipe,
  handlerFormStatus,
  openModal,
  handlerCloseModal,
  addMyRecipeLoading,
  handlerRecipeChange,
  handlerSubmit,
  myRecipe,
}) {
  return (
    <>
      <Modal openModal={openModal}>
        <div style={{ padding: "10px" }}>
          <h1 style={{ textAlign: "center", color: "#5f3dc4" }}>
            Add New Recipe
          </h1>
          <form onSubmit={handlerSubmit}>
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strMeal"
                placeholder="Recipe Name"
                onChange={handlerRecipeChange}
                value={myRecipe.strMeal}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strMealThumb"
                placeholder="Meal Picture"
                onChange={handlerRecipeChange}
                value={myRecipe.strMealThumb}
              />
              <br />
            </span>
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient1"
                placeholder="Ingredient 1"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient1}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient2"
                placeholder="Ingredient 2"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient2}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient3"
                placeholder="Ingredient 3"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient3}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient4"
                placeholder="Ingredient 4"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient4}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient5"
                placeholder="Ingredient 5"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient5}
              />
              <br />
            </span>
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient6"
                placeholder="Ingredient 6"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient6}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient7"
                placeholder="Ingredient 7"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient7}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient8"
                placeholder="Ingredient 8"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient8}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient9"
                placeholder="Ingredient 9"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient9}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient10"
                placeholder="Ingredient 10"
                onChange={handlerRecipeChange}
                value={myRecipe.strIngredient10}
              />
            </span>
            <br />
            <textarea
              name="strInstructions"
              placeholder="Instructions"
              onChange={handlerRecipeChange}
              value={myRecipe.strInstructions}
              rows="8"
              style={{ width: "97%" }}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              {addMyRecipeLoading && (
                <>
                  <div>
                    <BeatLoader color="#5f3dc4" />
                  </div>
                  <br />
                </>
              )}
              {!addMyRecipeLoading && (
                <>
                  <button style={{ margin: "15px", padding: "15px" }}>
                    Add Recipe
                  </button>
                  <button
                    style={{ padding: "15px" }}
                    onClick={() => {
                      handlerCloseModal();
                      handlerFormStatus(false);
                    }}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddMyRecipe;
