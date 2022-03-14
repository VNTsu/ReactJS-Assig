import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './PostPage.css';
import SendApiRequest from "../../CustomHook/SendApiRequest"

const responseData = response => ({
  id: response.data.id,
  title: response.data.title,
  body: response.data.body
})
const initialState = {
  id: null,
  title: null,
  body: null
}
export default function PostPage() {
  const readParams = useParams(() => {
    return readParams.id;
});

const {data:post, isLoading, error} = SendAPIRequest(initialState, `https://jsonplaceholder.typicode.com/posts/${readParams.id}`, responseData)
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
              <h1>Title: {post.title}</h1>
              <h2>Id: {post.id}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
