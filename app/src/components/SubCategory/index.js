import React from 'react';
import {  View,StyleSheet,ScrollView,Image, TouchableHighlight, FlatList, Text} from 'react-native';

class SubCategory extends React.Component {

	constructor(props){
			super(props);
			this.state={
				url:null,
				subCategories : []
			}
	}

	componentWillMount() {
		this.setState({
			subCategories : this.props.navigation.state.params.subCategories
		})
	}

	_keyExtractor = (item, index) => item._id;

	_renderItem = ({item}) => (
		<TouchableHighlight onPress={() => this.props.navigation.navigate('productsScreen',{subCategoryId : item._id})}>
			{/* <Image

          style={styles.circle}
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
				data={this.state.subCategories}
				keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      	/>
      </View>
     )
 }
}

export default SubCategory
const styles = StyleSheet.create({
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2
    }
  });