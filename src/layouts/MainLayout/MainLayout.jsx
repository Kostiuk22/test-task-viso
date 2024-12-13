import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
