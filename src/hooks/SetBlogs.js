import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBlogs } from "../store/blogSlice";
import queryService from "../appwrite/query";
import { useSelector } from "react-redux";

export default function SetBlog(AllQueries) {
  const category = useSelector((state) => state.blog.category);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const fetchData = async (Queries) => {
    try {
      const data = await queryService.getBlogs(Queries);

      if (data) {
        dispatch(setBlogs(data.documents));
      }
    } catch (error) {
      console.log("Fetch Data setBlogs error: " + error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    const queriesToFetch = category === "All" ? AllQueries.defaultQueries : AllQueries.Queries;
    AllQueries.Queries[0].value = category;
    console.log(AllQueries.Queries)
    
    fetchData(queriesToFetch);
  }, [category]);

  return loader;
}
