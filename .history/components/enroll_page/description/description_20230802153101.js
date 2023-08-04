import styles from "./description.module.css";

export default function Description({ courseInfo }) {
  return (
    <div className={styles.container}>
      <section className={styles.flex}>
        <div className={styles.c1}>
          <h2 className={styles.heading}>Summary_</h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: courseInfo.description }}
          ></p>
        </div>

        <div className={styles.c2}>
          <h2 className={styles.heading}>Outcome_</h2>
          <p
            className={styles.text2}
            dangerouslySetInnerHTML={{ __html: courseInfo.outcome }}
          ></p>
        </div>
      </section>

      <section>
        <h2 className={styles.heading}>Course Content_</h2>
      </section>
    </div>
  );
}
