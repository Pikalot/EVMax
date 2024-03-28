import React from "react";

const AuthContext = React.createContext({
  getData: () => {},
  featuredCars: [],
  allCars: [],
});

export default AuthContext;
