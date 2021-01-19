import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Radiobutton from './components/Radiobutton';

export default function App() {

  const [test, setTest] = useState('no selection');

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
      <Radiobutton 
        style={{backgroundColor: 'red'}}
        onPress={(value) => {setTest(value)}} 
        options={options}
      />
      <View style={styles.field}>
        <Text>{test}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  field: {
    padding: 10,
  }
});
