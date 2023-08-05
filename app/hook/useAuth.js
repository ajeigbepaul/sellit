import { useContext } from "react";
import AuthContext from "../contextapi/authProvider";
const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
