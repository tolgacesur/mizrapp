import React from 'react';
import {  View,Image,ScrollView,TouchableHighlight, FlatList, Text } from 'react-native';
import {HttpService} from '../../services/HttpService';

class Category extends React.Component {
    
	constructor(props){
			super(props);
			this.state={
				categories : [],
				reviews : []
			}
	}

	componentWillMount() {
		const userId = '5bc23edf0ffcf001ed8eac73';
		HttpService().get(`https://mizrapp.herokuapp.com/api/users/${userId}`).then(function(res){
			this.setState({
				categories : res.data.categories,
				reviews : res.data.reviews
			});
		}.bind(this));
	}

	_keyExtractor = (item, index) => item._id;

	_renderItem = ({item}) => (
		<TouchableHighlight onPress={() => this.props.navigation.navigate('subcategoryScreen',{subCategories : item.subCategories})}>
			{/* <Image
			style={{width: 400, height: 200}}
			source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
			/> */}
			<Text>{item.name}</Text>
    </TouchableHighlight>
	);

 render() {
    const { navigate } = this.props.navigation;
     return(
      <View style={{}}>
       <FlatList
				data={this.state.categories}
				keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      	/>
      </View>
     )
 }
}

export default Category