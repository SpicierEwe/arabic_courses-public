import { AllCourses } from "@/components/all_courses/all_courses";
import { VideoPlayerProvider } from "@/providers/video_player_provider";

export default function Home() {
  return (
    <div>
      <VideoPlayerProvider>
        <AllCourses></AllCourses>
      </VideoPlayerProvider>
    </div>
  );
}
