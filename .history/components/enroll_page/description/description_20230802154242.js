import styles from "./description.module.css";

export default function Description({ courseInfo }) {
  const generate = () => {};
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

      <section className={styles.section_2}>
        <h2 className={styles.heading}>Course Content_</h2>

        <div>
          {courseInfo.sections.map((item, index) => {
            return (
              <div key={index}>
                <h3 className={styles.heading2}>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
