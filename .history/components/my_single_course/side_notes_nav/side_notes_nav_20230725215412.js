import React from "react";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  const x = "https://drive.google.com/viewerng/viewer?embedded=true&url=";
  const pdfUrl =
    x +
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";
  return (
    <div className={styles.side_nav_container}>
      <div>
        <object
          data="mypdf.pdf"
          type="application/pdf"
          frameborder="0"
          width="100%"
          height="600px"
        >
          <embed
            src={pdfUrl}
            type="application/pdf"
            height="100%"
            className={styles.pdf_displayer}
          />
        </object>
      </div>
    </div>
  );
}
