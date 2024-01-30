import {createContext, useContext, useState} from "react";

const defaultContext = {
  isOpen: false,
  // Type can be either "success" or "error"
  type: 'success',
  // Message to be displayed, can be any string
  message: '',
}

export const AlertContext = createContext(defaultContext);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState(defaultContext);

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
