import React from 'react';
import {  View,Image,ScrollView,TouchableHighlight } from 'react-native';
import SubCategory from '../SubCategory';

class Category extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
          
        }
    }

    componentWillMount () {
      
    }
    SubCategoty = () => {
        
    }
 render() {
    const { navigate } = this.props.navigation;
     return(
        <View style={{}}>
       <ScrollView>
       <TouchableHighlight onPress={() => navigate('subcategoryScreen')}>
           <Image
          style={{width: 400, height: 200}}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
        </TouchableHighlight>
           <Image
          style={{width: 400, height: 200}}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
           <Image
          style={{width: 400, height: 200}}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
    </ScrollView>
         </View>
     )
 }
}

export default Category