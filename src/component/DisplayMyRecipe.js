import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import styles from "./DisplayMyRecipe.module.css";
import { BeatLoader } from "react-spinners";
import EditMyRecipe from "./EditMyRecipe";
import { useEffect, useState } from "react";

function DisplayMyRecipe({
  openModal,
  handlerCloseModal,
  deleteMyRecipe,
  deleteMyRecipeLoading,
  handlerUpdateMyRecipe,
  handlerEditMyRecipe,
  form,
  recipeById,
  handlerSubmitUpdateMyRecipe,
  editLoading,
}) {
  const [editRecipe, setEditRecipe] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [ingredients, setMyIngredients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!editLoading && recipeById) {
      let newIngredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredientKey = "strIngredient" + i;
        if (
          recipeById[ingredientKey] !== null &&
          recipeById[ingredientKey] !== ""
        ) {
          newIngredients.push(recipeById[ingredientKey]);
        }
      }
      setMyIngredients(newIngredients);
      console.log(newIngredients);
    }
  }, [recipeById, editLoading]);

  const handlerOpenEditModal = () => setOpenEditModal(true);

  return (
    <div
      style={{
        textAlign: "center",
        display: "block",
        padding: 30,
        margin: "auto",
      }}
    >
      <Modal openModal={openModal}>
        <>
          <img
            src={
              !recipeById.strMealThumb
                ? `${process.env.PUBLIC_URL}/noimage.png`
                : recipeById.strMealThumb
            }
            style={{ width: "30%" }}
            alt={recipeById.idMeal}
          />
          <br />
          <h2 style={{ color: "#5f3dc4" }}>{recipeById.strMeal}</h2>
          <h3>Ingredients</h3>
          <div className={styles.ingredientsContainer}>
            {ingredients.map((ingredient, index) => (
              <div className={styles.ingredientItem} key={index}>
                <a
                  href={`https://www.fairprice.com.sg/search?query=${ingredient}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ingredient}
                </a>
              </div>
            ))}
          </div>
          <h3>Instructions</h3>
          <div className={styles.instructions}>
            {recipeById.strInstructions}
          </div>
        </>
        <br />
        {deleteMyRecipeLoading && (
          <>
            <div>
              <BeatLoader color="#5f3dc4" />
            </div>
            <br />
          </>
        )}
        {!deleteMyRecipeLoading && (
          <>
            <button
              style={{ margin: "15px", padding: "15px" }}
              onClick={() => {
                setEditRecipe(true);
                handlerEditMyRecipe(recipeById);
                handlerOpenEditModal();
              }}
            >
              Edit
            </button>
            <button
              style={{ padding: "15px" }}
              onClick={async () => {
                await deleteMyRecipe(recipeById.id);
                if (!deleteMyRecipeLoading) {
                  handlerCloseModal();
                  navigate("/myrecipe");
                }
              }}
            >
              Delete
            </button>
            <button
              style={{ margin: "15px", padding: "15px" }}
              onClick={() => {
                handlerCloseModal();
                navigate("/myrecipe");
              }}
            >
              Close
            </button>
          </>
        )}
      </Modal>
      {editRecipe && (
        <EditMyRecipe
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          handlerUpdateMyRecipe={handlerUpdateMyRecipe}
          form={form}
          handlerSubmitUpdateMyRecipe={handlerSubmitUpdateMyRecipe}
          editLoading={editLoading}
        />
      )}
    </div>
  );
}

export default DisplayMyRecipe;
