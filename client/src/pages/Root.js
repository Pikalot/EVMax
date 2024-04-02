import MainNavigation from "../utilities/MainNavigation";
import { Outlet } from "react-router-dom";
import LoginModal from "../utilities/LoginModal";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const RootLayout = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainNavigation />
      {ctx.isOpenedLoginModal ? (
        <LoginModal />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </>
  );
};

export default RootLayout;
