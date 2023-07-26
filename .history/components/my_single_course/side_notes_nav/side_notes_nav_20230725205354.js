import React from "react";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  const pdfUrl =
    "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf";
  return (
    <div>
      <h1>Side Notes Nav</h1>
      <div>
        <h1>PDF Viewer</h1>
        <iframe title="PDF Viewer" src={pdfUrl} width="100%" frameBorder="5px">
          This browser does not support PDFs. Please download the PDF to view
          it.
        </iframe>
      </div>
    </div>
  );
}
