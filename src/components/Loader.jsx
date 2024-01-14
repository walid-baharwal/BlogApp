import React from "react";
import { Spinner } from "flowbite-react";

const Loader = ({size ='sm' , color ='purple', parentHeight='h-[100vh]', parentWidth='w-full', ParentClassName}) => {
  return (
    <div className={`w-full ${ParentClassName} flex ${parentWidth} ${parentHeight} items-center justify-center`}>
      <Spinner color={color} size={size}/>
    </div>
  );
};

export default Loader;
