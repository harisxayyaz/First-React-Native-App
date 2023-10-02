/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCount(counter - 1);
    } else {
      Alert.alert('cannot go less than 0');
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.2,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontFamily: 'serif',
            fontWeight: 'bold',
          }}>
          Counter App
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={increment}
          style={{
            backgroundColor: 'grey',
            paddingVertical: 20,
            paddingHorizontal: 40,
          }}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{counter}</Text>
        <TouchableOpacity
          onPress={decrement}
          style={{
            backgroundColor: 'grey',
            paddingVertical: 20,
            paddingHorizontal: 40,
          }}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
