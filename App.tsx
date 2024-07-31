import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text italic bold preset="headingLarge">
        Coffstack
      </Text>
      <Text preset="headingLarge">
        Coffstack
      </Text>
      <Text preset="headingMedium">
        Coffstack
      </Text>
    </SafeAreaView>
  );
}


export default App;
