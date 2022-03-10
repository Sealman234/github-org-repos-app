import React, { Fragment } from 'react';
import InfiniteScroll from '../components/repos/InfiniteScroll';
import RepoList from '../components/repos/RepoList';

const AllRepos = () => {
  return (
    <Fragment>
      {/* <RepoList /> */}
      <InfiniteScroll></InfiniteScroll>
    </Fragment>
  );
};

export default AllRepos;
