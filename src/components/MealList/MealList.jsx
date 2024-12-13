import styles from './MealList.module.css';
import Meal from '../Meal/Meal';

function MealList({ meals }) {
  return (
    <ul className={styles.mealList}>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
}

export default MealList;
