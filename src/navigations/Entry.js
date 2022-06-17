import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as navigatorDefaultTheme,
  DarkTheme as navigatorDarkTheme,
  useTheme,
} from '@react-navigation/native';

import MainBottomTab from './MainBottomTab';

export default function Entry() {
  return (
    // <View style={styles.main}>
    <NavigationContainer>
      <MainBottomTab />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
