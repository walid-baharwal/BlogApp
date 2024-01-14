import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  category: "All",
  sorting: "Newest",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      if (state.sorting === "Newest") {
        state.blogs = action.payload.sort(
          (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
        );
      } else if (state.sorting === "Oldest") {
        state.blogs = action.payload.sort(
          (a, b) => new Date(a.$createdAt) - new Date(b.$createdAt)
        );
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
      if (state.sorting === "Newest") {
        state.blogs = state.blogs.sort(
          (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
        );
      } else if (state.sorting === "Oldest") {
        state.blogs = state.blogs.sort(
          (a, b) => new Date(a.$createdAt) - new Date(b.$createdAt)
        );
      }
    },
  },
});

export const { setBlogs, setCategory, setSorting } = blogSlice.actions;

export default blogSlice.reducer;
