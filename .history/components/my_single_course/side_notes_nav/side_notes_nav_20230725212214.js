import React from "react";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  const pdfUrl =
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=100";
  return (
    <div className={styles.side_nav_container}>
      <h1>Side Notes Nav</h1>
      <div>
        <h1>PDF Viewer</h1>
        <embed
          src={pdfUrl}
          type="application/pdf"
          height="100%"
          className={styles.pdf_displayer}
        />
      </div>
    </div>
  );
}
