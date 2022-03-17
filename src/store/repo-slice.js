import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  org: 'vuejs',
  repos: [],
  isLoading: false,
  hasMore: true,
  currentPage: 1,
  filterType: 'all',
  filterSort: 'created',
  filterDirection: 'asc',
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    SET_ORG(state, action) {
      state.org = action.payload;
    },
    SET_LOADING(state, action) {
      state.isLoading = action.payload;
    },
    INCREMENT_REPOS(state, action) {
      state.repos = state.repos.concat(action.payload);
    },
    SET_HAS_MORE(state, action) {
      state.hasMore = action.payload;
    },
    INCREMENT_PAGE(state) {
      state.currentPage += 1;
    },
    SET_FILTER(state, action) {
      state[action.payload.label] = action.payload.value;
    },
    RESET_REPOS(state) {
      state.repos = [];
      state.isLoading = false;
      state.hasMore = true;
      state.currentPage = 1;
    },
    RESET_FILTERS(state) {
      state.filterType = 'all';
      state.filterSort = 'created';
      state.filterDirection = 'asc';
    },
  },
});

export const repoActions = repoSlice.actions;

export default repoSlice;
