import React from 'react';
import {WebView} from './src/components/WebView/WebView';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <WebView webUrl={'https://sakemli.netlify.app/'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
