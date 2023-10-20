import React from "react";
import { useState } from "react";
const Navbar = ({ bySearch }) => {
  const [searchvalue, setsearchvalue] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    bySearch(searchvalue);
    setsearchvalue("");
  };
  return (
    <>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white fs-4 fw-bold" href="/">
            مطعمكووا
          </a>
          <form class="d-flex gap-5 ms-4" role="search">
            <input
              onChange={(e) => setsearchvalue(e.target.value)}
              value={searchvalue}
              style={{ width: "250px" }}
              class="form-control me-2"
              type="search"
              placeholder="ابحث"
            />
            <button
              onClick={onSearch}
              class="btn btn-outline-success w-50 text-white"
              type="submit"
            >
              ابحث
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
