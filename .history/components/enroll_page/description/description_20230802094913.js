export default function Description({ courseInfo }) {
  return (
    <div>
      <section>
        <h2> {JSON.stringify(courseInfo)}</h2>
      </section>
    </div>
  );
}
