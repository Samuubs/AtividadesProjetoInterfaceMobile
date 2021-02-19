import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListAlbuns from './src/components/albumsList';
import AlbumModal from './src/components/albumModal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackStream() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="albunsList" component={ListAlbuns}/>
    </MainStack.Navigator>
  );
}

function RootStackStream() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Main" component={MainStackStream} />
            <RootStack.Screen name="AlbumModal" component={AlbumModal} />
        </RootStack.Navigator>
    )
}

export default RootStackStream;