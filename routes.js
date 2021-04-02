import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserList from './components/userList';
import AddUser from './components/addUser';
import EditUser from './components/editUser';
import DeleteUser from './components/deleteUser';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="AddUser" component={AddUser} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="DeleteUser" component={DeleteUser} />
    </Stack.Navigator>
  );
}