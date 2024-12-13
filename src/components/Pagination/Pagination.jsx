import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const displayedPages = pageNumbers.slice(
    Math.max(currentPage - 5, 0),
    Math.min(currentPage + 4, totalPages)
  );

  const showLeftEllipsis = displayedPages[0] > 1;
  const showRightEllipsis = displayedPages[displayedPages.length - 1] < totalPages;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrowButton}
      >
        Previous
      </button>

      {showLeftEllipsis && (
        <button
          onClick={() => onPageChange(1)}
          className={styles.pageButton}
        >
          1
        </button>
      )}

      {showLeftEllipsis && <span className={styles.ellipsis}>...</span>}

      {displayedPages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
        >
          {page}
        </button>
      ))}

      {showRightEllipsis && (
        <span className={styles.ellipsis}>...</span>
      )}

      {showRightEllipsis && (
        <button
          onClick={() => onPageChange(totalPages)}
          className={styles.pageButton}
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrowButton}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
