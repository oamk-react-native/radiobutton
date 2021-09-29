import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Radiobutton from './components/Radiobutton';

export default function App() {
  /* State variable for displaying radiobutton value. */
  const [test, setTest] = useState('No radiobutton selection');
  /* Define options for radiobuttos. You may have as many choices as you like. */ 
  const options = [
    {
      label: 'Test 1',
      value: 1
    },
    {
      label: 'Test 2',
      value: 2
    }
  ]

  return (
    <View style={styles.container}>
      {/* Pass options and onPress as props to define radiobuttons and receive selected value. */}
      <Radiobutton 
        options={options} 
        onPress={(value) => {setTest(value)}} 
        style={{backgroundColor: 'red'}}
      />
      <Text>Radiobutton value is </Text>
      <Text>{test}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
