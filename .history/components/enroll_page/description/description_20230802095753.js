import styles from "./description.module.css";

export default function Description({ courseInfo }) {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.heading}>Summary</h2>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: courseInfo.description }}
        ></p>
      </section>
    </div>
  );
}
