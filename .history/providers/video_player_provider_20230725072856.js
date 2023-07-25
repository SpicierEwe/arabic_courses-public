const context = {
  videoPlayerRef: null,
  setVideoPlayerRef: () => {},
};

function VideoPlayerProvider() {
  const [videoPlayerRef, setVideoPlayerRef] = useState(null);

  const value = useMemo(
    () => ({ videoPlayerRef, setVideoPlayerRef }),
    [videoPlayerRef]
  );

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
}
