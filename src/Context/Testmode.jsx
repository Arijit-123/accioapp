import { createContext,useState,useContext } from "react";
const Testmodecontext= createContext();
export const TestmodecontextProvider=({children})=>{
    const [testTime,setTestTime]=useState(15);
   const values={
    testTime,
    setTestTime
   }
   return (
    <Testmodecontext.Provider value={values}>
        {children}
    </Testmodecontext.Provider>
   )
}
export const useTestMode= ()=> useContext(Testmodecontext);

