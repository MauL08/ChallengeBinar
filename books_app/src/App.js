import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import Router from './config/router';
import NoInternet from './components/NoInternet';

const App = () => {
  const [netStatus, setNetStatus] = useState(true);

  const connection = NetInfo.fetch().then(state => {
    return state.isConnected;
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    connection.then(res => {
      setNetStatus(res);
    });
  }, [connection, netStatus]);

  return (
    <NavigationContainer>
      {netStatus ? <Router /> : <NoInternet />}
    </NavigationContainer>
  );
};

export default App;
