import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import MethodContainer from "../containers/MethodContainer";
import CategoryContainer from "../containers/CategoryContainer";
import Category from "../pages/Category";
import DocumentContainer from "../containers/DocumentContainer";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<Category />}>
            <Route index element={<Navigate to="/category/Arrays" replace />} />
            <Route path=":categoryName" element={<CategoryContainer />} />
            <Route
              path=":categoryName/:methodTitle"
              element={<MethodContainer />}
            />
          </Route>
          <Route path="/document" element={<DocumentContainer />}></Route>
        </Route>

        <Route path="*" element={"Not Found"} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
