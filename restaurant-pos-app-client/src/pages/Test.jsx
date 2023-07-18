import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

const Test = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden">
        <Header />
        <main className="flex-grow p-4">
          <h1>Test</h1>
        </main>
      </div>
    </div>
  );
};

export default Test;
