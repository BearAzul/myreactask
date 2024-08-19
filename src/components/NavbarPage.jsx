import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

const NavBar = () => {
  const [showTask, setShowTask] = useState(false);
  const btnTask = () => {
    setShowTask(!showTask);
  };
  
  return (
    <>
      <header className="fixed w-full bg-gray-100">
        <div className="container max-w-xs py-4 mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold md:text-xl text-slate-800">
              React<span className="!text-teal-400">Task</span>
            </h1>
            <div className="flex items-center gap-5 lg:gap-3 text-slate-800">
              <NavLink to="/" className="nav-btn">
                Home
              </NavLink>

              <button
                className="hover:text-teal-600 text-slate-800 lg:hidden block w-[20px]"
                onClick={btnTask}
              >
                <i
                  className={`fa-solid ${
                    showTask ? "fa-xmark" : "fa-list-check"
                  }`}
                ></i>
              </button>
              <nav
                className={`lg:flex flex-col items-center justify-start lg:flex-row absolute z-[9999] lg:relative top-20 lg:top-0 drop-shadow-lg lg:drop-shadow-none w-[100px] lg:w-full lg:p-0 lg:bg-gray-300 bg-gray-100 rounded-sm transition duration-500 ease-in text-slate-800 gap-1 py-2 lg:py-0 ${
                  showTask ? "flex" : "hidden"
                }`}
              >
                <NavLink to="/tugaspraktik2" className="nav-btn">
                  Task#2
                </NavLink>

                <NavLink to="/tugaspraktik3" className="nav-btn">
                  Task#3
                </NavLink>

                <NavLink to="/tugaspraktik4" className="nav-btn">
                  Task#4
                </NavLink>

                <NavLink to="/tugaspraktik5" className="nav-btn">
                  Task#5
                </NavLink>

                <NavLink to="/tugaspraktik6" className="nav-btn">
                  Task#6
                </NavLink>
                <NavLink to="/tugaspraktik7" className="nav-btn">
                  Task#7
                </NavLink>
                <NavLink to="/tugaspraktik8" className="nav-btn">
                  Soon...
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
