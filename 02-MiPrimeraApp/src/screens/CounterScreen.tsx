import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab/Fab';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  /* <Button
            title={'increase'}
            onPress={() => {setCounter(counter + 1)}} accessibilityLabel={'increase + 1'}></Button>
   */
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Counter: {counter}</Text>
          <Fab
            title={'+ 1'}
            position={'br'}
            onPress={() => {setCounter(counter + 1);}}
          />
          <Fab
              title={'- 1'}
              position={'bl'}
              onPress={() => {setCounter(counter - 1);}}
          />
          {/*<TouchableOpacity
              onPress={() => {
                  setCounter(counter + 1)
              }}
              style={styles.fabLocationBR}
          >
              <View style={styles.fab}>
                  <Text style={styles.fabText}>+ 1</Text>
              </View>
          </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {setCounter(counter - 1)}}
              style={styles.fabLocationBL}
              >
              <View style={styles.fab}>
              <Text style={styles.fabText}>- 1</Text>
              </View>
              </TouchableOpacity>*/}
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title:{
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
    },
});
