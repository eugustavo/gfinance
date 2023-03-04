import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
