import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Home from "../pages/Home/home";
import Cadastro from "../pages/Cadastro/cadastro";
import Main from "../pages/Main/main";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
  );
}
