import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import { AiOutlineCamera, AiOutlineLike, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import Activity from '../components/Activity';
import FooterLeft from '../components/FooterLeft';
import FooterRight from '../components/FooterRight';


function Dashboard() {
  return (
    <div className='dashboard'>
       <Sidebar />
       <div className='dashboard-center'>
            <Header />
            <div className='cards-center'>
                <Card icon={<AiOutlineCamera />} bg_color="#DDEFE0" info="Total Revenues" value="$2,129,430"/>
                <Card icon={<BsFillBookmarksFill />} bg_color="#F4ECDD" info="Total Transactions" value="1,520"/>
                <Card icon={<AiOutlineLike />} bg_color="#EFDADA" info="Total Likes" value="9,721"/>
                <Card icon={<AiOutlineUsergroupDelete />} bg_color="#DEE0EF" info="Total Users" value="892"/>
            </div>
            <Activity />
            <div className='dashboard-footer'>
              <div className='footer-left'>
                <FooterLeft />
              </div>
              <div className='footer-right'>
                <FooterRight />
              </div>
            </div>
       </div>
    </div>
  )
}

export default Dashboard