import { Route, Routes } from "react-router-dom";
import Layout from "../../layout";
import { lazy } from "react";

const Home = lazy(() => import("../../page/Home"));
const Catalog = lazy(() => import("../../page/Catalog"));
const Favorite = lazy(() => import("../../page/Favorite"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
