import MainNavigation from "../utilities/MainNavigation";
import { Outlet } from "react-router-dom";
import LoginModal from "../utilities/LoginModal";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LiveChat from "../components/LiveChat/LiveChat";

const RootLayout = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainNavigation />
      <ToastContainer
        theme="colored"
        autoClose={1000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      {ctx.isOpenedLoginModal && <LoginModal />}
      <LiveChat />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
