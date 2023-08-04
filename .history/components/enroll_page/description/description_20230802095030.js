import styles from "./description.module.css";

export default function Description({ courseInfo }) {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.heading}>Summary</h2>
      </section>
    </div>
  );
}
