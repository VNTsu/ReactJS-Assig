import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './PostPage.css';
export default function PostPage() {
  const [post, setPost] = useState({
    id: null,
    title: null,
    body: null,
  });
  const readParams = useParams(() => {
    return readParams.id;
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${readParams.id}`,
    }).then((response) => {
      setPost({
        id: response.data.id,
        title: response.data.title,
        body: response.data.body,
      });
    });
  }, []);
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
