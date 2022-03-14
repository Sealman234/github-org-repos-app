import { configureStore } from '@reduxjs/toolkit';
import repoSlice from './repo-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, repo: repoSlice.reducer },
});

export default store;
