import { apiGetRepos } from '../api';
import { repoActions } from './repo-slice';

export const fetchRepos = () => {
  return async (dispatch, getState) => {
    dispatch(repoActions.SET_LOADING(true));
    const { currentPage, filterType, filterSort, filterDirection } =
      getState().repo;

    const fetchRequest = async () => {
      const data = {
        page: currentPage,
        type: filterType,
        sort: filterSort,
        direction: filterDirection,
      };
      const response = await apiGetRepos(data);
      if (response.data.length) {
        dispatch(repoActions.INCREMENT_REPOS(response.data));
      } else {
        dispatch(repoActions.SET_HAS_MORE(false));
      }
    };

    try {
      await fetchRequest();
    } catch (error) {
      dispatch(repoActions.SET_HAS_MORE(false));
    } finally {
      dispatch(repoActions.SET_LOADING(false));
    }
  };
};
