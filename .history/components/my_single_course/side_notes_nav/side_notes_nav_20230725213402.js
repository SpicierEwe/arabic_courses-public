import React from "react";
import { Document, Page } from "react-pdf";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  const pdfUrl =
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf";

  return (
    <div className={styles.side_nav_container}>
      <div className={styles.pdf_displayer}>
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
