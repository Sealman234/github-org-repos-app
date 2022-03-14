import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    },
  },
});

export const repoActions = repoSlice.actions;

export default repoSlice;
