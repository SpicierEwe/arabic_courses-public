export default function Navigator() {
  const app = initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    return <SignInComponent />;
  }

  if (user) {
    return <AllCoursesDisplayComponent />;
  }

  return <LoadingScreenComponent />;
}
