import React, { createContext, useState, useContext } from "react";

const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [background, setBackground] = useState([
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
    { color: "rgb(128, 155, 136)" },
  ]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  const { background, setBackground } = context;
  return [background, setBackground];
}
