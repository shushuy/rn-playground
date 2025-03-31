import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const safePadding = '5%';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <ScrollView
          style={backgroundStyle}>

          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              paddingHorizontal: safePadding,
              paddingBottom: safePadding,
            }}>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
            <Text>{'TEMP'}</Text>
          </View>
        </ScrollView>

      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
