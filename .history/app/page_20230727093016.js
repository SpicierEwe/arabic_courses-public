import NavigatorComponent from "@/components/Navigators/navigator";

export default function Home() {
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoadingScreenComponent></LoadingScreenComponent>;
  }
  if (!user) {
    return <SignInComponent />;
  }

  if (user) {
    return router.replace("/courses");
  }

  // return <LoadingScreenComponent />;

  return <LoadingScreenComponent></LoadingScreenComponent>;

  // return <AllCoursesDisplayComponent />;
}
