import Home from '~/pages/Home';
import Fllowing from '~/pages/Fllowing';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import HeaderOnly from '~/components/Layout/HeaderOnly';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/fllowing', component: Fllowing },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
