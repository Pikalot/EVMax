import React from "react";

const AuthContext = React.createContext({
  getData: () => {},
  carSave: () => {},
  featuredCars: [],
  allCars: [],
  favoriteCars: [],
});

export default AuthContext;
