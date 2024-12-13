import styles from './Search.module.css';
import { useEffect, useState } from 'react';

function Search({ onSearch, searchQuery }) {
  const [text, setText] = useState(searchQuery);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(text);
    }, 500);
    return () => clearTimeout(timeout);
  }, [text, onSearch]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search meal"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Search;
