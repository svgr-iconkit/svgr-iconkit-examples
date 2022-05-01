import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontawesomeIcon from "@svgr-iconkit/fontawesome"
import FeatherIcon from '@svgr-iconkit/feather';
import { Rating } from './Rating';
import { useState } from 'react';
export default function App() {

  const [value, setValue] = useState(2);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <FontawesomeIcon style={styles.iconContent} name="heart" size={24} color="#33cc66" />
      <FeatherIcon  style={styles.iconContent} name="heart" size={24} color="red" />

      <Rating value={value} onItemClick={setValue} />
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
  iconContent: {
    width: 48,
    height: 48
  }
});
