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
  input: {
    top: 5,
    left: 18,
    bottom: 20,
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
  },
  rowsInactive: {
    color: 'Gray',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 1,
    left: 15,
    right: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollView: {
    marginTop: 20,
  },
  buttonStyle: {
    margin: 15,
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection:"row",
    margin: 20,
  },
  modalHeader: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
});