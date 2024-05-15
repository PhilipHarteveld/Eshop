import React from "react";
import Sidebar from "../../components/back-office/Sidebar";
import Navbar from "../../components/back-office/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="w-full">
        <Navbar />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
