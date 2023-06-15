
import Icon from './app/components/Icon';
import ListItems from './app/components/ListItems';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import MessageScreen from './app/screen/MessageScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';

export default function App() {
  return (
  //  <WelcomeScreen/>
  // <ViewImageScreen/>
  // <ListingDetailsScreen/>
  // <MessageScreen/>
  <Screen>
  <ListItems title="Hello" subTitle="How are you" ImageComponent={<Icon name="email"/>}/>
  </Screen>
  
  );
}

