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
  const ctx = useContext(VideoPlayerContext);

  const user_image_link = user.photoURL;

  const logoutFunction = () => {
    auth.signOut();
    if (ctx.display_notification.display === false) {
      ctx.set_display_notification({
        display: true,
        message: "We'll miss you! Hope to see you again soon.",
      });
    }
  };

  const nav_items = [
    {
      name: "Home-smklsmcksckjnskj sknc",
      link: "/",
    },
    {
      name: "My Courses",
      link: "/my-courses",
    },
    {
      name: "About Us",
      link: "/official/about-us",
    },
  ];

  const [is_mobile_nav_open, setIsMobileNavOpen] = useState(false);
  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  function openMobileNav() {
    setIsMobileNavOpen(true);
  }
  return (
    <div>
      {/* desktop navbar */}
      <nav className={styles.navbar_desktop} id="top_nav_bar">
        {/* nav LOGO */}
        <Link href={"/"}>
          <Image
            className={styles.navbarLogo}
            src="/images/logo/logo.png"
            width={1000}
            height={1000}
            alt="logo"
          ></Image>
        </Link>

        <div className={styles.nav_right_container}>
          {/* nav items */}
          <ul className={styles.navbar_desktop_menu}>
            {nav_items.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <li className={styles.navbarMenuItem}>
                    <p>{item.name}</p>
                  </li>
                </Link>
              );
            })}

            {/* Add more menu items as needed */}
          </ul>
          {/* nav user */}
          <div className={styles.user_and_dropDown_container}>
            <div className={styles.user_container}>
              {/* user image */}
              <Image
                className={styles.user_image}
                src={user_image_link}
                alt="user_image"
                width={100}
                height={100}
              ></Image>

              {/* user name */}
              <div className={styles.user_name_container}>
                <p className={styles.user_name}>{user.displayName}</p>
              </div>
            </div>

            {/* dropdown box */}
            {/* logout */}
            <div className={styles.dropDown_box}>
              <p
                //  logs out the user and displays a notification message
                onClick={() => {
                  logoutFunction();
                }}
              >
                Logout &nbsp; |—&gt;{" "}
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}
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
          <Link href={"/"}>
            <Image
              className={styles.navbarLogo}
              src="/images/logo/logo.png"
              width={1000}
              height={1000}
              alt="logo"
            ></Image>
          </Link>
        </div>

        {/* user image */}
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
          style={{ display: is_mobile_nav_open ? "block" : "none" }}
          id="overlay_nav_bg"
          onClick={() => {
            closeMobileNav();
          }}
        ></div>

        {/* this is the overlay nav */}
        <div
          className={`${styles.overlay_nav} ${
            is_mobile_nav_open
              ? styles.overlay_nav_open
              : styles.overlay_nav_close
          }`}
          id="mobile_nav_bar_overlay"
        >
          <div className={styles.colored_container}>
            <Image
              className={styles.navbarLogo}
              src="/images/logo/logo.png"
              width={1000}
              height={1000}
              alt="logo"
            ></Image>
          </div>
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

            <li
              className={styles.navbarMobileMenuItem}
              onClick={() => {
                logoutFunction();
              }}
            >
              <p style={{ color: "red" }}>Logout &nbsp; |—&gt;</p>
            </li>

            {/* Add more menu items as needed */}
          </ul>
        </div>
      </nav>

      {props.children}
    </div>
  );
}
