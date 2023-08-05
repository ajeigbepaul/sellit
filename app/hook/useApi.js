import { useState } from "react";

export default useApi = (apiFunc)=>{
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);
    const res = await apiFunc();
    setIsLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setData(res.data);
  };
  return{
    data,
    error,
    isloading,
    request

  }
}