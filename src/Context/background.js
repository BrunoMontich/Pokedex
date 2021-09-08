import React, { createContext, useState, useContext } from "react";

const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [pokelista, setPokelista] = useState([]);
  const [attPokelista, setAttPokelista] = useState(0);

  const [background, setBackground] = useState([
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
  ]);

  return (
    <BackgroundContext.Provider
      value={{
        background,
        setBackground,
        pokelista,
        setPokelista,
        attPokelista,
        setAttPokelista,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  const {
    background,
    setBackground,
    pokelista,
    setPokelista,
    attPokelista,
    setAttPokelista,
  } = context;

  return {
    background,
    setBackground,
    pokelista,
    setPokelista,
    attPokelista,
    setAttPokelista,
  };
}
