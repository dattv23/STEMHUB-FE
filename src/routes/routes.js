//config routes
import config from '~/config';

//Layouts
import LessonLayout from '~/components/Layouts/LessonLayout';
import PostsLayout from '~/components/Layouts/PostsLayout';
import AdminLayout from '~/components/Layouts/AdminLayout/AdminLayout';

//public page
import Home from '~/pages/Home';
import Stem10 from '~/pages/Stem10';
import Stem11 from '~/pages/Stem11';
import Stem12 from '~/pages/Stem12';
import Posts from '~/pages/Posts';
import PostsDetail from '~/pages/PostsDetail';
import TopicDetail from '~/pages/TopicDetail';
import Video from '~/pages/Video';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';
//private page
import Profile from '~/pages/Profile';
import NewPost from '~/pages/NewPost';
import MyPosts from '~/pages/MyPosts';

// Admin
import Dashboard from '~/pages/Admin/Dashboard/Dashboard';
import Learner from '~/pages/Admin/Learner';
import AdminStem10 from '~/pages/Admin/Stem10';
import AdminStem11 from '~/pages/Admin/Stem11';
import AdminStem12 from '~/pages/Admin/Stem12';
import Banner from '~/pages/Admin/Banner';
import Stem from '~/pages/Admin/Stem';

// Not Found
// import Error from '~/pages/Error';

//Route
const publicRouter = [
    { path: config.routes.error404, component: Login, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.stem10, component: Stem10 },
    { path: config.routes.stem11, component: Stem11 },
    { path: config.routes.stem12, component: Stem12 },
    { path: config.routes.posts, component: Posts },
    { path: config.routes.postsDetail, component: PostsDetail },
    { path: config.routes.topic, component: TopicDetail },
    { path: config.routes.topicLesson, component: Video, layout: LessonLayout },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.forgotPassword, component: ForgotPassword, layout: null },
    { path: config.routes.resetPassword, component: ResetPassword, layout: null },
    //Admin
    { path: config.routes.admin, component: Dashboard, layout: AdminLayout },
    { path: config.routes.learner, component: Learner, layout: AdminLayout },
    { path: config.routes.steam10Admin, component: AdminStem10, layout: AdminLayout },
    { path: config.routes.steam11Admin, component: AdminStem11, layout: AdminLayout },
    { path: config.routes.steam12Admin, component: AdminStem12, layout: AdminLayout },
    { path: config.routes.banner, component: Banner, layout: AdminLayout },
    { path: config.routes.stem, component: Stem, layout: AdminLayout },
];

const privateRouter = [
    ...publicRouter,
    { path: config.routes.personal, component: Profile },
    { path: config.routes.newPost, component: NewPost, layout: PostsLayout },
    { path: config.routes.myPosts, component: MyPosts },
];

export { publicRouter, privateRouter };
