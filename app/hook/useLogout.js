import client from "../api/client";
import useAuth from "./useAuth";

const useLogout = ()=>{
    const {setAuth} = useAuth()
    const logout = async()=>{
        try {
            setAuth({});
            const res = await client.get("/logout");
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
        
    }
    return logout
}

export default useLogout