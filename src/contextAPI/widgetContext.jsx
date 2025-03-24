import { createContext, useState } from 'react';

const WidgetContext = createContext({
 data: {},
    setData: () => {},
});

const WidgetProvider = ({ children }) => {
 const [data, setData] = useState({});

 return (
   <WidgetContext.Provider value={{ data, setData }}>
     {children}
   </WidgetContext.Provider>
 );
};

export { WidgetContext, WidgetProvider };