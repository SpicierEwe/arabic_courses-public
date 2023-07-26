import Link from "next/link";
import styles from "./nav_bar.module.css";

const NavbarComponent = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <p>
            <img src="/logo.png" alt="Logo" />
          </p>
        </Link>
      </div>
      <ul className={styles.navbarMenu}>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
      {props.children}
    </nav>
  );
};

export default NavbarComponent;
