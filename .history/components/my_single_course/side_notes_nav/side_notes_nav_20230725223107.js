import React from "react";
import styles from "./side_notes_nav.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SideNotesNavComponent() {
  const pdfUrl =
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";
  return (
    <div className={styles.side_nav_container}>
      <div>
        <div>
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
