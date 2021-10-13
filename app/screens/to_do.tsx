import React from 'react';
import { Text, View } from 'react-native';
import { types, getSnapshot } from "mobx-state-tree"
import { string } from 'mobx-state-tree/dist/internal';

// declaring the shape of the node with type 'ToDo'
const ToDo=types.model({
    title:types.string
}).actions(self => ({
    setTitle(newTitle){
        self.title=newTitle
    }
})

)
const coffeeToDo=ToDo.create({
    title: 'Get coffee'
})

coffeeToDo.setTitle("hello")
console.log(coffeeToDo.title)
function To_do(props) {
    return (
        <View>
            <Text>hellosssdddsaaaaaaasss</Text>
            
        </View>
    );
}

export default To_do;