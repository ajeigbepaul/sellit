import { axiosPrivate } from "../api/client";
import { useEffect } from "react";
import useRefreshToken from "./useRefresh";
import useAuth from "./useAuth";

function useAxiosPrivate() {
  const refreshtoken = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
          console.log(auth?.accessToken);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      // if accessToken expires.
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshtoken();
          prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
      axiosPrivate.interceptors.response.eject(resIntercept);
    };
  }, [auth, refreshtoken]);

  return axiosPrivate;
}

export default useAxiosPrivate;
