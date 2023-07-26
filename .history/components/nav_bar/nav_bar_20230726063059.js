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
        <div className={styles.nav_right_container}>
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
          <div className={styles.user_container}>
            {/* user image */}
            <Image
              className={styles.user_image}
              src="/images/mma.jpg"
              alt="user_image"
              width={100}
              height={100}
            ></Image>

            {/* user name */}
            <p className={styles.user_name}>
              Hammadskksojmdko ksdjklnsd cjkhsbjchb jbsjahcb jhbasjhbcjha
              bjhsabcjhbas jhbcjahsbcjsabjbc jhabcjhb ajsh bcj absjchb ajshbc
              jhabcuhasbdcuiah iucbha bcbjhasbdcjhbasjhcb jhabcjh bjuc
            </p>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavbarComponent;
