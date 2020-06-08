import React from 'react';
import Center from '../Support/Helpers/Center';
import {Avatar} from 'react-native-elements';
import {View, Image, Button, FlatList} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux'


const Profile = ({navigation}) => {
  return (
    <Center>
        <View>
            <Image 
            source={this.props.image}
            style={{width=400,height:400,borderRadius:400/2}} />
            {this.props.id}
        </View>
    </Center>
    
  );
};

const mapStateToProps = (state, ) => {
    return{
        image: state.image.name,
        id: state.profile.name
    }
} 

export default connect(mapStateToProps)(Profile);