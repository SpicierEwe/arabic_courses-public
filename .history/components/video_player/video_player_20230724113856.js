"use client";

export default function VideoPlayer({ selected_video_data }) {
  const selected_video_data = selected_video_data;
  return (
    <div>
      <video controls>
        <source src={selected_video_data[0]["video_url"]} type="video/mp4" />
      </video>
    </div>
  );
}
