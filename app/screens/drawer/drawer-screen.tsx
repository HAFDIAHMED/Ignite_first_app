import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';//import { DrawerNavigator } from "react-navigation"
import 'react-native-gesture-handler';




import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from "react-native-gesture-handler"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
 


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        text="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} text="Go back home" />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} 
     
      />
    </Drawer.Navigator>
  );
}

export const DrawerScreen = observer(function DrawerScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook

  //onst navigation = useNavigation()

  
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
   
  
  )
})
