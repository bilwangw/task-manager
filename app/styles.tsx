import {
  ScrollView,
  StyleSheet,
  FlexAlignType,
  FlexStyle,
} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 1,
    justifyContent: 'center'
  },
  header: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
  },
  subheader: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
    left: 15,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 1,
    left: 15,
    right: 15,
  }
});