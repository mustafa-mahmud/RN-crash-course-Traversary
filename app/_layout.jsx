import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import './../global.css';
import { useEffect } from 'react';
import { colors } from '../constent/Colors';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    roboBold: require('./../assets/fonts/RobotoMono-Bold.ttf'),
    roboMedium: require('./../assets/fonts/RobotoMono-Medium.ttf'),
    roboRegular: require('./../assets/fonts/RobotoMono-Regular.ttf'),
    roboThin: require('./../assets/fonts/RobotoMono-Thin.ttf'),
    underdog: require('./../assets/fonts/Underdog-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);
  ////////////////////////////////////////////////
  return (
    <>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.Primary,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          contentStyle: {
            padding: 10,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontFamily: 'underdog',
            },
          }}
        />
        <Stack.Screen
          name="notes"
          options={{
            title: 'Notes',
            headerTitleStyle: {
              fontFamily: 'underdog',
            },
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
