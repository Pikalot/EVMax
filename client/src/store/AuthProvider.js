import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import axios from "axios";
import { auth, db } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const AuthProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [favoriteCarsID, setFavoriteCarsID] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // Firebase Authentication

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
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      setCars(response.data.data);
    } catch (error) {
      toast.update(id, {
        render: "Connection Error!",
        type: "error",
        isLoading: false,
        autoClose: 1000,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
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
    switch (activity) {
      case "signup":
        try {
          const userSignupCredential = await createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          );
          const user = userSignupCredential.user;
          user.displayName = userData.name;

          const sendVerificationEmail = await sendEmailVerification(
            auth.currentUser
          );
          console.log(sendVerificationEmail);
          console.log("Email verification sent!");
          toast.success("Email Verification Sent!");
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        }
        break;

      case "loginWithEmail":
        try {
          const userLoginCredential = await signInWithEmailAndPassword(
            auth,
            userData.email,
            userData.password
          );
          const user = userLoginCredential.user;

          if (user.emailVerified) {
            setIsOpenedModal(false);
            toast.success("Login successfully!");
            setCurrentUser(user);
          } else {
            throw new Error("Email is not verified!");
          }
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            console.log("Email verification resent!");
            toast.info("Email Verification Resent!");
          });
        }
        break;

      case "loginWithGoogle":
        try {
          const result = await signInWithPopup(auth, new GoogleAuthProvider());
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setCurrentUser(user);
          console.log("Google User: ", user);
          setIsOpenedModal(false);
        } catch (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        }
        break;

      case "loginWithGithub":
        try {
          const result = await signInWithPopup(auth, new GithubAuthProvider());
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setCurrentUser(user);
          setIsOpenedModal(false);

          console.log("Github User: ", user);
        } catch (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
        }
        break;

      case "loginWithFacebook":
        try {
          const result = await signInWithPopup(
            auth,
            new FacebookAuthProvider()
          );
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setCurrentUser(user);
          setIsOpenedModal(false);

          console.log("Facebook User: ", user);
        } catch (error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
        }
        break;

      case "logout":
        try {
          auth.signOut();
          toast.success("Logout Successfully!");
          setCurrentUser(null);
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        }
        break;
    }
  };

  const sendMessage = async (message) => {
    const { uid, displayName } = currentUser;

    try {
      await addDoc(collection(db, `${displayName}-${uid}`), {
        text: message,
        name: displayName,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      toast.error(error);
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
    firebaseSendMessage: sendMessage,
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
