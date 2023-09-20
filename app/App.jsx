import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/home';
import Login from './src/pages/login';
import Cadastro from './src/pages/Cadastro/cadastro';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Routes />
  );
}

export default App;