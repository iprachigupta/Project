// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoToggle } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import Logo from './Logo';

function Sidebar() {
  return (
    <div className="static">
      <div className="bg-white  w-64 p-6 shadow-xl shadow-slate-500 h-screen fixed top-0 left-0">
        <Logo />
        <ul className="space-y-4 pt-4">
          <li><SidebarItem icon={<MdOutlineDashboard />} title="Dashboard" route="/dashboard" /></li>
          <li><SidebarItem icon={<GrTransaction />} title="Transactions" route="/transactions" /></li>
          <li><SidebarItem icon={<IoAddCircleOutline />} title="Add Expense" route="/add-expense" /></li>
          <li><SidebarItem icon={<MdManageAccounts />} title="Account" route="/account" /></li>
        </ul>
        <div className="space-y-4 pt-12">
            <ul>
                <li><SidebarItem icon={<IoToggle />} title="Switch Account" route="/switch-account" /></li>
                <li className="pt-4"><SidebarItem icon={<MdOutlineLogin />} title="Log out" route="/login" /></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
