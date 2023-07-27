import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul>
          <li>
            <Link to="/" className={styles.logo} aria-label="Dogs - Home">
              <Dogs />
            </Link>
          </li>
          {data ? (
            <li>
              <Link className={styles.login} to="/conta">
                {data.username}
              </Link>
            </li>
          ) : (
            <li>
              <Link className={styles.login} to="/login">
                Login / Criar
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
