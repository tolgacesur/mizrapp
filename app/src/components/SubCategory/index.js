import React from 'react';
import {  View,StyleSheet,ScrollView,Image } from 'react-native';

class SubCategory extends React.Component {

    componentWillMount () {

    }

 render() {
     return(
         <View>
        <ScrollView>
           <Image
          style={styles.circle}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
        />
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