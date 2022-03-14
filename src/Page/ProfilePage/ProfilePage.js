import React from 'react';
import './ProfilePage.css';
import React, { useState, useEffect } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { useNavigate } from 'react-router-dom';
import SendApiRequest from "../../CustomHook/SendApiRequest"

const responseData = response => ({
    id: response.data.id,
    name: response.data.name,
    createdAt: response.data.createdAt
})
const initialState = {
    id: null,
    name: null,
    createdAt: null,
}
export default function ProfilePage() {
  let id = null
  if (window.sessionStorage.getItem("id")) {

      id = window.sessionStorage.getItem("id")
  }
  else {

      id = localStorage.getItem("id")
  }
const { data: information, isLoading, error } = SendApiRequest(initialState, `https://60dff0ba6b689e001788c858.mockapi.io/users/${id}`, responseData)
  if (
    window.sessionStorage.getItem('id') === null &&
    localStorage.getItem('id') === null
  ) {
    return (
      <> 
      <div>
          <LoginPage me="You need to sign in"/>
      </div>
      </>
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
