import { createSelector } from 'reselect';

const selectBlogs = state => state.blog.blogs;

export const selectMemoizedBlogs = createSelector(
  [selectBlogs],
  blogs => blogs
);
