import React from 'react';
import {Text, Button} from 'react-native';
import Center from '../Support/Helpers/Center';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeDPAction} from '../Reducer/Image';

const Change = ({navigation, route}) => {
  const dispatch = useDispatch();
  const image = useSelector(state => state.ImageReducer.image);
  const handleAdd = () => {
    dispatch(ChangeDPAction([...image, route.params.name]));
    navigation.navigate('Profile');
  };
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button title="SET AS DISPLAY PICTURE?" onPress={handleAdd} />
    </Center>
  );
};

export default Change;