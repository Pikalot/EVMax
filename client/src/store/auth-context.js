import React from "react";

const AuthContext = React.createContext({
  getData: () => {},
  saveCar: () => {},
  setFilterOptions: () => {},
  setLoginModalActions: () => {},
  processDataInput: () => {},
  featuredCars: [],
  allCars: [],
  favoriteCarsID: [],
  filterOptions: {},
  isOpenedLoginModal: false,
  currentUser: {},
});

export default AuthContext;
