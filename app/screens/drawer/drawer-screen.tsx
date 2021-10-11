import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
//import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native"

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const DrawerPage = createDrawerNavigator();

function MyDrawer() {
  return (
    <DrawerPage.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <DrawerPage.Screen name="Feed" component={Feed} />
      <DrawerPage.Screen name="Notifications" component={Notifications} />
    </DrawerPage.Navigator>
  );
}
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const DrawerScreen = observer(function DrawerScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
})
