import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {API_URL} from '../Support/API_URL'

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        keyExtractor={({}, index) => index.toString()}
        data={Array.from(Array(10), () => `${API_URL}`)}
        renderItem={({item}) => (
          <Button
            title={item}
            onPress={() => navigation.navigate('Change', {name: item})}
          />
        )}
      />
    </View>
  );
};

export default Home;