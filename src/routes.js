import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/home';
import Cadastro from './components/cadastro';
import IMC from './components/imc';
import Sobre from './components/sobre';
import Resultado from './components/resultado';
import Perfil from './components/perfil';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackStream() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Cadastro" component={Cadastro} />
      <MainStack.Screen name="IMC" component={IMC} />
      <MainStack.Screen name="Sobre" component={Sobre} />
      <MainStack.Screen name="Resultado" component={Resultado} />
    </MainStack.Navigator>
  );
}

function RootStackStream() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Main" component={MainStackStream} />
            <RootStack.Screen name="MyModal" component={Perfil} />
        </RootStack.Navigator>
    )
}

export default RootStackStream;