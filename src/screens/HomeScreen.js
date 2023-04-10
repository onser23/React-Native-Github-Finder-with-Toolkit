import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ApiCall} from '../redux/reducers/ApiReducer';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [key, setKey] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.apireducer.data.items);
  // console.log('DADADA', data);
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const headerHeight = windowHeight * 0.3;

  return (
    <View style={styles.main}>
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
      <View style={styles.container}>
        <FlatList
          initialNumToRender={15}
          data={data}
          style={{marginBottom: 10}}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                navigation.navigate('ÖLKƏ HAQQINDA', {country: item});
              }}
              style={({pressed}) => [pressed ? styles.pressed : null]}>
              <View style={styles.countriesContainer}>
                <View style={styles.flagContainer}>
                  <Image
                    resizeMode="stretch"
                    style={styles.flag}
                    source={{
                      uri: item.avatar_url,
                    }}
                  />
                </View>
                <View style={styles.nameAndArrow}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.login}</Text>
                  </View>
                  <View style={styles.arrowContainer}>
                    <AntDesign name="right" size={23} color="#000" />
                  </View>
                </View>
              </View>
              <View style={styles.countrylLine}></View>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {flex: 1},
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
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 30,
  },
  pressed: {
    opacity: 0.7,
  },
  countriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  flagContainer: {},
  flag: {
    width: 30,
    height: 30,
    marginRight: '8%',
  },
  nameAndArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  nameContainer: {
    width: '85%',
  },
  name: {
    fontSize: 21,
    color: '#595959',
  },
  arrowContainer: {},
  countrylLine: {
    borderBottomWidth: 3,
    borderBottomColor: '#e5e5e5',
    marginVertical: 5,
  },
});
