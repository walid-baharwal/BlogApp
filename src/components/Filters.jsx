import React, { useState, useEffect } from "react";
import { Sorting } from "./index";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/blogSlice";

const Filters = React.memo(function Filters() {
  const categorys = [
    "All",
    "Technology",
    "Product",
    "Software Engineering",
    "Food",
    "Business",
  ];
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(0);

  const handleCategory = (index, category) => {
    setSelectedItem(index);
    dispatch(setCategory(category));
  };
  return (
    <>
      <div className="mt-10 w-full   outline outline-1 outline-gray-200 rounded-md  items-center justify-between space-x-2 py-0 md:flex md:flex-row">
        <Sorting />
        <ul className="flex items-end w-full max-w-7xl  category-container whitespace-nowrap py-3  px-4 ">
          {categorys.map((category, index) => (
            <li
              onClick={() => handleCategory(index, category)}
              className={`${
                selectedItem === index
                  ? "bg-gray-200/80 text-black"
                  : "text-[#727782]"
              } hover:bg-gray-100  mr-4  font-medium    cursor-pointer px-3 rounded-md py-2 text-base  leading-normal  text-gray-700  `}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default Filters;
