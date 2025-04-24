import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "./Modal";
import styles from "./DisplayMyRecipe.module.css";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";

function DisplayMyFavorite({
  openModal,
  handlerCloseModal,
  deleteMyFavorite,
  deleteMyFavoriteLoading,
  recipeById,
  recipeLoading,
}) {
  const [ingredients, setMyIngredients] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!recipeLoading && recipeById) {
      let newIngredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredientKey = "strIngredient" + i;
        const mesuerementKey = "strMeasure" + i;
        if (
          recipeById[ingredientKey] !== null &&
          recipeById[ingredientKey] !== ""
        ) {
          newIngredients.push({
            ingredientName: recipeById[ingredientKey],
            ingredientMeasure: recipeById[mesuerementKey],
            ingredientImage:
              "https://www.themealdb.com/images/ingredients/" +
              recipeById[ingredientKey] +
              "-Small.png",
          });
        }
      }
      setMyIngredients(newIngredients);
    }
  }, [recipeById, recipeLoading]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "block",
        padding: 30,
        margin: "auto",
      }}
    >
      {!recipeLoading && recipeById && (
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
                  {
                    <a
                      href={`https://www.fairprice.com.sg/search?query=${ingredient.ingredientName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={ingredient.ingredientImage}
                        alt={"Ingredient image" + index}
                      />
                    </a>
                  }
                  <br />
                  {ingredient.ingredientMeasure},{ingredient.ingredientName}
                </div>
              ))}
            </div>
            <h3>Instructions</h3>
            <div className={styles.instructions}>
              {recipeById.strInstructions}
            </div>
          </>
          <br />
          {deleteMyFavoriteLoading && (
            <>
              <div>
                <BeatLoader color="#5f3dc4" />
              </div>
              <br />
            </>
          )}
          {!deleteMyFavoriteLoading && (
            <>
              <button
                style={{ margin: "15px", padding: "15px" }}
                onClick={async () => {
                  await deleteMyFavorite(id);
                  if (!deleteMyFavoriteLoading) {
                    handlerCloseModal();
                    navigate("/favorite");
                  }
                }}
              >
                Remove from My Favorite
              </button>
              <button
                style={{ padding: "15px" }}
                onClick={() => {
                  handlerCloseModal();
                  navigate("/favorite");
                }}
              >
                Close
              </button>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}

export default DisplayMyFavorite;
