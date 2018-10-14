import React from 'react'
import {TouchableOpacity,View,Text, AsyncStorage} from 'react-native';
import { createStackNavigator, createDrawerNavigator,DrawerActions } from 'react-navigation'
import Home from './src/components/Category';
import Login from './src/components/Login';
import Products from './src/components/Products';
import Profile from './src/components/Profile';
import RePrice from './src/components/RePrice';
import SinginUp from './src/components/SinginUp';
import SubCategory from './src/components/SubCategory';
import { AuthService } from './src/services/AuthService';
import { Font,Constants } from "expo";

const HomeStack = createStackNavigator({
  categoryScreen:{screen:Home,
    navigationOptions:({navigation}) => ({
      header:null,
      gesturesEnabled:false,
  
  })},
  productsScreen: { screen: Products,
    navigationOptions:({navigation}) => ({
      header:null,
      gesturesEnabled:false,
  
  })},
  repriceScreen: { screen: RePrice,
    navigationOptions:({navigation}) => ({
      header:null,
      gesturesEnabled:false,
  
  })},
  subcategoryScreen: { screen: SubCategory ,
    navigationOptions:({navigation}) => ({
      header:null,
      gesturesEnabled:false,
  
  })},
})

const DrawerStack = createDrawerNavigator({
    Home: { screen: HomeStack },
    Profile: { screen: Profile },
  })
  
  const DrawerNavigation = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
  }, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'green'},
      headerLeft: <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer()) }><Text style={{marginLeft:5}}>Menu</Text></TouchableOpacity>
    })
  })

  // const LoginStack = createStackNavigator({
  //   loginScreen: { screen: Login },
  //   signupScreen: { screen: SinginUp },
  // }, {
  //   headerMode: 'float',
  //   navigationOptions: {
  //     headerStyle: {backgroundColor: 'red'}
  //   }
  // })
  
  const AppNavigation = () => (
    <DrawerNavigation/>
  );

  function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Expo.Asset.fromModule(image).downloadAsync();
      }
    });
  }
  export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        appIsReady:false,
        isAuth:false
      };
    }
  async componentWillMount() {
    await Font.loadAsync({
      'tipopepel': require("./assets/fonts/tipopepel.ttf"),
      'Arial': require("./assets/fonts/Arial.ttf")      
    });
      this._loadAssetsAsync();
      this.setState(
				{
					appIsReady: true,
					isAuth : AuthService().isAuth()
				});
	}
	async _loadAssetsAsync() {
		const imageAssets = cacheImages([
			require('./assets/icon.png')
		]);
		await Promise.all([
				...imageAssets
		]);
  }
  register(){
			console.log("logging in... ");
			this.setState({
				isAuth: true
			});
    }
 
    render() {  
      return (
          <View style={{flex:1}}>
          {this.state.appIsReady ?(
            this.state.isAuth ?(
              <AppNavigation style={{backgroundColor:'#F4F4F4'}}/>            
             ):<Login register={this.register.bind(this)}/>):null}   
          </View>
      );
    }
  }