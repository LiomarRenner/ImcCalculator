import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 
// You can import from local files
import IMCApp from './components/IMCApp'
// or any pure javascript modules available in npm


export default function App() {
  return (
    <View>
      <IMCApp/>
    </View>
  );
  }

const styles = StyleSheet.create({
  
});
