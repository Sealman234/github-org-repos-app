import React, { Fragment, useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import { apiGetRepos } from '../../api';
import Repo from './Repo';
import styled from 'styled-components';

const StyledRepoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #d8dee4;
  border-radius: 6px;
`;

const LoadingSpinnerWrapper = styled.div`
  padding: 8px 0;
  text-align: center;
`;

const NoMoreData = styled.div`
  padding: 8px 0;
  text-align: center;
  color: #57606a;
`;

const RepoList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [repos, setRepos] = useState([]);

  const fetchRepos = useCallback(async (currentPage) => {
    try {
      const data = {
        page: currentPage,
      };
      const response = await apiGetRepos(data);
      if (response.data.length) {
        setRepos((prevState) => [...prevState, ...response.data]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let timer = null;

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        if (
          scrollTop + clientHeight >= scrollHeight - 350 &&
          hasMore &&
          !isLoading
        ) {
          setIsLoading(true);
          setCurrentPage((prevState) => (prevState += 1));
        }
      }, 250);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    fetchRepos(currentPage);
  }, [fetchRepos, currentPage]);

  return (
    <Fragment>
      {repos.length > 0 && (
        <StyledRepoList>
          {repos.map((repo) => (
            <Repo
              key={repo.id}
              id={repo.id}
              svnUrl={repo.svn_url}
              name={repo.name}
              private={repo.private}
              description={repo.description}
              topics={repo.topics}
            />
          ))}
        </StyledRepoList>
      )}
      {isLoading && (
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      )}
      {!hasMore && <NoMoreData>No more data!</NoMoreData>}
    </Fragment>
  );
};

export default RepoList;
