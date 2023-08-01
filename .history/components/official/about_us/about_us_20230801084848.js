import styles from "./about_us.module.css";

export default function AboutUsComponent() {
  return (
    <div className={styles.a}>
      <div className={styles.hero_bg}>
        <section className={styles.hero_section}>
          <div>
            <h2>by</h2>
            <h1>aBeliever</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
