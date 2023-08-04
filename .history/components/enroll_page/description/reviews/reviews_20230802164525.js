import styles from "./reviews.module.css";

export default function ReviewsComponent() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.section_heading}>Reviews</h1>

        <main>
          <div className={styles.review_container}></div>
        </main>
      </section>
    </div>
  );
}
