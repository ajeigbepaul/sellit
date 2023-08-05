import * as Storage from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "authtoken";

const storeToken = async (authToken) => {
  try {
    await Storage.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token" + error);
  }
};

const getToken = async () => {
  try {
    return await Storage.getItemAsync(key);
  } catch (error) {
    console.log("Could not get token" + error);
  }
};
const getUser = async()=>{
    const token = await getToken();
    if(token) return jwtDecode(token)
    return null;

}
const removeToken = async () => {
  try {
    await Storage.deleteItemAsync(key);
  } catch (error) {
    console.log("Could not delete the token" + error);
  }
};

export default {
  storeToken,
  removeToken,
  getUser
};
