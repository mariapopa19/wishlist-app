import React, { createContext, useState } from "react";

 const GeneralContext = createContext({});

 const GeneralProvider = props => {
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        open,
        setOpen,
        token,
        setToken,
      }}
    >
      {console.log(open)}
      {props.children}
    </GeneralContext.Provider>
  );
};

export {GeneralContext, GeneralProvider};