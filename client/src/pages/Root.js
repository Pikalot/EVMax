import MainNavigation from "../utilities/MainNavigation";
import { Outlet } from "react-router-dom";
import LoginModal from "../utilities/LoginModal";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainNavigation />
      <ToastContainer theme="colored" />
      {ctx.isOpenedLoginModal && <LoginModal />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
