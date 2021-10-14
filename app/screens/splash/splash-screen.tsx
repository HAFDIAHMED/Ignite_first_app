import React from "react"
import { observer } from "mobx-react-lite"
import { Image, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.primary,
  flex: 1,
}


export const SplashScreen = observer(function SplashScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="" />
      <Image
               source ={require("C:\Users\ahafdi\Desktop\react native\ignite\PizzaApp\assets\images\logo.png")}

      />
    </Screen>
  )
})
