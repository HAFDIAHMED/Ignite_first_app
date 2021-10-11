import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function MAKE(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getPerson = async () => {
       try {
        const response = await fetch('http://192.168.0.106:3000/person');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getPerson();
      console.log('heloo')
    }, []);
  
    function list_person(){
        return (
            <View style={{ flex: 1, padding: 24 }}>
            <Text >FETCH DATA from "http://192.168.0.106:3000/person"</Text>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.name}, {item.job}</Text>
              )}
            />
          )}
        </View>
        )

    }
    return (
      list_person()
    );
}
