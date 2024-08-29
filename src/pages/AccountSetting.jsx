import React from "react";
import { Container } from "../components";
import { useSelector } from "react-redux";

const AccountSetting = () => {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <>
      <Container>
         <h2 className="text-5xl mt-5" >This page is Under Development</h2>
        <div className="w-full py-20">
           
          <h2 className="text-5xl pb-10">Hi,{userData.name}</h2>
          <div className="ml-3 mt-2 relative">
                <button
                  //onClick={() => setAccountMenu((prev) => !prev)}
                  className="relative inline-block"
                >
                  <img
                    className="w-36 rounded-full"
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="Dan_Abromov"
                  />
                </button>
                <span className="absolute z-20 w-36 h-36 top-0 items-center group   hover:bg-gray-700/70 flex justify-center rounded-full ring-2 ring-white">
                <svg viewBox="0 0 24 24" focusable="false" className="w-8 hidden group-hover:block duration-200 "><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L3 16.82V21h4.18L20.41 7.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>   
                </span>
              
              </div>
            
        </div>
      </Container>
    </>
  );
};

export default AccountSetting;
