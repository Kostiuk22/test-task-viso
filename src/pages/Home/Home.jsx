import { useState } from 'react';
import styles from './Home.module.css';
import { fetchMeals } from '../../services/mealRequests';
import { useQuery } from '@tanstack/react-query';
import MealList from '../../components/MealList/MealList';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import useCategoryFilter from '../../hooks/useCategoryFilter';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { category, handleCategoryChange } = useCategoryFilter();

  const {
    isLoading,
    error,
    data: meals,
  } = useQuery({
    queryKey: ['meals', searchQuery],
    queryFn: () => fetchMeals(searchQuery),
  });

  const filteredMeals = meals
    ? meals.filter((meal) => (category ? meal.strCategory === category : true))
    : [];

  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(filteredMeals || []);

  if (isLoading) return <h3 className={styles.loading}>Loading...</h3>;
  if (error) return <h3 className={styles.loading}>Error fetching meals</h3>;

  return (
    <div className={styles.home}>
      <div className={styles.row}>
        <Search onSearch={setSearchQuery} searchQuery={searchQuery} />

        <div className={styles.categoryFilter}>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className={styles.categorySelect}
          >
            <option value="">All Categories</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
      </div>

      <MealList meals={currentItems} />
      {filteredMeals?.length > 0 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        <h3>Data not found</h3>
      )}
    </div>
  );
}

export default Home;
