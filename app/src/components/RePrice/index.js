import React from 'react';
import {  View,Image,Text,StyleSheet,TextInput,KeyboardAvoidingView ,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import RadioForm, {} from 'react-native-simple-radio-button';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { HttpService } from '../../services/HttpService';
var radio_props = [
    {label: 'Evet', value: 1},
    {label: 'Hayır', value: 0 }
  ];

class RePrice extends React.Component {
    constructor(props){
        super(props);
        this.state={
          value:null,
          stars:null,
          ok:null,
					price:null,
					product : null
        }
    }

    radioChange(a) {
        this.setState({value:a})
    }

    sendToPrice () {
			let review = {
				product : this.state.product._id,
				isUsed : this.state.value,
				rank : this.state.stars,
				offer : this.state.price,
				user : '5bc23edf0ffcf001ed8eac73'
			}
			console.log(review)
			HttpService().post('http://localhost/api/products/review', review).then(() => {
				this.props.navigation.navigate('categoryScreen');
			})
		}
		
		componentWillMount() {
			this.setState({
				product : this.props.navigation.state.params.product
			});
		}

    questions () {
        if(this.state.value==null){
            return (
                <View style={{paddingLeft:'20%',margin:5}}>
                    <Text style={{fontSize:15, color:'#7FDF60'}}>Bu ürünü daha önce kullandınız mı? </Text>
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
								<Text style={{fontSize:15, color:'#7FDF60'}} >Minimum Fiyat </Text>
                 <TextInput value={this.state.price}
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
        <View style={{alignItems : 'center'}}>
            <Text style={{fontFamily:'tipopepel',fontSize:15, color:'#7FDF60'}}>Ürün Adı</Text>
            <Text>{this.state.product.name}</Text>
        </View>
        <View>
            <Image
            style={{width:'97%', height: 200,position:'absolute',flex: 1,margin:5}}
            source={{uri: 'http://localhost/api/images/' + this.state.product._id + '.' + this.state.product.type}}
            />
            <Image
            style={{width: 80, height: 40, position:'relative',marginTop:160,marginLeft:5}}
            source={{uri: 'http://localhost/api/images/' + this.state.product.company._id + '.' + this.state.product.company.type}}
            />  
        </View>
        <View style={{alignItems : 'center',marginTop:5}}>
            <Text style={{fontFamily:'tipopepel',fontSize:15, color:'#7FDF60'}} >Açıklama</Text>
            <Text>{this.state.product.desc}</Text>
        </View>
        <View style={{alignItems : 'center',marginTop:5}}>
            <Text style={{fontFamily:'tipopepel',fontSize:15, color:'#7FDF60'}}>Fiyat</Text>
            <Text style={{fontFamily:'tipopepel',fontSize:15, color:'#7FDF60'}} style={{flexDirection:'row'}}>{this.state.product.price}₺</Text>
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