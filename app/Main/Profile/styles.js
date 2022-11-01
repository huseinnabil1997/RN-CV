import {Dimensions, StyleSheet} from 'react-native';

const FullWidth = Dimensions.get('window').width;
const FullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  photo: {
    height: 250,
  },
  profile: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  imageBg: {
    flex: 1,
  },
});
