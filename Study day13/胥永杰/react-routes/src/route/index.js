import Animation from "../components/Animation";
import Video from "../components/Video";
import User from "../components/User";

import WebVideo from "../components/WebVideo";
import VueVideo from "../components/VueVideo";
import ReactVideo from "../components/ReactVideo";
import PhpVideo from "../components/PhpVideo";

import UserList1 from "../components/UserList1";
import UserList2 from "../components/UserList2";
import UserList3 from "../components/UserList3";
import UserList4 from "../components/UserList4";
import { Redirect } from "react-router";
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
  {
    path: "/user",
    component: User,
    routes: [
      {
        path: "/user",
        exact: true,
        component: () => <Redirect to="/user/UserList1?age=18&user=张三" />,
      },
      {
        path: "/user/UserList1",
        component: UserList1,
      },
      {
        path: "/user/UserList2",
        component: UserList2,
      },
      {
        path: "/user/UserList3",
        component: UserList3,
      },
      {
        path: "/user/UserList4",
        component: UserList4,
      },
    ],
  },
];

export default routes;
