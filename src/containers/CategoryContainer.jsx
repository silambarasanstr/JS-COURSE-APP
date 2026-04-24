import { useParams, Link } from "react-router-dom";
import { categories, methods } from "../data/courseData";

const CategoryContainer = () => {
  const { categoryName } = useParams();

  const cat = categories.find((c) => c.name === categoryName);
  const catMethods = methods.filter((m) => m.category === categoryName);

  if (!cat) {
    return <div className="p-10 text-gray-400">Category not found.</div>;
  }

  const descriptions = Array.isArray(cat.description)
    ? cat.description
    : [cat.description];

  return (
    <div className="py-8 px-10 max-w-[900px]">
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{cat.icon}</span>
        <div>
          <div className="text-[11px] text-gray-400 tracking-[1px] mb-1">
            CATEGORY
          </div>
          <h1 className="m-0 text-[28px] font-bold text-gray-900">
            {cat.name}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="pl-4 mb-8 border-l-4 border-indigo-600">
        {descriptions.map((d, i) => (
          <p
            key={i}
            className={`text-sm text-gray-600 leading-relaxed ${
              i < descriptions.length - 1 ? "mb-2" : ""
            }`}
          >
            {d}
          </p>
        ))}
      </div>

      {/* Methods count label */}
      <div className="mb-3 text-xs tracking-wider text-gray-400">
        {catMethods.length} METHODS
      </div>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {catMethods.map((m) => (
          <Link
            key={m.title}
            to={`/category/${categoryName}/${encodeURIComponent(m.title)}`}
            className="no-underline hover:underline"
          >
            <div className="px-4 py-4 transition duration-200 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-500 hover:shadow-md hover:-translate-y-1">
              <div className="mb-1 font-mono text-sm font-semibold text-indigo-600">
                {m.title}
              </div>
              <div className="text-[11px] text-gray-400 font-mono truncate">
                {m.syntax}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
