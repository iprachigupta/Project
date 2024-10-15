// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from './Cards';
// import { IoIosNotificationsOutline } from "react-icons/io";


function Profile() {
  return (
    <div className="flex-1 p-8 h-screen absolute top-0 inset-x-72">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-semibold">Hi, </h2>
        </div>
        {/* <div className="flex justify-center items-center cursor-pointer">
          <span className=""><IoIosNotificationsOutline /></span>
        </div> */}
      </header>

      <div className="grid grid-cols-2 gap-6">
        {/* Spending Card */}
        <div className="bg-white p-6 rounded-lg shadow-zinc-400 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Spending</h3>
          <p className="text-2xl font-bold mb-2">₹48000/-</p>
          {/* Graph */}
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>

        {/* Expenditure Card */}
        <div className="bg-white p-6 rounded-lg shadow-zinc-400 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Expenditure</h3>
          <p className="text-2xl font-bold mb-2">₹8000/- per month</p>
          {/* Graph */}
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-zinc-400 shadow-sm ">
        <h3 className="text-lg font-semibold mb-4">Total Outstanding</h3>
        <p className="text-2xl font-bold">₹2600/-</p>
        {/* <p className="text-gray-500">Due date: 14 Apr 2024</p> */}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-6 ">
        <Card title="Wordpress" days="7" amount="₹999/-" />
        <Card title="Microsoft" days="3" amount="₹999/-" />
        <Card title="LinkedIn" days="3" amount="₹999/-" />
      </div>

      <div className="mt-4 bg-white p-6 rounded-lg shadow-zinc-400 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Your Subscriptions</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Expiration Date</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Apollo Services</td>
              <td className="py-2">Active</td>
              <td className="py-2">02 May 2024</td>
              <td className="py-2">₹999/-</td>
            </tr>
            <tr>
              <td className="py-2">Google Ads Services</td>
              <td className="py-2">Active</td>
              <td className="py-2">05 Jun 2024</td>
              <td className="py-2">₹1099/-</td>
            </tr>
            <tr>
              <td className="py-2">LinkedIn Premium</td>
              <td className="py-2">Active</td>
              <td className="py-2">14 Apr 2024</td>
              <td className="py-2">₹899/-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Visa</h3>
        <p className="mt-2">Card holder: Dhruv</p>
      </div> */}
    </div>
  );
}

export default Profile;
