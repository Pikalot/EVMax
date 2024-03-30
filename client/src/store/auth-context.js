import React from "react";

const AuthContext = React.createContext({
  getData: () => {},
  saveCar: () => {},
  setFilterOptions: () => {},
  featuredCars: [],
  allCars: [],
  favoriteCarsID: [],
  filterOptions: {},
});

export default AuthContext;
