import React from 'react';
import { Text, View } from 'react-native';
import { types, getSnapshot } from "mobx-state-tree"
import { Toggle } from 'react-powerplug';

const ToDo=types.model({
    name:types.optional(types.string,""),
    done : types.optional(types.boolean,false)
}).actions(self=>({
    setName(newName){
        self.name=newName
    },
    toggle(){
        self.done =!self.done
    }
}))
const User=types.model({
    name:types.optional(types.string,'')

})
const RootStore=types.model({
    users: types.map(User),
    todos:types.optional(types.map(ToDo),{})
}).actions(self=>({
    addTodo(id, name){
        self.todos.set(id,ToDo.create({name}))
    }
}))
const store=RootStore.create({
    users:{}
})
store.addTodo(1,"eat a banana")
console.log(store.todos)
function To_do(props) {
    return (
        <View>
            <Text>hellosssssss</Text>
            
        </View>
    );
}

export default To_do;