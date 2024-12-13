const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (searchQuery = '') => {
  const url = searchQuery
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals || [];
  } catch {
    throw new Error('Failed to fetch meals');
  }
};

export async function fetchMealById(id) {
  try {
    const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
    const meal = await response.json();
    return meal.meals[0];
  } catch (error) {
    throw new Error(error);
  }
}
