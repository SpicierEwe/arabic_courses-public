const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

function VideoPlayerProvider() {
  VideoPlayerContext = createContext(context);
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export default VideoPlayerProvider;
