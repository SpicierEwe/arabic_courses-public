import Link from "next/link";
import styles from "./nav_bar.module.css";

const NavbarComponent = (props) => {
  const nav_items = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Courses",
      link: "/my_courses",
    },
    {
      name: "About Us",
      link: "/",
    },
  ];
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          {/* nav LOGO */}
          <Link href="/">
            <p>LOGO</p>
          </Link>
        </div>
        <div>
        {/* nav items */}
        <ul className={styles.navbarMenu}>
          {nav_items.map((item, index) => {
            return (
              <li key={index} className={styles.navbarMenuItem}>
                <Link href={item.link}>
                  <p>{item.name}</p>
                </Link>
              </li>
            );
          })}

          {/* Add more menu items as needed */}
        </ul>
        <div>
          {/* nav user */}
          <div>
            <p>user</p>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavbarComponent;
