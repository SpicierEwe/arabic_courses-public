"use client";
import Link from "next/link";
import styles from "./nav_bar.module.css";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { VideoPlayerContext } from "@/Context/global_context_provider";

const NavbarComponent = (props) => {
  const ctx = useContext(VideoPlayerContext);

  const nav_bar_ref = useRef(null);

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleResize = (entries) => {
      for (const entry of entries) {
        const newHeight = entry.target.offsetHeight;
        setNavbarHeight(newHeight);
        console.log("Navbar Height changed:", newHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (nav_bar_ref.current) {
      resizeObserver.observe(nav_bar_ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
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
      <nav className={styles.navbar} ref={nav_bar_ref}>
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
            <p className={styles.user_name}>Hammad</p>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default NavbarComponent;
