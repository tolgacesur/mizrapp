import React from 'react';
import {  View,StyleSheet,ScrollView,Image, TouchableHighlight} from 'react-native';

class SubCategory extends React.Component {

    constructor(props){
        super(props);
        this.state={
          url:null
        }
    }

    componentWillMount () {
        console.log(this.props)
    }

 render() {
    const { navigate } = this.props.navigation;
     return(
         <View>
        <ScrollView>
        <TouchableHighlight onPress={() => navigate('productsScreen',{id:this.state.id})}>
           <Image

          style={styles.circle}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
        </TouchableHighlight>
           <Image
          style={styles.circle}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
           <Image
          style={styles.circle}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
    </ScrollView>
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