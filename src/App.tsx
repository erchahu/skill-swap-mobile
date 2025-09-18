import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme } from './theme';
import { I18nextProvider } from 'react-i18next'
import i18n from './locale';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import GetStartedScreen from './screens/Auth/GetStartedScreen';
import React from 'react';

function App() {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <StyledThemeProvider theme={lightTheme}>
          <GetStartedScreen />
        </StyledThemeProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}

export default App;
