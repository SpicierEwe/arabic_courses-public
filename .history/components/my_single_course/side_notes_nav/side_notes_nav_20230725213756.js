// import React from "react";
// import styles from "./side_notes_nav.module.css";

// export default function SideNotesNavComponent() {
//   const pdfUrl =
//     "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";
//   return (
//     <div className={styles.side_nav_container}>
//       <div>
//         <embed
//           src={pdfUrl}
//           type="application/pdf"
//           height="100%"
//           className={styles.pdf_displayer}
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Document, Page } from "react-pdf";

function MyApp() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
