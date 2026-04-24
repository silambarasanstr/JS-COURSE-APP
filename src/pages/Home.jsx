import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="
  relative flex items-center min-h-screen
  bg-[url('https://plus.unsplash.com/premium_vector-1682307798482-3d415c287228?q=80&w=880')]
    bg-right
  bg-contain bg-no-repeat
"
    >
      <div className="container relative px-8 mx-auto">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <span className="text-sm text-gray-500">📅</span>
          <span className="text-sm font-medium text-gray-700">
            Today:{" "}
            {new Date().toLocaleDateString("en-IN", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        
        {/* Badge */}
        <div className="inline-block px-3 py-1 mb-6 ml-6 text-xs font-semibold tracking-widest text-green-700 uppercase bg-green-100 rounded-full">
          Learning Platform
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Learn <span className="text-green-600">Web</span>
          <br />
          <span className="text-green-600">Development</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-xl mb-10 text-lg leading-relaxed text-gray-600">
          Master JavaScript, React, and modern web technologies with
          easy-to-understand concepts, examples, and practical exercises.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <NavLink
            to="/category/Arrays"
            className="py-3 text-base font-semibold text-white transition bg-green-600 rounded-lg shadow-sm px-7 hover:bg-green-700"
          >
            Start Learning →
          </NavLink>

          <NavLink
            to="/dashboard"
            className="py-3 text-base font-semibold text-gray-700 transition border border-gray-300 rounded-lg px-7 hover:border-green-600 hover:text-green-600"
          >
            My Dashboard
          </NavLink>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-16">
          {[
            { count: "6+", label: "Topics" },
            { count: "20+", label: "Methods" },
            { count: "100%", label: "Free" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-gray-900">
                {s.count}
              </div>
              <div className="mt-1 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
