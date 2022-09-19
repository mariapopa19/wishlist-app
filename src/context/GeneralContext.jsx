import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GeneralContext = createContext({});

const GeneralProvider = (props) => {
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);
  const [namePerson, setNamePerson] = useState("");
  const [nameList, setNameList] = useState("");
  const [groupPurchase, setGroupPurcase] = useState(''); 
const [notifications, setNotifications] = useState([]);

  let navigate = useNavigate();

  const logOut = async () => {
    localStorage.clear();
    setToken(null);
    navigate("/");
  };

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
        setGroupPurcase,
        notifications,
        setNotifications,
        logOut
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralProvider }