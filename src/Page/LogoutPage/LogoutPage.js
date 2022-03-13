import React from 'react';
import LoginPage from '.Page/LoginPage/LoginPage';
export default function LogOutPage() {
  localStorage.clear();
  window.sessionStorage.clear();
  return <div>{window.location.reload()}</div>;
}
