import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { Button } from '../components';
import BookStore from './BookStore';
import { Component } from 'react';
import { Observer } from 'mobx-react-lite';
const books=[{
    "title":"hello",
    "author":"authior hello",
    "read" : true,
},]

 const initialstate= {
    title : '',
    author :''
}

export default class AddBook extends Component  {
     
    sttae=initialstate
    onChangeText(key , value){
        this.setState({
            [key]:value
        })
    }
    AjouterBook (){
        BookStore.AddBook(this.state)
        this.setState(initialstate)
    }
    render (){
    const {books_List} =BookStore
    console.log(books_List)
    
    
        return (
            <View style={styles.container}> 
             <View style={styles.input_style}>
             <TextInput 
              placeholder="title"
              onChangeText={value =>this.onChangeText('title', value)}
              />
             </View>
              
             <View style={styles.input_style}>
             <TextInput 
              placeholder="author"
              onChangeText={value =>this.onChangeText('author', value)}
              />
             </View>
            <View style={styles.button_addbook}>
                <Button 
                style={{backgroundColor :"blue"}}
                text="add book"
                onPress={()=>this.AjouterBook()}
    
                />
            </View>
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
}
    

 

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
    },
    button_addbook : {
        margin : 10,
    }
})


