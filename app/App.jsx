import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/home';
import Login from './src/pages/login';
import Cadastro from './src/pages/Cadastro/cadastro';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // definindo as telas 
    <NavigationContainer> 
      {/* Pagina home é definida como a padrão */}
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;