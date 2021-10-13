import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import SwipeButton from 'rn-swipe-button';

const books=[{
    "title":"hello",
    "author":"authior hello",
    "read" : true,
},]
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
         <SwipeButton
         disabled={false}
         height={40}
         width={100}
         title="read"
         railFillBackgroundColor="#e688a1" //(Optional)
         railFillBorderColor="#e688ff" //(Optional)
         thumbIconBackgroundColor="#ed9a73" //(Optional)
         thumbIconBorderColor="#ed9aff" //(Optional)
         railBackgroundColor="#bbeaa6" //(Optional)
         railBorderColor="#bbeaff" //(Optional)
         onSwipeSuccess={() => {
            Alert.alert('Submitted Successfully!');
          }}
         />
         <View>
             {
                 books.map((books,i)=>{
                     return (
                         <View  style={styles.bookView}key={i}>
                        <Text key={i}>Title : {books.title}</Text>
                        <Text>Author :{books.author}</Text>
                        <Text>Read : {books.read}</Text>
                        </View>

                     )
                   

                 })

             }
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
        backgroundColor : '#C5C5C5'

    },
    bookView : {
        borderWidth : 1,
        width : 300,
        borderRadius : 5,
    }
})

function alert(arg0: string) {
    throw new Error('Function not implemented.');
}
