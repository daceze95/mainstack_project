import React, { createContext, useContext } from 'react';

export const dataContext = createContext();

const DataProvider = ({ children }) => {

  return <dataContext.Provider value={''}>{children}</dataContext.Provider>;
};

export default DataProvider;


export const useAuth = ()=>{
    const context = useContext(dataContext)
    if(context === "undefined"){
        throw new Error('useAuth must be used within the auth provider');
    }
    return context
}