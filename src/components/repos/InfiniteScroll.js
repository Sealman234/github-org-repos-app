import React, { useCallback, useEffect, useState } from 'react';

import { apiGetRepos } from '../../api';

import LoadingSpinner from '../UI/LoadingSpinner';

const InfiniteScroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repos, setRepos] = useState([]);

  const fetchRepos = useCallback(async (currentPage) => {
    try {
      setIsLoading(true);
      const data = {
        page: currentPage,
      };
      const response = await apiGetRepos(data);
      console.log(response);
      setRepos((prevState) => [...prevState, ...response.data]);
      setCurrentPage((prevState) => (prevState += 1));
    } catch (error) {
      console.log(error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debounce = (func, delay = 250) => {
    let timer = null;
    return (...args) => {
      const content = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(content, args);
      }, delay);
    };
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (
        scrollTop + clientHeight >= scrollHeight - 350 &&
        hasMore &&
        !isLoading
      ) {
        fetchRepos();
      }
    };
    window.addEventListener('scroll', debounce(onScroll));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [fetchRepos, hasMore, isLoading]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos, currentPage]);

  return (
    <ul>
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <a href={repo.url}>{repo.name}</a>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            <p>{repo.private ? 'Private' : 'Public'}</p>
          </li>
        );
      })}
      {isLoading && <LoadingSpinner />}
    </ul>
  );
};

export default InfiniteScroll;
