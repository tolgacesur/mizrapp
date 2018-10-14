import React from 'react';
import {  View,Image,Text,StyleSheet,TextInput,KeyboardAvoidingView ,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import RadioForm, {} from 'react-native-simple-radio-button';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
var radio_props = [
    {label: 'Evet', value: 1},
    {label: 'Hayır', value: 0 }
  ];

class RePrice extends React.Component {
    constructor(props){
        super(props);
        this.state={
          checked:null,
          value:null,
          stars:null,
          ok:null,
          price:null
        }
    }

    radioChange(a) {
        this.setState({value:a})
    }

    sendToPrice () {

    }
    questions () {
        if(this.state.value==null){
            return (
                <View style={{paddingLeft:'20%',margin:5}}>
                    <Text>Bu ürünü daha önce kullandınız mı? </Text>
                    <RadioForm
                        style={{paddingLeft:'20%'}}
                        radio_props={radio_props}
                        labelHorizontal={false}
                        formHorizontal={true}
                        onPress={(value) => this.radioChange(value)}
                    />
                </View>
            ) 
        }
        else if(this.state.stars==null){
            return (
                <View style={{alignItems:'center'}}>
                    <Stars
                        default={2.5}
                        count={5}
                        update={(val)=> this.setState({stars: val})}
                        half={true}
                        starSize={50}
                        fullStar={require('../../../assets/full.png')}
                        emptyStar={require('../../../assets/emty.png')}
                        halfStar={require('../../../assets/half.png')}
                    />
                </View>
            )
        }
        else if(this.state.ok==null){
            return (
                <View style={{alignItems:'center'}}>
                 <TextInput
                      style={{width:200}}
                 />
                 <TouchableOpacity  onPress={this.sendToPrice()}>
                 <Text>Gönder </Text>
                 </TouchableOpacity>
                </View>
            )
        }
    }
 render() {
     return(
             <KeyboardAvoidingView
        style = {{ flex: 1 }}
        keyboardVerticalOffset = {100}
      behavior="padding"
    >
     <ScrollView>
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
            <Text style={{flexDirection:'row'}}>50₺</Text>
        </View>
        {this.questions()}
        </ScrollView>
        </KeyboardAvoidingView >

     )
 }
}
const styles = StyleSheet.create({
    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
    myEmptyStarStyle: {
      color: 'white',
    }
  });
export default RePrice