import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import UserAvatar from 'react-native-user-avatar';
import { Avatar } from 'react-native-elements';



const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems : 'center',
}
const USER_VIEW : ViewStyle={
  backgroundColor : "#5D2555",
  borderWidth :1,
  width:300,
  margin : 10,
  //height : 90,
  borderRadius:20,
  alignItems:'center',
  flexDirection : 'row'
}
const USER_INFO : ViewStyle = {
  flexDirection : 'column',
  margin : 10,
}

export const UsersScreen = observer(function UsersScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Users List" />
      <View >
        <View style={USER_VIEW}>
          <View >
          <UserAvatar
          size="100"
          name="ahmed hafdi"
          src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"

          />
         



          </View >
          <View  style={USER_INFO}> 
          <Text>name:</Text>
          <Text>job:</Text>
          </View>
       
            
        </View>
        
      </View>
    </Screen>
  )
})
