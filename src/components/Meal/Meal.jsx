import { Link } from 'react-router-dom';
import styles from './Meal.module.css';

function Meal({ meal }) {
  return (
    <Link to={`meal/${meal.idMeal}`} className={styles.mealItem}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.mealImage}
      />
      <div className={styles.mealInfo}>
        <h3 className={styles.mealTitle}>{meal.strMeal}</h3>
        <p className={styles.mealCategory}>
          Category: {meal.strCategory || 'Not available'}
        </p>
        <p className={styles.mealDescription}>
          {meal.strArea ? `Origin: ${meal.strArea}` : 'No origin information'}
        </p>
      </div>
    </Link>
  );
}

export default Meal;
