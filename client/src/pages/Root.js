import MainNavigation from "../components/Home/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
