import styles from "./description.module.css";

export default function Description({ courseInfo }) {
  return (
    <div className={styles.container}>
      <section className={styles.flex}>
        <div>
          <h2 className={styles.heading}>Summary</h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: courseInfo.description }}
          ></p>
        </div>

        <div>
          <h2 className={styles.heading}>Outcome</h2>
          <p dangerouslySetInnerHTML={{ __html: courseInfo.outcome }}></p>
        </div>
      </section>
    </div>
  );
}
