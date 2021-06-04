import Animation from "../components/Animation";
import User from "../components/User";
import Video from "../components/Video";
import WebVideo from "../components/WebVideo";
import PhpVideo from "../components/PhpVideo";
import VueVideo from "../components/VueVideo";
import ReactVideo from "../components/ReactVideo";
import UserList from "../components/UserList";
import UserList1 from "../components/UserList1";
import UserList2 from "../components/UserList2";
import UserList3 from "../components/UserList3";
import { Redirect } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/animation" />,
  },
  {
    path: "/animation",
    component: Animation,
  },
  {
    path: "/user",
    component: User,
    routes: [
      {
        path: "/user",
        exact: true,
        component: () => <Redirect to="/user/userlist?age=18&user=张三" />,
      },
      {
        path: "/user/userlist",
        component: UserList,
      },
      {
        path: "/user/userlist1",
        component: UserList1,
      },
      {
        path: "/user/userlist2",
        component: UserList2,
      },
      {
        path: "/user/userlist3",
        component: UserList3,
      },
    ],
  },
  {
    path: "/video",
    component: Video,
    routes: [
      {
        path: "/video",
        exact: true,
        component: () => <Redirect to="/video/webvideo" />,
      },
      {
        path: "/video/webvideo",
        component: WebVideo,
      },
      {
        path: "/video/vuevideo",
        component: VueVideo,
      },
      {
        path: "/video/reactvideo",
        component: ReactVideo,
      },
      {
        path: "/video/phpvideo",
        component: PhpVideo,
      },
    ],
  },
];
export default routes;
