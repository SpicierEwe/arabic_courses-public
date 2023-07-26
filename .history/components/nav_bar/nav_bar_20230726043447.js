import Link from "next/link";
import styles from "./nav_bar.module.css";

const NavbarComponent = (props) => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          {/* nav LOGO */}
          <Link href="/">
            <p>LOGO</p>
          </Link>
        </div>
        {/* nav items */}
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
      </nav>
      {props.children}
    </div>
  );
};

export default NavbarComponent;
