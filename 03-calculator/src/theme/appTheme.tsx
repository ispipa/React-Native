import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  result: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResult: {
    fontSize: 30,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    color: 'white',
    fontWeight: '600',
  },
});
