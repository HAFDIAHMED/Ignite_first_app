import React from "react"
import { observer } from "mobx-react-lite"
import { Linking, TextStyle, View, ViewStyle } from "react-native"
import {  Button, Header, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"


//import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  
}
const BUTTON : ViewStyle = {
  paddingHorizontal : spacing[4],
  paddingVertical : spacing[4],
  backgroundColor : '#F9AF05',
  margin : 10,
  

}
const BUTTON_TEXT : TextStyle = {
  fontSize : 25,
  
}
const BUTTONS : ViewStyle = {
  paddingHorizontal : spacing[5],
  paddingVertical : spacing[5],
  flexDirection : 'column'
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
      <View style={BUTTONS}>
      <Button 
      style={BUTTON}
        text="GITHUB"
        textStyle={BUTTON_TEXT}
        onPress={()=>{Linking.openURL("https://github.com/HAFDIAHMED")}}
      />
        <Button 
      style={BUTTON}
        text="WEBSITE"
        textStyle={BUTTON_TEXT}
        onPress={()=>{Linking.openURL("https://ahmedhafdi.com/")}}
      />
      <Button 
      style={BUTTON}
        text="LINKEDEN"
        textStyle={BUTTON_TEXT}
        onPress={()=>{Linking.openURL("https://www.linkedin.com/in/ahmed-hafdi-200528188/")}}
      />
      <Button 
      style={BUTTON}
        text="DRAWER"
        textStyle={BUTTON_TEXT}
        onPress={()=>{navigation.navigate("drawer")}}
      />
      </View>
     
      

      
      
    </Screen>
  )
})
