import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import axios from "axios";

const AuthProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [favoriteCarsID, setFavoriteCarsID] = useState([]);
  const [isloggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    getData();
  }, []);

  const authContext = {
    getData: getData,
    saveCar: carSaveHandler,
    setFilterOptions: setFilterOptions,
    featuredCars: cars.filter((car) => car.attributes.isFeatured),
    allCars: cars,
    favoriteCarsID: favoriteCarsID,
    filterOptions: filter,
    isLoggedIn: isloggedIn,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
