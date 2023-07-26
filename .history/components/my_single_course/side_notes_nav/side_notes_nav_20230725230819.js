import React, { useState } from "react";
import styles from "./side_notes_nav.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SideNotesNavComponent(pdf_url) {
  const pdfUrl =
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";

  const [isSideNotesNavOpen, setIsSideNotesNavOpen] = useState(false);

  return (
    <div
      className={`${styles.side_nav_container} ${
        isSideNotesNavOpen ? styles.side_nav_close : ""
      }`}
    >
      <div>
        <div
          className={styles.close_button_container}
          onClick={() => {
            setIsSideNotesNavOpen(false);
          }}
        >
          <AiOutlineCloseCircle className={styles.close_button} />
        </div>
        <embed
          src={pdfUrl}
          type="application/pdf"
          height="100%"
          selection="yes"
          className={styles.pdf_displayer}
        />
      </div>
    </div>
  );
}
