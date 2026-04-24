import { useState } from "react";
import { Outlet } from "react-router-dom";
import { categories } from "../data/courseData";
import Sidebar from "../components/Sidebar";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        categories={categories}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Content */}
      <div className="flex-1 bg-gray-50">
        
        
        {/* <div className="flex justify-between p-4 bg-white border-b md:hidden">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setIsOpen(true)}>☰</button>
        </div> */}

        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Category;