import React, { createContext, useContext, useState } from "react";

const SuccesPage = createContext();

export function SuccesPage() {
  return useContext(PizzaContext);
}

export function PizzaProvider({ children }) {
  const [pizzaInfo, setPizzaInfo] = useState({});

  const setPizzaInformation = (info) => {
    setPizzaInfo(info);
  };

  return (
    <PizzaContext.Provider value={{ pizzaInfo, setPizzaInformation }}>
      {children}
    </PizzaContext.Provider>
  );
}
