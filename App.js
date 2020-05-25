import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.contaier}>
      <Text>Name: Test Deploy GitHub</Text>
      <Text>Author: Nguyen Trong Nhan</Text>
      <Text>ID: PS10674</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
