import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

PushNotification.configure({
  onRegister: async function (token) {
    console.log('TOKEN:', token);
    await AsyncStorage.setItem('deviceId', token.token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    //notification.finish('finished!');
  },
});

AppRegistry.registerComponent(appName, () => App);
