import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import {ApiCall} from '../redux/reducers/ApiReducer';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const [key, setKey] = useState('');

  const windowHeight = Dimensions.get('window').height;
  const headerHeight = windowHeight * 0.3;
  const dispatch = useDispatch();

  return (
    <View style={[styles.header, {height: headerHeight}]}>
      <View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>GITHUB FINDER</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#ffffff"
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setKey(text)}
          value={key}
        />
        <Pressable
          onPress={() => dispatch(ApiCall(key))}
          style={({pressed}) => [pressed ? styles.pressed : null]}>
          <AntDesign name="search1" size={26} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#191a4a',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#e8e8e8',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 10,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#474b8a',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    color: '#ffffff',
    width: '85%',
  },
});
