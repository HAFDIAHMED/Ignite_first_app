import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextInput, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { TacheModel } from "../../models/tache/tache"
import { TacheStoreModel } from "../../models/tache-store/tache-store"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems:'center',
}
const INPUT : ViewStyle = {
  backgroundColor : color.palette.white,
  borderColor: "#FE8607",
  borderWidth:1,
  width: 300,
  borderRadius : 10,
  margin: 10,


}
const ADD_BUTTON : ViewStyle = {
  margin : 10,


}
const TACHES : ViewStyle = {
  alignItems : 'center',
  borderWidth:1,
  borderColor:"#FE8607",
  borderRadius : 5,
  margin:10,
  flexDirection : 'row',
  justifyContent :'space-between'

}
const data=["hellssso","hellozzzz"]
const shape= {
  title : '',
  author :''
}

export const TacheFrScreen = observer(function TacheFrScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const {tacheStore} =useStores()
  const {taches}= tacheStore
  const state=shape
  const [tassk,setTask]=useState({title : ""})
  const onChangeText= (key , value )=> {
      useState({
        [key]:value
      })
  }
  const AjouterTache =(newTache)=>{
      tacheStore.addTache(newTache)
  }
  const deleteTache = (nvtache)=>{
    tacheStore.removeTache(nvtache)
  }
  
  //tacheStore.addTache({title : "ahled"})
  [...tacheStore.taches,[]]
  useEffect(()=>{
    
    console.log(taches)
    console.log(taches.length)
  })
 
  
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Tasks MST with IGNITE"  />
      <ScrollView>
      <View style={INPUT}>
      <TextInput 
       placeholder='write task'
       
       onChangeText={(value)=>setTask({title : value})}
       />
      </View>
      <View style={ADD_BUTTON}>
        <Button 
        style={{backgroundColor : 'blue'}}
        text="Add Task"
        onPress={()=>AjouterTache(tassk)}
        
        />
      </View>
      <View >
        {
          taches.map((books,i)=>{
            return (
              <View style={TACHES}>
                <Text key={i}>{books.title}</Text>
                <View > 
                  <Button
                  style={{backgroundColor : 'red'}}
                  text="remove Task"
                  onPress={()=>deleteTache(books)}
                  />
                </View>
              </View>
            );
          })
        }

      </View>
      </ScrollView>

    </Screen>
  )
})


