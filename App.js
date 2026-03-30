import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/pages/home";
import Produtos from "./src/screens/pages/produtos";
import Contato from "./src/screens/pages/contato";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
