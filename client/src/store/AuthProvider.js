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
    try {
      const response = await axios.get(
        "http://localhost:1337/api/car-collections?populate=*"
      );

      setCars(response.data.data);
    } catch (error) {
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

  const processDataInput = (userData, activity) => {
    switch (activity) {
      case "signup":
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            user.displayName = userData.name;

            console.log(user);
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              console.log("Email verification sent!");
              toast.success("Email verification sent!");
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
        break;
      case "login":
        signInWithEmailAndPassword(auth, userData.email, userData.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if (user.emailVerified) {
              console.log(user);
              setIsOpenedModal(false);
              toast.success("Login successfully!");
              setCurrentUser(user);
            } else {
              sendEmailVerification(auth.currentUser).then(() => {
                // Email verification sent!
                console.log("Email verification resent!");
                toast.success("Email verification resent!");
              });
              throw new Error("Email is not verified!");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
        break;
      case "logout":
        auth.signOut();
        toast.success("Logout successfully!");
        setCurrentUser(null);
        break;
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
