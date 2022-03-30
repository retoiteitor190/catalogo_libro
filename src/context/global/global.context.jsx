import React, {createContext, useState} from 'react';

const initialState={
    user: {name:"Alejandro", lastName:"Ruíz"},
    colorDefault: "#2c686c"
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider =({children})=>{
    const [state,setState] =useState(initialState);
    return(
        <GlobalContext.Provider value={(state)}>
            {children}
        </GlobalContext.Provider>
    )
}