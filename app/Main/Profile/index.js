import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDispatch} from 'react-redux';

const Profile = () => {
  return (
    <ImageBackground
      source={require('assets/bg.png')}
      resizeMode={'cover'}
      style={styles.imageBg}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1 / 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View
          style={{
            flex: 5 / 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode={'contain'}
            source={require('@assets/images/photo.jpg')}
            style={styles.photo}
          />
        </View>
        <View
          style={{
            flex: 3.5 / 10,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Text style={styles.profile}>Marital status: Single</Text>
          <Text style={styles.profile}>Nationality: Indonesia</Text>
          <Text style={styles.profile}>Gender: Male</Text>
          <Text style={styles.profile}>Place of Birth: Malang</Text>
          <Text style={styles.profile}>Date of Birth: February 10th, 1997</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Profile;
