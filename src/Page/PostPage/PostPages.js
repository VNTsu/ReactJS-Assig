import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostPages.css';

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [sortByTitle, setSortByTitle] = useState('(NONE)');
  let cancel = false;
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts`,
    })
      .then((response) => {
        if (!cancel) {
          setPosts(response.data);
        }
      })
      .catch(() => {
        if (!cancel) {
          return 'Something went wrong';
        }
      });
    return () => {
      cancel = true;
    };
  }, []);
  const TitleFilter = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  const HandleSortByTitle = () => {
    if (sortByTitle === '(NONE)') {
      setSortByTitle('ASC');
      return;
    }
    if (sortByTitle === 'ASC') {
      setSortByTitle('DSC');
      return;
    }
    if (sortByTitle === 'DSC') {
      setSortByTitle('(NONE)');
      return;
    }
  };
  const GetPostSorted = () => {
    if (sortByTitle === '(NONE)') return TitleFilter;
    if (sortByTitle === 'ASC')
      return TitleFilter.sort((post1, post2) => {
        if (post1.title.toLowerCase() < post2.title.toLowerCase()) return -1;
        if (post1.title.toLowerCase() > post2.title.toLowerCase()) return 1;
        return 0;
      });
    if (sortByTitle === 'DSC')
      return TitleFilter.sort((post1, post2) => {
        if (post1.title.toLowerCase() > post2.title.toLowerCase()) return -1;
        if (post1.title.toLowerCase() < post2.title.toLowerCase()) return 1;
        return 0;
      });
  };

  const listSorted = GetPostSorted();
  const handleRemoveItem = (e) => {
    const id = e.target.getAttribute('name');
    setPosts(posts.filter((m) => m.id != id));
    console.log(listSorted);
  };
  return (
    <div>
      <h1>
        <span class="blue">&lt;</span>Table<span class="blue">&gt;</span>{' '}
        <span class="yellow">PostPages</span>
      </h1>
      <h2>
        Created with love by{' '}
        <a href="https://github.com/VNTsu" target="_blank">
          VNTsu
        </a>
      </h2>
      <form action="" class="search-bar">
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          value={searchTitle}
          placeholder="Search by post title"
          onChange={(evt) => setSearchTitle(evt.target.value)}
        />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th colspan="3">Get from API</th>
          </tr>
          <tr>
            <th>ID</th>
            <th colspan="2" onClick={HandleSortByTitle}>
              Title--Sort {sortByTitle}
            </th>
          </tr>
        </thead>
        <tbody>
          {listSorted.map((posts) => (
            <tr>
              <td key={posts.id}>{posts.id}</td>
              <td>{posts.title}</td>
              <td>
                <Link class="breakout-button" to={`/Posts/${posts.id}`}>
                  Detail
                </Link>
                <Link
                  class="breakout-button"
                  name={posts.id}
                  onClick={handleRemoveItem}
                  to={'/Posts'}
                >
                  Remove
                </Link>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
}
