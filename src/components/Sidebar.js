import React from 'react';
import "./Sidebar.css";
import { AiOutlineDashboard, AiFillSchedule } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='sidebar'>
        <h4>Board.</h4>
        <div className='sidebar-center'>
            <button>
                <AiOutlineDashboard />
                <span>Dashboard</span>
            </button>
            <button>
                <BsFillBookmarksFill />
                <span>Transactions</span>
            </button>
            <button>
                <AiFillSchedule />
                <span>Schedules</span>
            </button>
            <button>
                <BiUserCircle />
                <span>Users</span>
            </button>
            <button>
                <FiSettings />
                <span>Settings</span>
            </button>
        </div>
        <div className='sidebar-footer'>
            <p>Help</p>
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Sidebar