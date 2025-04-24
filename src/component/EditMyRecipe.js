import { useNavigate } from "react-router-dom";
import { EditModal } from "./Modal";
import { BeatLoader } from "react-spinners";

function EditMyRecipe({
  openEditModal,
  setOpenEditModal,
  handlerUpdateMyRecipe,
  form,
  handlerSubmitUpdateMyRecipe,
  editLoading,
}) {
  const navigate = useNavigate();
  return (
    <>
      <EditModal openEditModal={openEditModal}>
        <div style={{ padding: "10px" }}>
          <h1 style={{ textAlign: "center", color: "#5f3dc4" }}>Edit Recipe</h1>
          <form
            onSubmit={() => {
              handlerSubmitUpdateMyRecipe(form.id);
              navigate("/myrecipe");
            }}
          >
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strMeal"
                placeholder="Recipe Name"
                value={form.strMeal}
                onChange={(e) => handlerUpdateMyRecipe(e, "strMeal")}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strMealThumb"
                placeholder="Meal Picture"
                onChange={(e) => handlerUpdateMyRecipe(e, "strMealThumb")}
                value={form.strMealThumb}
              />
              <br />
            </span>
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient1"
                placeholder="Ingredient 1"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient1")}
                value={form.strIngredient1}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient2"
                placeholder="Ingredient 2"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient2")}
                value={form.strIngredient2}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient3"
                placeholder="Ingredient 3"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient3")}
                value={form.strIngredient3}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient4"
                placeholder="Ingredient 4"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient4")}
                value={form.strIngredient4}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient5"
                placeholder="Ingredient 5"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient5")}
                value={form.strIngredient5}
              />
              <br />
            </span>
            <span>
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient6"
                placeholder="Ingredient 6"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient6")}
                value={form.strIngredient6}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient7"
                placeholder="Ingredient 7"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient7")}
                value={form.strIngredient7}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient8"
                placeholder="Ingredient 8"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient8")}
                value={form.strIngredient8}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient9"
                placeholder="Ingredient 9"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient9")}
                value={form.strIngredient9}
              />
              <input
                style={{ margin: "5px" }}
                type="text"
                name="strIngredient10"
                placeholder="Ingredient 10"
                onChange={(e) => handlerUpdateMyRecipe(e, "strIngredient10")}
                value={form.strIngredient10}
              />
            </span>
            <textarea
              name="strInstructions"
              placeholder="Instructions"
              onChange={(e) => handlerUpdateMyRecipe(e, "strInstructions")}
              value={form.strInstructions}
              rows="8"
              style={{ width: "97%" }}
            />
            {editLoading && <BeatLoader />}
            {!editLoading && (
              <>
                <span>
                  <button
                    style={{ width: "200px", margin: "15px", padding: "15px" }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setOpenEditModal(false);
                    }}
                    style={{ width: "200px", padding: "15px" }}
                  >
                    Close
                  </button>
                </span>{" "}
              </>
            )}
          </form>
        </div>
      </EditModal>
    </>
  );
}

export default EditMyRecipe;
