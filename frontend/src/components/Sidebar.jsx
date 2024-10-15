// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoToggle } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="static">
      <div className="bg-white  w-64 p-6 shadow-xl shadow-slate-500 h-screen fixed top-0 left-0">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-black">Expense</span>
          <span className="text-blue-500">Trackr</span>
        </h2>
        <ul className="space-y-4 pt-4">
          <li><SidebarItem icon={<MdOutlineDashboard />} title="Dashboard" /></li>
          <li><SidebarItem icon={<GrTransaction />} title="Transaction" /></li>
          <li><SidebarItem icon={<IoAddCircleOutline />} title="Add Expense" /></li>
          <li><SidebarItem icon={<MdManageAccounts />} title="Account" /></li>
        </ul>
        <div className="space-y-4 pt-12">
            <ul>
                <li><SidebarItem icon={<IoToggle />} title="Switch Account" /></li>
                <li className="pt-4"><SidebarItem icon={<MdOutlineLogin />} title="Log out" /></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
