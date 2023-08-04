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

        <div className={styles.grid}>
          {courseInfo.sections.map((section, index) => {
            return (
              <div key={index} className={styles.grid_item}>
                {<h2>{section.section_name}</h2>}
                {<p>SUB-SECTIONS</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
