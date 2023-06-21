import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";

function Header() {
  return (
    <div className='header'>
        <h4>Dashboard</h4>
        <div className='header-right'>
            <label className='header-search'>
                <input placeholder='Search...'/>
                <AiOutlineSearch />
            </label>
            <button className='header-notify'><MdOutlineNotificationsNone /></button>
            <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"></img>
        </div>
    </div>
  )
}

export default Header