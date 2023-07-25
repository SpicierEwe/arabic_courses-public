"use client";

export default function VideoPlayer({ selected_video_data }) {
  return (
    <div>
      <p className={styles.test}>
        {selected_video_data.length != 0
          ? JSON.stringify(selected_video_data)
          : "Select a video"}
      </p>
      <video controls>
        <source src={selected_video_data[0]["video_url"]} type="video/mp4" />
      </video>
    </div>
  );
}
