import React, { createContext, useState } from "react";

const GeneralContext = createContext({});

const GeneralProvider = (props) => {
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);
  const [namePerson, setNamePerson] = useState("");
  const [nameList, setNameList] = useState("");
  const [groupPurchase, setGroupPurcase] = useState(''); 

  return (
    <GeneralContext.Provider
      value={{
        open,
        setOpen,
        token,
        setToken,
        namePerson,
        setNamePerson,
        nameList,
        setNameList,
        groupPurchase,
        setGroupPurcase
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralProvider }