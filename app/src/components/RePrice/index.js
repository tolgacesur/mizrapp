import React from 'react';
import {  View,Image,Text} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
class RePrice extends React.Component {

 render() {
     return(
    <View>
        <View style={{paddingLeft:'50%'}}>
            <Text style={{fontFamily:'tipopepel'}}>Ürün Adı</Text>
            <Text>Apple</Text>
        </View>
        <View>
            <Image
            style={{width:'97%', height: 200,position:'absolute',flex: 1,margin:5}}
            source={{uri: 'https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625__340.jpg'}}
            />
            <Image
            style={{width: 80, height: 40, position:'relative',marginTop:160,marginLeft:5}}
            source={{uri: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0011/0212/brand.gif?itok=K_43GRzA'}}
            />  
        </View>
        <View style={{paddingLeft:'50%',marginTop:5}}>
            <Text >Açıklama</Text>
            <Text>16 Gb</Text>
        </View>
        <View style={{paddingLeft:'50%',marginTop:5}}>
            <Text>Fiyat</Text>
            <Text style={{flexDirection: 'row' }}>50₺</Text>
        </View>
    </View>
     )
 }
}

export default RePrice