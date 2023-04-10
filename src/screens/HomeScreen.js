import React from 'react';
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
import {useSelector} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import Header from '../Components/Header';

const HomeScreen = () => {
  const data = useSelector(state => state.apireducer.data.items);

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Header />
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
