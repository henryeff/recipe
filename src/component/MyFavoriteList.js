import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";

function myFavoriteList({ myFavoriteList, handlerOpenModal, searchRecipe }) {
  return (
    <>
      {myFavoriteList.map((item) => (
        <div className={styles.topic} key={item.idMeal}>
          <h2 className={styles.topicName}>{item.strMeal}</h2>
          <nav>
            <Link to={item.idMeal} key={item.idMeal}>
              <img
                onClick={async () => {
                  await searchRecipe(item.idMeal);
                  handlerOpenModal();
                }}
                style={{ width: "80%" }}
                src={
                  !item.strMealThumb
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
export default myFavoriteList;
