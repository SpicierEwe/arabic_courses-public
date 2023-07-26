import React from "react";
import styles from "./side_notes_nav.module.css";

export default function SideNotesNavComponent() {
  return (
    <div>
      <h1>Side Notes Nav</h1>
      <div>
        <h1>PDF Viewer</h1>
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          width="100%"
          height="500px"
          frameBorder="0"
        >
          This browser does not support PDFs. Please download the PDF to view
          it.
        </iframe>
      </div>
    </div>
  );
}
