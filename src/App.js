import HomePage from './Page/Home/HomePage';
import React from 'react';
import PostPages from './Page/PostPage/PostPages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Page/ProfilePage/ProfilePage';
import LoginPage from './Page/LoginPage/LoginPage';
import PostPage from './Page/PostPage/PostPage';
import './style.css';

const PATHS = {
  HOME: '/',
  POST: '/posts',
  PROFILE: '/profile',
  LOGIN: '/login',
};
const Routers = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.POST,
    element: <PostPages />,
  },
  {
    path: PATHS.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
];
const NavBars = [
  {
    path: PATHS.HOME,
    title: 'Home',
  },
  {
    path: PATHS.POST,
    title: 'Posts',
  },
  {
    path: PATHS.PROFILE,
    title: 'Profile',
  },
  {
    path: PATHS.LOGIN,
    title: 'Login',
  },
];
export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <a>
                {' '}
                {NavBars.map((navbar) => (
                  <Link style={{ margin: 20 }} to={navbar.path}>
                    {navbar.title}
                  </Link>
                ))}{' '}
              </a>
              <div id="indicator"></div>
            </nav>
          </div>
          <div>
            <Routes>
              {Routers.map((route) => (
                <Route path={route.path} element={route.element}></Route>
              ))}
              <Route path="Posts/:id" element={<PostPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
