import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

function SearchResult({ searchResult, handlerOpenModal, searchRecipe }) {
  return (
    <>
      {searchResult.map((item) => (
        <div className={styles.topic} key={item.idMeal}>
          <h2 className={styles.topicName}>{item.strMeal}</h2>
          <nav>
            <Link to={item.idMeal} key={item.idMeal}>
              <img
                onClick={() => {
                  searchRecipe(item.idMeal);
                  handlerOpenModal();
                }}
                style={{ width: "80%" }}
                src={item.strMealThumb}
                alt={item.idMeal}
              />
            </Link>
          </nav>
        </div>
      ))}
    </>
  );
}

export default SearchResult;
