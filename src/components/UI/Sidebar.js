// import { onAuthStateChanged, signOut } from "firebase/auth";

// import { auth } from "../api/firebase-config";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Backdrop from "./Backdrop";

const Sidebar = (props) => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed flex flex-col z-[200] w-full max-w-fit  bg-primary-500
        overflow-y-auto 
        ${
          props.open === true
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-20"
        } transition ease-out duration-300`}
      >
        <nav className="bg-light w-40 h-screen justify-between flex flex-col">
          <div className="flex flex-col items-center justify-center mt-10 mb-10">
            <Link to={"/"}>
              <h2 className="text-white text-3xl font-bold">LOGO</h2>
            </Link>
            <div className="mt-8">
              <ul>
                <li className="my-12 text-center">
                  <Link to={"/home"}>
                    <span
                      className={`${
                        location.pathname === "/home"
                          ? "text-white"
                          : "text-[#45E3FF]"
                      }  mx-auto hover:text-white transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link to={"/items"}>
                    <span
                      className={`${
                        location.pathname === "/items"
                          ? "text-white"
                          : "text-[#45E3FF]"
                      }   mx-auto hover:text-white transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link to={"/users"}>
                    <span
                      className={`${
                        location.pathname === "/users"
                          ? "text-white"
                          : "text-[#45E3FF]"
                      }   mx-auto hover:text-white transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link to={"/business"}>
                    <span
                      className={`${
                        location.pathname === "/business"
                          ? "text-white"
                          : "text-[#45E3FF]"
                      }   mx-auto hover:text-white transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="my-12 text-center">
                  <Link to={"/login"}>
                    <span
                      className={`${
                        location.pathname === "/login"
                          ? "text-white"
                          : "text-[#45E3FF]"
                      }   mx-auto hover:text-white transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8 grid place-content-center ">
            <Link
              /* onClick={async () => {
                    await signOut(auth);
                  }} */
              to={"/"}
            >
              <span
                className={`${
                  location.pathname === "/" ? "text-white" : "text-[#45E3FF]"
                }  mx-auto hover:text-white transition-all duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </nav>
      </div>
      <Backdrop
        showBackdrop={props.showBackdrop}
        onClick={() => {
          props.setOpen(!props.open);
          props.setShowBackdrop(false);
        }}
      />
      {/* Mobile Sidebar */}

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:z-40 fixed w-[90%] max-w-fit mx-auto bg-primary-500">
        <div className="hidden sm:flex sm:flex-col sm:gap-12 sm:text-3xl sm:min-h-full sm:max-w-72">
          <div className="w-full max-w-[180px]">
            <nav className="bg-light w-40 h-screen justify-between flex flex-col">
              <div className="flex flex-col items-center justify-center mt-20 mb-10">
                <Link to={"/"}>
                  <h2 className="text-white text-3xl font-bold">LOGO</h2>
                </Link>
                <div className="mt-4 ">
                  <ul>
                    <li className="my-12 text-center">
                      <Link to={"/home"}>
                        <span
                          className={`${
                            location.pathname === "/home"
                              ? "text-white"
                              : "text-[#45E3FF]"
                          }  mx-auto hover:text-white transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-12 text-center">
                      <Link to={"/items"}>
                        <span
                          className={`${
                            location.pathname === "/items"
                              ? "text-white"
                              : "text-[#45E3FF]"
                          }   mx-auto hover:text-white transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-12 text-center">
                      <Link to={"/users"}>
                        <span
                          className={`${
                            location.pathname === "/users"
                              ? "text-white"
                              : "text-[#45E3FF]"
                          }   mx-auto hover:text-white transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-12 text-center">
                      <Link to={"/business"}>
                        <span
                          className={`${
                            location.pathname === "/business"
                              ? "text-white"
                              : "text-[#45E3FF]"
                          }   mx-auto hover:text-white transition-all duration-300`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="my-12 text-center">
                      <Link to={"/login"}>
                        <span
                          className={`${
                            location.pathname === "/login"
                              ? "text-white"
                              : "text-[#45E3FF]"
                          }   mx-auto hover:text-white transition-all duration-300`}
                          // onClick={() => logout()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4 grid place-content-center ">
                <Link
                  /* onClick={async () => {
                    await signOut(auth);
                  }} */
                  to={"/"}
                >
                  <span
                    className={`${
                      location.pathname === "/"
                        ? "text-white"
                        : "text-[#45E3FF]"
                    }  mx-auto hover:text-white transition-all duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
