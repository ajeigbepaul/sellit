
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import { AuthProvider } from "./app/contextapi/authProvider";
import Main from "./app/utils/Main";
// import NetInfo, {useNetInfo} from '@react-native-community/netinfo'
// import { View } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";
export default function App() {
  return (
    <AuthProvider>
      <OfflineNotice/>
      <NavigationContainer theme={navigationTheme}>
         <Main/>
       </NavigationContainer>
    </AuthProvider>
  );
  // const netinfo = useNetInfo()
  
  // return (
  //   <View>{console.log(netinfo.isConnected)}</View>
  // )
}
