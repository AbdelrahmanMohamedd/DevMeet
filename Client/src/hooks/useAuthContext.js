import { AuthContextProvider } from "../Context/AuthContext";
import { useContext } from "react";


export const useWorkoutsContext=()=>{
 const context = useContext(AuthContext)

 if(!context){
  throw Error('useAuthContext must be used inside inside an AuthContextProvider')
 }
 return context
}