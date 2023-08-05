import axios from "../api/client";
import useAuth from "./useAuth";

function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const res = await axios.get("/refresh", { withCredentials: true });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res.data.accessToken);
      return { ...prev, accessToken: res.data.accessToken };
    });
    return res.data.accessToken;
  };
  return refresh;
}

export default useRefreshToken;
