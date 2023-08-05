import React, { useContext, useEffect, useState } from "react";
import styles from "./side_notes_nav.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VideoPlayerContext } from "@/Context/global_context_provider";

export default function SideNotesNavComponent() {
  const ctx = useContext(VideoPlayerContext);

  // const pdfUrl =
  //   "https://abdurrahmanorg.files.wordpress.com/2014/01/madina-book-1-arabic-text-dr-v-abdurrahim.pdf#zoom=fit";
  return (
    <div
      className={`${styles.side_nav_container} ${
        ctx.isSideNodesNavOpen ? styles.open_side_notes_nav_container : ""
      }`}
    >
      <div>
        {/* close button */}
        <div
          className={styles.close_button_container}
          onClick={() => {
            ctx.setIsSideNotesNavOpen(false);
          }}
        >
          <AiOutlineCloseCircle className={styles.close_button} />
        </div>
        <iframe
          src="https://drive.google.com/file/d/1cra_uSc9qSw630OPLgRLCRy-cQTakN09/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <embed
          // src={ctx.selectedPdfUrl + "#zoom=fit"}
          src="https://drive.google.com/file/d/1cra_uSc9qSw630OPLgRLCRy-cQTakN09/view?usp=sharing"
          type="application/pdf"
          height="100%"
          selection="yes"
          className={styles.pdf_displayer}
          // style={{
          //   height: `${100 - ctx.nav_bar_height + 5}vh`,
          // }}
        />
      </div>
    </div>
  );
}
