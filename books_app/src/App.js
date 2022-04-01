import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './config/api/store';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import NoInternet from './components/NoInternet';
import Root from './config/router';

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
  }, [connection]);

  return (
    <Provider store={store}>{netStatus ? <Root /> : <NoInternet />}</Provider>
  );
};

export default App;
