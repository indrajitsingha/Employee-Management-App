import { Outlet, NavLink } from "react-router-dom";
import { UserButton, SignOutButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[black] text-white p-4 flex justify-between items-center">
        <div className=" text-xl uppercase">
          <div> <strong className="text-[#269fe8] ">Employee </strong>Management</div>
        </div>
        <div className="flex gap-4 text-lg uppercase">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/employee" className="hover:text-gray-300 p-y-10">Employee</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <UserButton />
          <Button className='  hover:bg-[#269fe8]'> <SignOutButton /></Button>
        </div>
      </nav>
      <main className="p-6 bg-white min-h-screen text-black">
        <Outlet />
      </main>
    </>
  );
}
