import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import RepoFilters from '../components/repos/RepoFilters';
import RepoList from '../components/repos/RepoList';
import Search from '../components/UI/Search';
import { fetchRepos } from '../store/repo-actions';
import { repoActions } from '../store/repo-slice';

const AllRepos = () => {
  const dispatch = useDispatch();
  const submitHandler = (value) => {
    dispatch(repoActions.SET_ORG(value));
    dispatch(repoActions.RESET_REPOS());
    dispatch(repoActions.RESET_FILTERS());
    dispatch(fetchRepos());
  };

  return (
    <Fragment>
      <Search onSubmit={submitHandler} />
      <RepoFilters />
      <RepoList />
    </Fragment>
  );
};

export default AllRepos;
