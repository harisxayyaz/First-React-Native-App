/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

function task2() {
  const [getPassword, setPassword] = useState('Enter Password');

  const clear = () => {
    setPassword('Enter Password');
  };
  const one = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '1');
    } else {
      setPassword(getPassword + '1');
    }
  };

  const two = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '2');
    } else {
      setPassword(getPassword + '2');
    }
  };

  const three = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '3');
    } else {
      setPassword(getPassword + '3');
    }
  };

  const four = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '4');
    } else {
      setPassword(getPassword + '4');
    }
  };

  const five = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '5');
    } else {
      setPassword(getPassword + '5');
    }
  };

  const six = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '6');
    } else {
      setPassword(getPassword + '6');
    }
  };

  const seven = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '7');
    } else {
      setPassword(getPassword + '7');
    }
  };

  const eight = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '8');
    } else {
      setPassword(getPassword + '8');
    }
  };

  const nine = () => {
    if (getPassword == 'Enter Password') {
      setPassword('' + '9');
    } else {
      setPassword(getPassword + '9');
    }
  };

  const submit = () => {
    if (getPassword == '62') {
      Alert.alert('Correct Password');
    } else {
      Alert.alert('Invalid Password');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'silver'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.3,
        }}>
        <Text
          style={{
            fontFamily: 'serif',
            fontWeight: 'bold',
            fontSize: 30,
            color: 'black',
          }}>
          Task 2
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              borderWidth: 1,
              borderColor: 'black',
              marginLeft: 70,
              marginRight: 70,
            }}>
            {getPassword}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={one}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={two}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={three}>
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={four}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={five}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={six}>
            <Text>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={seven}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={eight}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={nine}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={clear}
          color={'red'}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submit}
          color={'red'}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 25,
    borderRadius: 10,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: 'dimgrey',
    padding: 25,
    borderRadius: 10,
  },
});
export default task2;
