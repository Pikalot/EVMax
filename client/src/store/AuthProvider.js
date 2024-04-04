import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import axios from "axios";
import { app } from "../firebase/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";

const AuthProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [favoriteCarsID, setFavoriteCarsID] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Firebase Authentication
  const auth = getAuth(app);

  const [filter, setFilter] = useState({
    sortOptions: "",
    body: "all",
    make: "all",
    isSavedCars: false,
  });

  const getData = async () => {
    const id = toast.loading("Fetching Data from Database");
    try {
      const response = await axios.get(
        "http://localhost:1337/api/car-collections?populate=*"
      );
      toast.update(id, {
        render: "Fetching Data Success!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      setCars(response.data.data);
    } catch (error) {
      toast.update(id, {
        render: "Connection Error!",
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
      console.log(error);
    }
  };

  const carSaveHandler = (id) => {
    setFavoriteCarsID((prev) => {
      if (prev.includes(id)) return prev.filter((carID) => carID !== id);
      return [...prev, id];
    });
  };

  const setFilterOptions = (options) => {
    setFilter((prev) => {
      return { ...prev, ...options };
    });
  };

  const setModalStatus = (status) => {
    setIsOpenedModal(status);
  };

  const processDataInput = async (userData, activity) => {
    try {
      switch (activity) {
        case "signup":
          const userSignupCredential = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          );
          const userSignup = userSignupCredential.user;
          userSignup.displayName = userData.name;

          const sendVerificationEmail = await sendEmailVerification(
            auth.currentUser
          );
          console.log(sendVerificationEmail);
          console.log("Email verification sent!");
          toast.success("Email Verification Sent!");
          break;
        case "login":
          const userLoginCredential = await signInWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          );
          const userLogin = userLoginCredential.user;

          if (userLogin.emailVerified) {
            setIsOpenedModal(false);
            toast.success("Login successfully!");
            setCurrentUser(userLogin);
          } else {
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              console.log("Email verification resent!");
              toast.info("Email Verification Resent!");
            });
            throw new Error("Email is not verified!");
          }
          break;
        case "logout":
          auth.signOut();
          toast.success("Logout Successfully!");
          setCurrentUser(null);
          break;
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const authContext = {
    getData: getData,
    saveCar: carSaveHandler,
    setFilterOptions: setFilterOptions,
    setLoginModalActions: setModalStatus,
    processDataInput: processDataInput,
    featuredCars: cars.filter((car) => car.attributes.isFeatured),
    allCars: cars,
    favoriteCarsID: favoriteCarsID,
    filterOptions: filter,
    isOpenedLoginModal: isOpenedModal,
    currentUser: currentUser,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
