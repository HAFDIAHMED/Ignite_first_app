import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Header, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
//import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const PageScreen = observer(function PageScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  //const goBack = () => navigation.goBack()
  return (
    <Screen style={ROOT} preset="scroll">
      <Header headerText="profile information" onLeftPress={()=>{navigation.goBack()}}  leftIcon="back"/>
      <Text preset="header" text="heloooodoo" />
      
      <Button 
text="hello"
onPress={()=>console.log("helooo")}
/>
    </Screen>
  )
})
