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
    margin: 15,
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
    top: 3,
    left: 15,
    bottom: 20,
    gap: 20,
    width: 375,
    height: 50,
    paddingLeft: 15,
    backgroundColor: 'rgb(222,222,222)',
    borderRadius: 15
   },
  fixToText: {
    justifyContent: 'space-between',
    margin: 1,
    flexDirection: 'row'
  },
  tableHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  rows: {
    color: 'Black',
    fontSize: 15,
  },
  description: {
    margin: 15,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
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
    alignItems: 'center'
  },
  addTask: {
    alightItems: 'center',
    position: 'absolute',
    marginBottom: '0',
    justifyContent: 'center',
    flex: 1,
    bottom: 35,
    right: 25,
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection:"row",
    margin: 5,
  },
  modalHeader: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  helpButton: {
    padding: 1,
    alignItems: 'center',
    top: 18,
  }
});