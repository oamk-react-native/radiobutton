import React,{useState} from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

export default function Radiobutton({options,onPress,style}) {
  const [value, setValue] = useState(1);

  function handlePress(selected) {
    setValue(selected);
    onPress(selected);
  }

  return (
    <>
      {
        options.map((item) => (
          <View key={item.value} style={[styles.buttonContainer,style]}>
            <Text>{item.label}</Text>
            <Pressable 
              style={styles.circle}
              onPress={() => handlePress(item.value)}
              >
            {  
              value === item.value && <View style={styles.checkedCircle} />
            }
            </Pressable>
          </View>
        ))
      }  
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
   
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#000',
  },
});
