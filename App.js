import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNav from './src/Navigation/StackNav';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StackNav />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
