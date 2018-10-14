import React, {Component} from 'react';
import {Text, View,Spinner ,StyleSheet,StatusBar,TouchableOpacity,Image,ScrollView, KeyboardAvoidingView,AsyncStorage } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            error:'',
            isLoading:false
        }
    }
    loadingOrNot(){
        if(this.state.isLoading){
            return (
                <Spinner />
            )
        }
        return (
            <Text style={styles.buttonText}>Giriş</Text>
        )
    }
    loginReq(){
        this.setState({error:'',isLoading:true})
        this.props.register();
    }
    render() {
        return(
            <KeyboardAvoidingView
            style = {{ flex: 1 }}
            keyboardVerticalOffset = {50}
            enabled
            behavior="padding"
        >
        
           <StatusBar barStyle="light-content"/>
           <View style={styles.container}>
           {/* <ScrollView> */}
           <Image
           style={{marginLeft:75}}
            source={require('../../../assets/icon.png')}
            />
            <Sae
                returnKeyType="next"
                label={'Kullanıcı adı'}
                iconClass={FontAwesomeIcon}
                iconName={'user-o'}
                iconColor={'#7FDF60'}
                autoCapitalize={'none'}
                autoCorrect={false}
                labelStyle={{ color: '#7FDF60' }}
                inputStyle={{ color: '#7FDF60' }}
                onSubmitEditing={()=> this.passwordInput.focus()}
                onChangeText={(text) => this.setState({username:text})}
                value={this.state.username}
          />
          <Sae
                returnKeyType="go"
                secureTextEntry
                label={'Parola'}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={'#7FDF60'}
                // TextInput props
                autoCapitalize={'none'}
                autoCorrect={false}
                labelStyle={{ color: '#7FDF60' }}
                inputStyle={{ color: '#7FDF60' }}
                ref={(input) => this.passwordInput = input}
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
        />
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.errorStyle}>
                {this.state.error}
            </Text>
        </View>

        <TouchableOpacity style={styles.buttonText} onPress={this.loginReq.bind(this)}>
            {this.loadingOrNot()}
        </TouchableOpacity>
    
        {/* </ScrollView> */}
        </View>
        </KeyboardAvoidingView>

        ) 
    }
}
export default Login
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    buttonText:{
        paddingTop:5,
        color:'#7FDF60',
        textAlign:'center',
        backgroundColor:'transparent'
    }
  });