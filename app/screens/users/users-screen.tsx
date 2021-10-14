import React from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, ViewStyle } from "react-native"
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
  borderRadius:36,
  alignItems:'center',
  flexDirection : 'row'
}
const USER_INFO : ViewStyle = {
  flexDirection : 'column',
  margin : 10,
}
 const data=[
   {id : "1",name : "ahmed 1", job : "job 1",image : "https://avatars.githubusercontent.com/u/58536023?s=400&u=8c34c3af02b96b4bb206ea6f2aae460cad938d6a&v=4"
  },
 {id : "2",name : "ahmed 2", job : "job 2",image : "https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"},
 {id : "3",name : "ahmed 3", job : "job 3",image : "https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"},
 {id : "3",name : "ahmed 3", job : "job 3",image : "https://avatars.githubusercontent.com/u/31248?v=4"}

]
export const UsersScreen = observer(function UsersScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Users List" />
      <View >
      {
              data.map((users,index)=>{
                return (
                  <TouchableOpacity style={USER_VIEW}
                  onPress={()=>{console.log("gello")}}
                  >
                  <View >
                    
                  <UserAvatar
                  size="70"
                  src={users.image}
                  />
                  </View >
                  <View  style={USER_INFO}> 
                  <Text>name: {users.name}</Text>
                  <Text>job: {users.job}</Text>
                  </View>     
                </TouchableOpacity>
                  
                );
              })
            }
      
        
      </View>
    </Screen>
  )
})
