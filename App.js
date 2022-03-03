import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import PushNotification from 'react-native-push-notification';
import Clipboard from '@react-native-clipboard/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: () => Node = () => {
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  useEffect(() => {
    createChannels();
    getDeviceID();
  }, []);

  const [deviceId, setDeviceId] = useState('');
  const getDeviceID = async () => {
    setDeviceId(await AsyncStorage.getItem('deviceId'));
  };

  return (
    <View>
      <Text>Device ID:</Text>
      <TouchableOpacity onPress={() => Clipboard.setString(deviceId)}>
        <View>
          <Text>{deviceId}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
