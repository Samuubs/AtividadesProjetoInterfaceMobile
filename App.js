/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 
 import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};

export default App;

// const [user, setUser] = useState(null);

// useEffect(() => {
//   async function getUser(userId) {
//     const usersData = await firestore().collection('users').doc(userId).get();
//     setUser(usersData._data)
//   }

//   // Valores possiveis
//   // DeL4UnIs2tzsj0lZKH4m
//   // Z4ytM9UyhPK6taoQKays
//   // hfWrVLXp0TWiGAHHRpNt
//   // qs3GUo0c1WaQkhxmFavp
//   getUser('Z4ytM9UyhPK6taoQKays');
// }, []);

// const renderUserInfo = (user) => {
//   if (user) {
//     return (
//       <View style={{flex: 1, backgroundColor: "#ddd", justifyContent: "center", alignItems: "center"}}>
//         <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center"}}>{`${user.nome}, do curso ${user.curso} aos ${user.idade} anos.`}</Text>
//       </View>
//     )
//   }
//   return (
//     <View style={{flex: 1, backgroundColor: "#ddd", justifyContent: "center", alignItems: "center"}}>
//         <ActivityIndicator size="large" color="#000" />
//     </View>
//   )
// }
