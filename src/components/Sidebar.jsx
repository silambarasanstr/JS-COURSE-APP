import { NavLink } from "react-router-dom";
import { methods } from "../data/courseData";

const Sidebar = ({ categories, isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={` fixed md:static top-0 left-0 z-50 h-full w-[220px] bg-gray-50 border-r transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-5 border-b">
          <div className="text-[11px] text-gray-400 mb-1 tracking-widest">
            JS REFERENCE
          </div>
          <div className="text-lg font-semibold">DevDocs</div>
        </div>

        {/* Links */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-100px)]">
          {categories.map((cat) => (
            <NavLink
              key={cat.name}
              to={`/category/${cat.name}`}
              onClick={handleClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg text-sm mb-1 transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span>{cat.icon}</span>
              {cat.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-400 border-t">
          {methods.length} methods · {categories.length} topics
        </div>
      </aside>
    </>
  );
};

export default Sidebar;