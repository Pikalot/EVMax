import React from "react";

const AuthContext = React.createContext({
  getData: () => {},
  saveCar: () => {},
  setFilterOptions: () => {},
  toggleLoginModalActions: () => {},
  featuredCars: [],
  allCars: [],
  favoriteCarsID: [],
  filterOptions: {},
  isloggedIn: false,
  isOpenedLoginModal: false,
});

export default AuthContext;
