import { iteratorSymbol } from 'mobx/lib/internal';
import React, { useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { Button } from '../components';

function Task(props) {
    const data=[
        'hello',
        'good morning',
    ]
    const [tache,setTache]=useState()
    const [taches,setTaches]=useState([])
    const remove_tache=(index)=>{
        let taches_copies=[...taches];
        taches_copies.splice(index,1);
        setTaches(taches_copies);


    }
    useEffect(()=>{
        //console.log(taches)
    })

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> TODAY'S TASKS</Text>
            <View style={styles.input_tasks}>
                <View style={styles.text_input}>
                <TextInput 
                placeholder="add task"
                onChangeText={val=>setTache(val)}
                />
                </View>
                <View >
                    <Button
                    text="add"
                    onPress={()=>setTaches([...taches,tache])}
                    style={{backgroundColor:'blue'}}
                    />

                </View>
            </View>
            <View >
                {
                    taches.map((todos,i)=>{
                        return (
                            <TouchableOpacity onPress={()=>remove_tache(i)}  >

                            <View style={styles.task_container}>
                                <Text key={i}>{todos}</Text>
                                <View>
                                <Button
                                text='remove'
                                style={{backgroundColor:'red'}}
                                onPress={()=>remove_tache(i)}
                                />
                                </View>
                                </View>
                                </TouchableOpacity >
                        )
                    }
                    )
                }

            </View>

        </View>
        </ScrollView>
    );
}

export default Task;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding: 100,

    },
    title: {
        fontWeight:'bold',
        fontSize : 20,


    },
    input_tasks : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingVertical : 20,

        
    },
    text_input : {
        width: 250,
        borderWidth:1,
        borderColor : 'grey',
        borderRadius: 10,

    },
    task_container :{
        borderWidth:1,
        borderRadius : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding: 15,
        marginBottom : 20,
        alignItems : 'center',
        backgroundColor :'#FFF',
        width:300,





    }
    
    
})