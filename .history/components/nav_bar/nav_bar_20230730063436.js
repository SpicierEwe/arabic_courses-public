"use client";
import Link from "next/link";
import styles from "./nav_bar.module.css";
import Image from "next/image";
import { use, useContext, useEffect, useRef, useState } from "react";
import { VideoPlayerContext } from "@/Context/global_context_provider";
import { initFirebase } from "@/Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarComponent(props) {
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth();
  const [user, setUser] = useAuthState(auth);

  const user_image_link = user.photoURL;

  const nav_items = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "My Courses",
      link: "#",
    },
    {
      name: "About Us",
      link: "#",
    },
  ];

  cosnt;

  const [is_mobile_nav_open, setIsMobileNavOpen] = useState(false);
  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  function openMobileNav() {
    document
      .getElementById("mobile_nav_bar_overlay")
      .classList.remove("overlay_nav_close");
    document
      .getElementById("mobile_nav_bar_overlay")
      .classList.add("overlay_nav_open");
  }
  return (
    <div>
      {/* desktop navbar */}
      <nav className={styles.navbar_desktop} id="top_nav_bar">
        <div className={styles.navbarLogo}>
          {/* nav LOGO */}
          <Link href="/">
            <p>LOGO</p>
          </Link>
        </div>
        <div className={styles.nav_right_container}>
          {/* nav items */}
          <ul className={styles.navbar_desktop_menu}>
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
            <div
              className={styles.user_name_container}
              onClick={() => {
                auth.signOut();
                router.replace("/");
              }}
            >
              <p className={styles.user_name}>Hammad Bin Tayyab</p>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={styles.navbar_mobile}>
        <div className={styles.navbar_mobile_container_left}>
          <AiOutlineMenu
            size={23}
            onClick={() => {
              openMobileNav();
            }}
          />

          {/* navbar logoa */}
          <div className={styles.navbarLogo}>
            {/* nav LOGO */}
            <Link href="/">
              <p>LOGO</p>
            </Link>
          </div>
        </div>

        <Image
          className={styles.user_image}
          src={user_image_link}
          alt="user_image"
          width={100}
          height={100}
        ></Image>

        {/* overlay nav */}

        {/* this is the light  black background when touched it closes the overlay nav */}
        <div
          className={styles.overlay_nav_bg}
          id="overlay_nav_bg"
          onClick={() => {
            closeMobileNav();
          }}
        ></div>

        {/* this is the overlay nav */}
        <div
          className={`${styles.overlay_nav} ${styles.overlay_nav_close}`}
          ref={mobile_nav_overlay_ref}
          id="mobile_nav_bar_overlay"
        >
          <div className={styles.colored_container}>Menu</div>
          <ul className={styles.navbarMenu}>
            {nav_items.map((item, index) => {
              return (
                <li key={index} className={styles.navbarMobileMenuItem}>
                  <Link href={item.link}>
                    <p>{item.name}</p>
                  </Link>
                </li>
              );
            })}

            {/* Add more menu items as needed */}
          </ul>
        </div>
      </nav>

      {props.children}
    </div>
  );
}
