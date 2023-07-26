import React from "react";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  const x = "https://docs.google.com/gview?embedded=true&url=";
  const pdfUrl =
    x +
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";
  return (
    <div className={styles.side_nav_container}>
      <div>
        <object
          data="filename.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Your web browser doesn't have a PDF plugin. Instead you can{" "}
            <a href="filename.pdf">click here to download the PDF file.</a>
          </p>
        </object>
      </div>
    </div>
  );
}
