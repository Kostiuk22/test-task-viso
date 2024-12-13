import styles from './MealDetails.module.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMealById } from '../../services/mealRequests';
import Button from '../../components/ui/Button/Button';

const formatInstructions = (instructions) => {
  return instructions.replace(/^\d+\.\s/gm, '');
};

function MealDetails() {
  const { id: mealId } = useParams();
  const {
    data: meal,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['meal', mealId],
    queryFn: () => fetchMealById(mealId),
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error loading meal details</h3>;

  const ingredients = Object.keys(meal).filter(
    (key) => key.includes('strIngredient') && meal[key]
  );

  const measures = Object.keys(meal).filter(
    (key) => key.includes('strMeasure') && meal[key]
  );

  return (
    <div className={styles.mealDetails}>
      <h1 className={styles.title}>{meal.strMeal}</h1>
      <div className={styles.flex}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className={styles.image}
        />
        <div className={styles.details}>
          <div className={styles.block}>
            <h3>Meal Information</h3>
            <p>
              <strong>Category:</strong> {meal.strCategory || 'N/A'}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea || 'N/A'}
            </p>
            <p>
              <strong>Tags:</strong>{' '}
              {meal.strTags?.split(',').join(', ') || 'N/A'}
            </p>
          </div>
          <div className={styles.block}>
            <h3>Ingredients</h3>
            <ul className={styles.ingredients}>
              {ingredients.map((key, index) => (
                <li key={key}>
                  {meal[key]} - {meal[measures[index]] || 'N/A'}
                </li>
              ))}
            </ul>
            <Button
              type="button"
              onClick={() => console.log('Save recipe clicked')}
              className={styles.btn}
            >
              Save Recipe
            </Button>
          </div>
        </div>
      </div>
      <h3>Instructions</h3>
      <p className={styles.instructions}>
        {formatInstructions(meal.strInstructions)}
      </p>
      {meal.strYoutube && (
        <div className={styles.video}>
          <h3>Watch Video</h3>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
}

export default MealDetails;
