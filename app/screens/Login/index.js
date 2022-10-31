import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <>
      <Image
        source={require('assets/images/loginbg.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome to My CV!!</Text>
          <TextInput
            value={value}
            onChangeText={text => onChangeText(text)}
            style={styles.textInput}
            placeholder={'Visitor Name'}
          />
          <TouchableOpacity style={styles.login}>
            <Text style={styles.start}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
