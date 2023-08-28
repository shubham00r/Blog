import React, { useState } from "react";

function Sidebar() {
  const [search, SetSearch] = useState("");
  const [show, toggleshow] = useState(true);
  // let clickREf = useRef(null);
  // function hide() {
  //   console.log("click");
  //   clickREf.current.style.display = "block";
  // }

  return (
    <div id="sidebar" className="hidden bg-slate-100">
      <div className="flex justify-between px-2">
        <span
          onClick={() => toggleshow(!show)}
          className="block mt-2 mr-7 md:hidden"
        >
          {show ? (
            <i className="  fa-solid fa-xmark  pt-1 pl-[11px] text-green-900  text-xl"></i>
          ) : (
            <i class=" fa-solid fa-bars"></i>
          )}
          {/* {<i class=" fa-solid fa-bars"></i>} */}
        </span>
        {show && (
          <div id="hed" className=" mt-3">
            <li className="m-2">
              <a href="/home">HOME</a>
            </li>
            <li className="m-2">
              <a href="/about">TECH</a>
            </li>
            <li className="m-2">
              <a href="/contact">AUTOMOBILE</a>
            </li>
            <li className="m-2">
              <a href="/contact">BUSINESS</a>
            </li>{" "}
            <li className="m-2">
              <a href="/contact">CONTENT</a>
            </li>
          </div>
        )}
        <div className="relative">
          <input
            value={search}
            id="input"
            className=" w-full h-10 pl-3 font-medium bg-[rgb(229,231,235)] rounded outline-none text-neutral-500  "
            type="text"
            placeholder="Search"
            onChange={(e) => SetSearch(e.target.value)}
          />
          <span>
            {" "}
            {/* <i className=" block md:hidden  fa-solid fa-xmark  pt-1 pl-[11px] text-green-900  text-xl"></i> */}
          </span>
          {search && (
            <span
              onClick={() => SetSearch("")}
              className="hover:bg-[#e8eee2] w-9 h-9 top-1 absolute right-[1px] rounded-full"
            >
              <i className="  fa-solid fa-xmark  pt-1 pl-[11px] text-green-900  text-xl"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
