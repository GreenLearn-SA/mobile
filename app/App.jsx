import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgressProvider } from "./contexts/ProgressContext";

import Routes from "./src/routes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ProgressProvider>
        <Routes />
      </ProgressProvider>
    </NavigationContainer>
  );
}

export default App;
