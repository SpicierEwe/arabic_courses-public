"use client";

import RootLayout from "@/app/layout.js";
import MySingleCourseDisplayComponent from "../../../components/my_single_course/my_single_course.js";
import { fetch_the_course } from "../../../utils/utils.js";
import NavbarComponent from "@/components/nav_bar/nav_bar.js";

export default function MySingleCoursesDisplayPage({ params, searchParams }) {
  const course_id = params.course_id;

  //  this holds the fetched courses info from the internal api
  const [course_info, setCourseInfo] = useState({});

  useEffect(() => {
    const api = "/api/course_info_id=" + course_id;
    console.log(api);
    fetch(api).then((response) => {
      console.log(
        response.json().then((data) => {
          setCourseInfo(data["course_info"]);
          console.log(data);
        })
      );
    });
  }, []);

  return (
    <NavbarComponent>
      <MySingleCourseDisplayComponent
        course_data={course_data}
      ></MySingleCourseDisplayComponent>
    </NavbarComponent>
  );
}
