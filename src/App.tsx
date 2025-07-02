/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import { NewAppScreen } from '@react-native/new-app-screen';
import React from 'react';
import { View, Text, StyleSheet, useColorScheme, StatusBar } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Hello, React Native Web & Mobile!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;

