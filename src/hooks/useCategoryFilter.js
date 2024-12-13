import { useState } from 'react';

function useCategoryFilter(initialCategory = '') {
  const [category, setCategory] = useState(initialCategory);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return { category, handleCategoryChange };
}

export default useCategoryFilter;
