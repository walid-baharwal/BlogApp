/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ArrowUpRight, CloudFog } from "lucide-react";
import queryService from "../appwrite/query";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FileEdit, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({
  $id,
  title,
  featuredImage,
  $createdAt,
  category,
  userId,
}) {
  const [timeAgo, setTimeAgo] = useState("Loading...");
  const userLoggedinId = useSelector((state) => state.auth.userData);
  console.log('userLoggedinId : ', userLoggedinId)
  useEffect(() => { 
    const date = new Date($createdAt);
    const timeDifference = Date.now() - date.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (secondsDifference < 60) {
      setTimeAgo(
        `${secondsDifference} second${secondsDifference === 1 ? "" : "s"} ago`
      );
    } else if (minutesDifference < 60) {
      setTimeAgo(
        `${minutesDifference} minute${minutesDifference === 1 ? "" : "s"} ago`
      );
    } else if (hoursDifference < 24) {
      setTimeAgo(
        `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`
      );
    } else {
      const daysDifference = Math.floor(hoursDifference / 24);
      setTimeAgo(`${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`);
    }
  }, [$createdAt]);

  return (
    <>
      <div className=" border rounded-lg">
        <img
          src={queryService.getFileView(featuredImage)}
          className="aspect-video w-full rounded-lg "
          alt=""
        />
        <div className="min-h-min p-3">
          <div className="mt-4 w-full  flex justify-between items-center">
            <p className="text-xs font-semibold leading-tight text-gray-700">
              #{category}
            </p>
            {userId === userLoggedinId.$id && (
              <div className="flex gap-2 mr-2">
                <Link to={`/editblog/${$id}`}>
                  <FileEdit
                    className="text-gray-600 hover:text-black"
                    size={20}
                  />
                </Link>
                  <Trash className="text-gray-600 hover:text-black" size={20} />
              </div>
            )}
          </div>
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
            {title}
          </p>
          <span className="mt-4 w-full text-sm leading-normal text-gray-600">
            Click to explore this blog
          </span>
          <div className="mt-4 flex space-x-3 ">
            <img
              className="h-full w-10 rounded-lg"
              src="https://i.pinimg.com/564x/5e/c9/d9/5ec9d90cf558c385cd631b60b1a51540.jpg"
              alt={"author"}
            />
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-900">
                {"Tested User"}
              </p>
              <p className="text-sm leading-tight text-gray-600">{timeAgo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
