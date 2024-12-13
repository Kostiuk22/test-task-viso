import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Meals</Link>
      <Link to="/saved">Saved recipes</Link>
    </nav>
  );
}

export default NavBar;
