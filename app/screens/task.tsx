import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components';

function Task(props) {
    const data=[
        'hello',
        'good morning',
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TASK'S TODAY</Text>
            <View style={styles.input_tasks}>
                <View style={styles.text_input}>
                <TextInput 
                placeholder="add task"
                />
                </View>
                <View >
                    <Button
                    text="add"
                    onPress={()=>{console.log("task added")}}
                    />

                </View>
            </View>
            <View style={styles.tasks_display}>

            </View>

        </View>
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
    tasks_display :{

    }
    
    
})