/* eslint-disable react/prop-types */
// import React from 'react'

export default function SidebarItem(props) {
    return (
      <div className="cursor-pointer p-4 bg-slate-200 shadow-md shadow-slate-300 rounded-2xl  flex hover:shadow-xl hover:scale-110 hover:bg-slate-200 active:bg-slate-300">
        <span className="size-6 mt-1">{props.icon}</span>
        <span>{props.title}</span>
      </div>
    );
  }
  