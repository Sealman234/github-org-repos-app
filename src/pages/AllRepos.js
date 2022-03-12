import React, { Fragment } from 'react';
import RepoFilter from '../components/repos/RepoFilter';
import RepoList from '../components/repos/RepoList';

const AllRepos = () => {
  return (
    <Fragment>
      <RepoFilter />
      <RepoList />
    </Fragment>
  );
};

export default AllRepos;
