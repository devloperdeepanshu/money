// src/Navbar.js

import React from 'react';
import './navbar.css';
import { FaClipboardList, FaChartPie, FaRegFileAlt, FaUser } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <FaClipboardList size={24} />
        <span>Records</span>
      </div>
      <div className="navbar-item">
        <FaChartPie size={24} />
        <span>Charts</span>
      </div>
      <div className="add-button">
      <IoMdAdd />

      </div>
      <div className="navbar-item">
        <FaRegFileAlt size={24} />
        <span>Reports</span>
      </div>
      <div className="navbar-item">
        <FaUser size={24} />
        <span>Me</span>
      </div>
    </div>
  );
};

export default Navbar;
