import React, { useState, useRef } from "react";
import { ChevronDown, X, SlidersHorizontal, Plus } from "lucide-react";
import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSorting } from "../store/blogSlice";

export default function Sorting() {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  const [allFilters, setAllFilters] = useState([
    "Oldest",
    "Most Liked",
    "Most Unliked",
    "Trending",
  ]);
  const [selectedFilter, setSelectedFilter] = useState('Newest');

  const addFilter = (filter) => {
  
    setAllFilters((prev) => prev.filter((prevFilter) => prevFilter !== filter));
    setSelectedFilter(filter);
    if (selectedFilter !== '') {
      setAllFilters((prevFilters) => [...prevFilters,selectedFilter]) 
    }    
  };
  const removeFilter = () => {
    setAllFilters((prevFilters) => [...prevFilters, selectedFilter]);
    setSelectedFilter('');
  };

 useEffect(()=>{
  dispatch(setSorting(selectedFilter))
},[selectedFilter])

 
  return (
    <div className="mx-auto w-full max-w-[32rem]  ">
      {/* <div className="px-2 py-6">
        <div className="flex flex-col justify-between md:flex-row">
          <p className="mb-4 text-2xl font-bold md:mb-0">Shoes</p>
          <div className="grid grid-cols-4 gap-x-6 gap-y-4">
            <button className="flex items-center justify-center text-sm font-semibold">
              Category
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Price
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Color
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button className="flex items-center justify-center text-sm font-semibold">
              Brand
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div> */}
      <div className="rounded-md rounded-r-none bg-gray-100 px-2 py-4 md:px-3 ">
        <div className="space-y-4 md:flex md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-2 md:flex-row  md:items-center md:space-x-2 md:space-y-0">
            <span className="font-semibold whitespace-nowrap">Sort By:</span>
            <div className="flex flex-wrap gap-y-2 flex-1 ">
               { selectedFilter &&
                 <div
                 className=" md:flex items-center justify-between rounded-md bg-white py-1 px-2 ml-2 font-medium"
                 >
                  <div className="whitespace-nowrap  ">{selectedFilter}</div>
                  <div>
                    <X
                      onClick={() => removeFilter()}
                      className="ml-1 h-4 w-4 cursor-pointer"
                      />
                  </div>
                </div>
                    } 
             
            </div>
          </div>

          <div className="">
            <Dropdown
              size="lg"
              renderTrigger={() => (
                <button
                  //onClick={()=> button2Ref.current.click()}
                  type="button"
                  className="hidden rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:block"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              )}
            >
              {allFilters.map((filter, index) => (
                <Dropdown.Item
                  className="px-2 "
                  key={index}
                  onClick={() => addFilter(filter)}
                >
                  <div className=" md:flex items-center  justify-between  rounded-md   w-full font-medium">
                    <div className="whitespace-nowrap mr-2 ">{filter}</div>
                    <div>
                      <Plus className="ml-1 h-4 w-4 cursor-pointer" />
                    </div>
                  </div>
                </Dropdown.Item>
              ))}
              {/* <di</DrclassName="flex items-center"><div className="">Newest</div><Plus className="h-5 w-5"/></div></Dropdown.Item> */}
            </Dropdown>

            {/* </SlidersHorizontal> */}

            {/* <button ref={button2Ref}> */}

            {/* </button> */}
            <button
              type="button"
              className="block w-full rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
