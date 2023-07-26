import Link from "next/link";
import styles from "./nav_bar.module.css";
import Image from "next/image";

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
        <div className={styles.x}>
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
          {/* nav user */}
          <div>
            {/* user image */}
            <Image
              className={styles.user}
              src="/images/user.png"
              alt="user_image"
              width={40}
              height={40}
            ></Image>
            {/* user name */}
            <p></p>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavbarComponent;
