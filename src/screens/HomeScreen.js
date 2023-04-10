import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '../Components/Header';
import Container from '../Components/Container';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Header />
      <Container />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {flex: 1},
});
