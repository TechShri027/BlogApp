import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import {HiUser, HiArrowSmRight} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DashSidebar = () => {
    const location=useLocation()
  const [tab, setTab]=useState('')
  useEffect(()=>{
const urlParams=new URLSearchParams(location.search)
const tabFromUrl=urlParams.get('tab')
if(tabFromUrl){
    setTab(tabFromUrl)
}
  },[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <SidebarItems>
            <SidebarItemGroup>
            <Sidebar.Item
            as={Link}
            to="/dashboard?tab=profile"
            icon={HiUser}
            active={tab === "profile"}
            label="User"
            labelColor="dark"
          >
            Profile
          </Sidebar.Item>
               
                <SidebarItem active icon={HiArrowSmRight} className='cursor-pointer'>
Sign Out
                </SidebarItem>
            </SidebarItemGroup>
        </SidebarItems>
    </Sidebar>
  )
}

export default DashSidebar