const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

function VideoPlayerProvider() {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export default VideoPlayerProvider;
