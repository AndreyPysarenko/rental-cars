import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAppState } from "store/appState/selector";
import Header from "../components/Header";
import Loader from "components/Loader";
import Footer from "components/Footer";

const Layout = () => {
  const { isLoading } = useSelector(selectAppState);
  return (
    <>
      <Header />
      <main>
      {isLoading && <Loader />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      <footer><Footer/></footer>
    </>
  );
};

export default Layout;
