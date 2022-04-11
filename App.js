import React from 'react';

import MainNavigator from './src/components/Navigator/Navigator';

import {GlobalProvider} from './src/context/global/global.context'
export default function App() {

  return (
    <GlobalProvider>
      <MainNavigator></MainNavigator>
    </GlobalProvider>
  );
}


