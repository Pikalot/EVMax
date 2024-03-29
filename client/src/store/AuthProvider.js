import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import axios from "axios";

const AuthProvider = (props) => {
  const [cars, setCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/car-collections"
      );

      setCars(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const carSaveHandler = (id) => {
    setFavoriteCars((prev) => {
      if (prev.includes(id)) return prev.filter((carID) => carID !== id);
      return [...prev, id];
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const authContext = {
    getData: getData,
    carSave: carSaveHandler,
    featuredCars: cars.filter((car) => car.attributes.isFeatured),
    allCars: cars,
    favoriteCars: favoriteCars,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
