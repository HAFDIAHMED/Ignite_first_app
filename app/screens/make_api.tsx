import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function MAKE(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getPerson = async () => {
       try {
        const response = await fetch('http://localhost:8000');
        const json = await response.json();
       
        setData(json.person);
        console.log(json.person)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getPerson()
      
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.name}, {item.age}</Text>
            )}
          />
        )}
      </View>
    );
}
