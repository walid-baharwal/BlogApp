import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import queryService from "../appwrite/query";
import { useState } from "react";
import { Container, Loader } from "../components";
import parse from "html-react-parser";


const Blog = () => {
  const [blogData, setBlogData] = useState({});
  const[spinner ,setSpinner] = useState(true);
  const [file, setFile] = useState("");
  const { slug } = useParams();
  useEffect(() => {
 
    queryService.getBlog(slug).then((data) => {
      setBlogData(data);
      setSpinner(false)
      //console.log(data)
      //console.log(typeof blogData.$createdAt.slice(0, 10))
    });
    //  if(res){
    //     console.log(queryService.getFilePreview(blogData.featuredImage))
    //  }
  }, [slug]);
  return spinner ?
   <Loader size="xl"/> :  (
    <>
      <Container>
        <div className="flex justify-center w-full py-14">
          <main className="max-w-3xl">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={queryService.getFileView(blogData.featuredImage)}
                    alt="Jese Leos"
                  /> 
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                     {blogData.author}
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <span>{blogData && blogData.$createdAt.slice(0,10)}</span>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {blogData.title}{" "}
              </h1>
            </header>

            <div className="pb-10 pt-5">{parse(blogData.content)}</div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default Blog;
