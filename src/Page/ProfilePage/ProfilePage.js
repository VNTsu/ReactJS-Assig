import React from 'react';
import './ProfilePage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPage from '../LoginPage/LoginPage';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const [information, setInformation] = useState({
    id: '',
    name: '',
    createdAt: '',
  });

  useEffect(() => {
    if (window.sessionStorage.getItem('id') !== null) {
      axios({
        method: 'GET',
        url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${window.sessionStorage.getItem(
          'id'
        )}`,
      }).then((response) => {
        setInformation({
          id: response.data.id,
          name: response.data.name,
          createdAt: response.data.createdAt,
        });
        console.log(response);
      });
    } else {
      axios({
        method: 'GET',
        url: `https://60dff0ba6b689e001788c858.mockapi.io/users/${localStorage.getItem(
          'id'
        )}`,
      }).then((response) => {
        setInformation({
          id: response.data.id,
          name: response.data.name,
          createdAt: response.data.createdAt,
        });
        console.log(response);
      });
    }
  }, []);
  let navigate = useNavigate();
  if (
    window.sessionStorage.getItem('id') === null &&
    localStorage.getItem('id') === null
  ) {
    return (
      <div>
        <h5 className="text">You need to login to continue</h5>
        <LoginPage />
      </div>
    );
  }
  return (
    <div>
      <head>
        <title>Harvest vase</title>
        <link
          href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
          rel="stylesheet"
        />
      </head>

      <body>
        <div class="wrapper">
          <div class="product-img">
            <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>ID: {information.id}</h1>
              <h2>Name: {information.name}</h2>
              <p>Create At: {information.createdAt}</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
