import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const Fooddev = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>January 2022 - November 2022</Text>
      <Text>
        B2B application to assist suppliers in selling their products to
        restaurants
      </Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI for the application</Text>
    <Text>- API integration using Postman and axios</Text>
    <Text>- App feature updates</Text>
    <Text>- Maintain app</Text>
    <Text>- Fix Bugs and Error</Text>
  </View>
);

const Privolive = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>September 2022 - November 2022</Text>
      <Text>Video call streaming service app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI for the application</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using TypeScript</Text>
  </View>
);

const Autopay = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>September 2022 - November 2022</Text>
      <Text>Video call streaming service app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI for the application</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using TypeScript</Text>
  </View>
);

const BahanaSekuritas = () => (
  <View style={{padding: 10}}>
    <View style={{marginBottom: 5}}>
      <Text>September 2022 - November 2022</Text>
      <Text>Video call streaming service app</Text>
    </View>
    <Text>What I do :</Text>
    <Text>- Work with the team, implement UI for the application</Text>
    <Text>- Fix Bugs and Error</Text>
    <Text>- Coded using TypeScript</Text>
  </View>
);
const WorkExp = () => {
  const [DIA, setDIA] = useState('Fooddev');
  const FullWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('assets/educationbg.png')}
      resizeMode={'cover'}
      style={{flex: 1}}>
      <View
        style={{flex: 1.55, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Work Experience</Text>
      </View>
      <View
        style={{
          flex: 9,
          paddingTop: 15,
        }}>
        <ScrollView>
          <View>
            <Text style={styles.DIA}>
              PT. Digital Integrasi Asia{'\n'}
              <Text style={{fontStyle: 'italic'}}>
                (October 2019 - March 2020)
              </Text>
            </Text>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setDIA('Fooddev')}
                style={[
                  styles.tab,
                  DIA == 'Fooddev' ? styles.activeTab : styles.inactiveTab,
                ]}>
                <Text>Fooddev</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDIA('Privolive')}
                style={[
                  styles.tab,
                  DIA == 'Privolive' ? styles.activeTab : styles.inactiveTab,
                ]}>
                <Text>Privolive</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
              {DIA == 'Fooddev' ? <Fooddev /> : <Privolive />}
            </View>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.DIA}>
              PT. Ihsan Solusi Informatika{'\n'}
              <Text style={{fontStyle: 'italic'}}>(March 2020 - May 2021)</Text>
            </Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.DIA}>
              PT. Sanbercode{'\n'}
              <Text style={{fontStyle: 'italic'}}>
                (January 2022 - November 2022)
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default WorkExp;
