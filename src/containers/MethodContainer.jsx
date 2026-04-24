import { useParams, Link } from "react-router-dom";
import { methods } from "../data/courseData";

const MethodContainer = () => {
  const { categoryName, methodTitle } = useParams();

  const method = methods.find(
    (m) => m.title === decodeURIComponent(methodTitle),
  );

  // const method = methods.find((m) => m.title === methodTitle);

  if (!method) {
    return <div className="p-10 text-gray-400">Method not found.</div>;
  }

  return (
    <div className="py-8 px-10 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-[13px] text-gray-400">
        <Link
          to={`/category/${categoryName}`}
          className="text-indigo-600 no-underline font-medium "
        >
          ← {categoryName}
        </Link>
        <span>/</span>
        <span>{method.title}</span>
      </div>

      {/* Title */}
      <h1 className="mb-1 text-3xl font-bold text-gray-900 font-mono">
        {method.title}
      </h1>
      <div className="text-xs text-indigo-600 mb-7">{method.category}</div>

      {/* Syntax */}
      <SectionLabel>Syntax</SectionLabel>
      <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4 font-mono text-sm text-indigo-600 mb-6 break-all">
        {method.syntax}
      </div>

      {/* Parameters */}
      {method.parameters && (
        <>
          <SectionLabel>Parameters</SectionLabel>
          <div className="mb-6">
            {method.parameters.map((p, i) => {
              const [name, ...rest] = p.split("–");
              const desc = rest.join("–").trim();
              return (
                <div key={i} className="flex items-start gap-3 mb-2">
                  <code className="bg-gray-100 px-2 py-[2px] rounded-[5px] text-xs font-mono text-gray-900 whitespace-nowrap">
                    {name.trim()}
                  </code>
                  {desc && (
                    <span className="text-sm text-gray-500 pt-0.5">{desc}</span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Example */}
      <SectionLabel>Example</SectionLabel>
      <div
        style={{
          background: "#1e1e1e",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "32px",
        }}
      >
        {/* Mac-style dots */}
        <div
          style={{
            background: "#2d2d2d",
            padding: "8px 14px",
            display: "flex",
            gap: "6px",
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span
              key={c}
              className="w-[10px] h-[10px] rounded-full block"
              style={{ background: c }}
            />
          ))}
        </div>
        <pre className="m-0 p-5 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
          {method.example}
        </pre>
      </div>
    </div>
  );
};

// Small reusable label
const SectionLabel = ({ children }) => (
  <div
    style={{
      fontSize: "11px",
      color: "#aaa",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}
  >
    {children}
  </div>
);

export default MethodContainer;
