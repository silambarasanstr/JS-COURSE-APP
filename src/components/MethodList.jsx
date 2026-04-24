import { Link } from "react-router-dom";

const MethodList = ({ methods, category }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{category} Methods</h2>
      <ul>
        {methods.map((method) => (
          <li key={method.title} className="mb-2">
            <Link
              to={`/category/${category}/${encodeURIComponent(method.title)}`}
              className="hover:text-blue-600"
            >
              {method.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MethodList;
