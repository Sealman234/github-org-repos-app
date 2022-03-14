import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import LoadingSpinner from '../UI/LoadingSpinner';
import Repo from './Repo';

import { repoActions } from '../../store/repo-slice';
import { fetchRepos } from '../../store/repo-actions';

const ListTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  font-weight: normal;
  padding-bottom: 1rem;
`;

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
  const dispatch = useDispatch();
  const selectRepos = useSelector((state) => state.repo.repos);
  const selectIsLoading = useSelector((state) => state.repo.isLoading);
  const selectHasMore = useSelector((state) => state.repo.hasMore);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

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
          selectHasMore &&
          !selectIsLoading
        ) {
          dispatch(repoActions.INCREMENT_PAGE());
          dispatch(fetchRepos());
        }
      }, 250);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [dispatch, selectHasMore, selectIsLoading]);

  return (
    <Fragment>
      <ListTitle>Repositories</ListTitle>
      {selectRepos.length > 0 && (
        <StyledRepoList>
          {selectRepos.map((repo) => (
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
      {selectIsLoading && (
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      )}
      {!selectIsLoading && !selectHasMore && (
        <NoMoreData>No more data!</NoMoreData>
      )}
    </Fragment>
  );
};

export default RepoList;