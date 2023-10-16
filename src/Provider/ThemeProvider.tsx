"use client"

import {createContext , useState} from "react";
import React from 'react';

type ThemeProviderProps = {
    children: React.ReactNode;
  };
  
export type ThemeContextType = {
    toggle: ()=>void;
    mode: string;
  };
  const initial = {
    mode : "light",
    toggle : ()=> console.log("void"),
  }


export const ThemeContext = createContext<ThemeContextType>(initial);



const ThemeProvider = ({children} : ThemeProviderProps) => {
    const [mode , setMode] = useState<string>("light");
    const toggle = () => setMode((prev)=> (prev === "dark"? "light":"dark"));


    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{toggle , mode}}>
        <div className={`${mode}`}>
            {children}
        </div>
        </ThemeContext.Provider>

    );
};

export default ThemeProvider;