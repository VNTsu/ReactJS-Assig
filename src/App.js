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
];
export default function App() {
  const ClearData = () => {
    localStorage.clear();
    window.sessionStorage.clear();
    window.location.reload();
  };
  const Change = () => {
    window.location.reload();
  };
  if (
    window.sessionStorage.getItem('id') === null &&
    localStorage.getItem('id') === null
  ) {
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
                <Link to={'/login'}>
                  <a onChange={Change} sx={{ flexGrow: 1 }}>
                    LogIn
                  </a>
                </Link>
                <div id="indicator"></div>
              </nav>
            </div>

            <Routes>
              {Routers.map((route) => (
                <Route path={route.path} element={route.element}></Route>
              ))}
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="Posts/:id" element={<PostPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  } else {
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
                <Link to={'/login'}>
                  <a onClick={ClearData} sx={{ flexGrow: 1 }}>
                    LogOut
                  </a>
                </Link>
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
}
