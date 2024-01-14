import { createSelector } from 'reselect';

const selectData = state => state.auth.userData;

export const memoizedUserData = createSelector(
  [selectData],
  userData => userData
);
