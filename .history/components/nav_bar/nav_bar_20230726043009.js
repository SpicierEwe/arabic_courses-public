import Link from "next/link";
import styles from "./nav_bar.module.css";

const NavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <ul className={styles.navbarMenu}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
