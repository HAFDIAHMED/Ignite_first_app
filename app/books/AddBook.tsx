import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Checkbox } from '../components';

function AddBook(props) {
    return (
        <View style={styles.container}> 
         <View style={styles.input_style}>
         <TextInput 
          placeholder="title"
          />
         </View>
          
         <View style={styles.input_style}>
         <TextInput 
          placeholder="author"
          />
         </View>
         <View>
         </View>

        </View>
        
    );
}

export default AddBook;
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        
        
    },
    input_style : {
        borderColor : 'gray',
        borderWidth : 1,
        width : 350,
        margin : 10,
        borderRadius : 10,
        backgroundColor : '#D6C2BE'

    }
})