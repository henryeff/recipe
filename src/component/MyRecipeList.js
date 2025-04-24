import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";

function MyRecipeList({
  myRecipeList,
  handlerOpenModal,
  handlerDisplayMyRecipe,
}) {
  return (
    <>
      {myRecipeList.map((item) => (
        <div className={styles.topic} key={item.id}>
          <Link to={item.id} key={item.strMeal}>
            <h2
              onClick={() => {
                handlerOpenModal();
                handlerDisplayMyRecipe(item.id);
              }}
              className={styles.topicName}
            >
              {item.strMeal} {item.id}
            </h2>
          </Link>
          <nav>
            <Link to={item.id} key={item.strMeal}>
              <img
                onClick={() => {
                  handlerOpenModal();
                  handlerDisplayMyRecipe(item.id);
                }}
                style={{ width: "80%" }}
                src={
                  !item.strMealThumb ||
                  item.strMealThumb === "" ||
                  item.strMealThumb == null
                    ? `${process.env.PUBLIC_URL}/noimage.png`
                    : item.strMealThumb
                }
                alt={item.idMeal}
              />
            </Link>
          </nav>
        </div>
      ))}
    </>
  );
}
export default MyRecipeList;
