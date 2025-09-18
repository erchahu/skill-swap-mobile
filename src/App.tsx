import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme } from './theme';
import './locale';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import GetStartedScreen from './screens/Auth/GetStartedScreen';
import React from 'react';

function App() {
  return (
    <SafeAreaProvider>
        <StyledThemeProvider theme={lightTheme}>
          <GetStartedScreen />
        </StyledThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
