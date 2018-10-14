import React from 'react';
import {  View,StyleSheet,ScrollView,Image,TouchableHighlight } from 'react-native';

class Products extends React.Component {

    constructor(props){
        super(props);
        this.state={
          id:1
        }
    }

    componentWillMount () {

    }

 render() {
    const { navigate } = this.props.navigation;
     return(
         <View>
     <ScrollView>
       <TouchableHighlight onPress={() => navigate('repriceScreen',{id:this.state.id})}>
           <Image
          style={{width: 400, height: 200}}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
        </TouchableHighlight>
    </ScrollView>
         </View>
     )
 }
}

export default Products