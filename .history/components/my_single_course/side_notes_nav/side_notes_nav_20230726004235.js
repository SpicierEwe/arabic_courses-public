import React, { useContext, useEffect, useState } from "react";
import styles from "./side_notes_nav.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VideoPlayerContext } from "@/providers/video_player_provider";

export default function SideNotesNavComponent() {
  const ctx = useContext(VideoPlayerContext);

  const [pdfUrl, setPdfUrl] = useState(() => {});
  useEffect(() => {
    setPdfUrl(ctx.selectedPdfUrl);
  }, [ctx.selectedPdfUrl]);

  const x = ctx.selectedPdfUrl + "#zoom=fit";
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
        <h1>{ctx.selectedPdfUrl}</h1>
        <embed
          src={x}
          type="application/pdf"
          height="100%"
          selection="yes"
          className={styles.pdf_displayer}
        />
      </div>
    </div>
  );
}
