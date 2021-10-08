import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle,Image, ImageStyle, Linking } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
//import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"



const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const TITLE : TextStyle = {
  color : color.palette.offWhite,
  textAlign : 'center',
  fontWeight : 'bold'
  

}
const PROFILE_PHOTO : ImageStyle ={
  borderColor : "#E8D329",
  borderWidth : 1,
  alignSelf : 'center',
  maxWidth : '100%',
  borderRadius : 500,
  marginVertical : spacing[5],
  
}

 const DESCRIPTION : TextStyle = {
   fontSize : 15,
   color: "#BAB6C8",
   textAlign : 'center',


 }
 const SEE_MORE : ViewStyle = {
   paddingHorizontal : spacing[4],
   paddingVertical : spacing[4],
   backgroundColor : '#F9AF05'

 }
 const TEXT_BUTTON : TextStyle = {
   fontSize : 20,
 }
 const BUTTONS :ViewStyle = {
  paddingHorizontal : spacing[5],
  paddingVertical : spacing[5],
  backgroundColor : color.palette.black
  
 }
 const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
export const ProfileScreen = observer(function ProfileScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("page")

  return (
    
        <View style={{flex:1,}}>
   
   <Screen style={ROOT} preset="scroll">
   <ScrollView>
         <Text preset="header" text="My Profile" style={TITLE}
         />
           <Image
         source ={require("C:/Users/ahafdi/Desktop/react native/ignite/PizzaApp/app/screens/welcome-screen/ahmed.jpg")}
         style={PROFILE_PHOTO}
        />
        <Text style={DESCRIPTION}>
        Hi, I'm Ahmed HAFDI, a passionate self-taught Full Stack web developer, mobile , blockchain and a freelance software engineer from Morocco. 
        My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
        I am also an open-source enthusiast and maintainer. I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through open-source.
        </Text>
        <View style={BUTTONS} >



</View>
        
       
        </ScrollView>
     </Screen>   
     <SafeAreaView style={FOOTER}>
          <View style={BUTTONS}>
          <Button 
          style={SEE_MORE}
          text="MORE ABOUT ME"
          textStyle={TEXT_BUTTON}
          onPress={()=>{navigation.navigate("page")}}
          />
          </View>
     </SafeAreaView>
 
   
    </View>
    
        
          

    
  )
})
