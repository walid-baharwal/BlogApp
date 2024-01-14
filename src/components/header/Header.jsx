import React from "react";
import { Container, User, Logo } from "../index";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setCategory } from "../../store/blogSlice";

const Header = () => {
  const [accountMenu, setAccountMenu] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch()
  const handleLinkCliked =()=>{
    dispatch(setCategory('All'));
  }

  const menuItems = [
    {
      name: "BLOGS",
      slug: "/",
      active: true,
    },
    {
      name: "ADD BLOG",
      slug: "/add-blog",
      active: true,
    },
    {
      name: "SIGN IN",
      slug: "/signin",
      active: authStatus,
    },
    {
      name: "ABOUT",
      slug: "/about",
      active: true,
    },
    {
      name: "MY BLOGS",
      slug: "/myblogs",
      active: authStatus,
    },
  ];

  return (
    <>
      <header className="py-3 bg-white border border-b-gray-400 shadow z-20">
        <Container>
          <div className="mx-auto flex max-w-8xl items-center justify-between px-1 py-2 sm:px-6 lg:px-16">
            <Link to='/' onClick={handleLinkCliked}>
            <div className="inline-flex items-center space-x-2">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="font-bold text-black dark:text-white">
                BLOG APP
              </span>
            </div>
            </Link>
            <div className="hidden lg:block">
              <ul className="ml-12 inline-flex space-x-10">
                {menuItems.filter(item => item.slug !== '/signin').map((item) => {
                  if(item.active){
                   return <Link key={item.name} to={item.slug} className="ml-2"  onClick={handleLinkCliked}>
                    <li className="inline-flex items-center hover:underline underline-offset-2 text-sm font-semibold text-gray-800 hover:text-gray-900">
                    {item.name}
                    <span>
                    {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
                    </span>
                    </li>
                    </Link>
                  }
})}
              </ul>
            </div>
            <div className="flex grow justify-end">
              <input
                className="flex h-10 w-[200px] sm:w-[250px] text-gray-800  rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="Search..."
                placeholder="Search"
              ></input>
            </div>
            {authStatus ? (
              <div className="group ml-3 mt-2 hidden lg:block relative">
                <button
                  onClick={() => setAccountMenu((prev) => !prev)}
                  className="relative inline-block"
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="Dan_Abromov"
                  />
                </button>
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                <div className="group-hover:block hidden " ><User/></div>
                {accountMenu && <User />}
              </div>
            ) : (
              <Link  to={'/signin'} className="lg:ml-4 hidden lg:block">
              <li className="inline-flex items-center hover:underline underline-offset-2 text-sm font-semibold text-red-600 hover:text-gray-900">
                SIGN IN
                <span>
                  {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
                </span>
              </li>
            </Link>
            )
            }

            <div className="ml-2 lg:hidden">
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-black dark:text-white"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <span>
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 50 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <span className="font-bold">DevUI</span>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {menuItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                            <span>
                              <ChevronRight className="ml-3 h-4 w-4" />
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="ml-3 mt-4 flex items-center space-x-2">
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          Dan Abromov
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          @dan_abromov
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;