import React, { useRef, useState } from "react";

function Header() {
  const [search, SetSearch] = useState("");

  let clickREf = useRef(null);

  function hide() {
    console.log("click");

    clickREf.current.style.display = "block";
  }

  // function myfog() {
  //   let x = document.getElementById("hed");
  //   if (x.style.display == "block") {
  //     x.style.display = "hidden";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }

  return (
    <div className="flex items-center justify-around h-full px-4 md:justify-between bg-slate-100 Containers">
      <div className="">
        <span onClick={hide} className="block mb-32 mr-7 md:hidden">
          {<i class=" fa-solid fa-bars"></i>}
        </span>
      </div>

      <ul
        ref={clickREf}
        id="Header"
        className="  md:flex items-center hidden gap-6 md:gap-8 px-6  text-[10px] md:text-[15px]  font-medium text-[rgb(31,41,55)]"
      >
        <li className="m-2 md:m-0">
          <a href="/home">HOME</a>
        </li>
        <li className="m-2 md:m-0">
          <a href="/about">TECH</a>
        </li>
        <li className="m-2 md:m-0">
          <a href="/contact">AUTOMOBILE</a>
        </li>
        <li className="m-2 md:m-0">
          <a href="/contact">BUSINESS</a>
        </li>{" "}
        <li className="m-2 md:m-0">
          <a href="/contact">CONTENT</a>
        </li>
      </ul>
      <div className="relative">
        <input
          value={search}
          className="mb-[120px]  md:mb-0 md:w-full h-10 pl-3 font-medium bg-[rgb(229,231,235)] rounded outline-none text-neutral-500  "
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
      {/* <span className="block md:hidden" onClick={myfog()} id="ui">
        click
      </span> */}
    </div>
  );
}

export default Header;
