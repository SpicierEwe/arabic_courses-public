import { VideoPlayerProvider } from "@/providers/video_player_provider";

export default function MyApp({ Component, pageProps }) {
  return <VideoPlayerProvider></VideoPlayerProvider><Component {...pageProps} /></VideoPlayerProvider>;
}
