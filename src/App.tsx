import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme } from './theme';
import { ThemeContext } from 'styled-components'

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useContext } from 'react';
import GetStartedScreen from './screens/Auth/GetStartedScreen';

function App() {
  const context = useContext(ThemeContext);
  return (
    <SafeAreaProvider>
      <StyledThemeProvider theme={lightTheme}>
        <GetStartedScreen />
      </StyledThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
