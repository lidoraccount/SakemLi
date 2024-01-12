import {StyleSheet} from 'react-native';
import React from 'react';
import WebViewComponent from 'react-native-webview';

export const WebView = React.memo(
  ({onMessageFromWebview, $webView, webUrl, style}) => {
    return (
      <WebViewComponent
        style={{...styles.webViewContainer, ...style}}
        originWhitelist={['*']}
        ref={$webView}
        onMessage={onMessageFromWebview}
        source={{
          uri: webUrl,
        }}
        javaScriptCanOpenWindowsAutomatically={true}
        allowUniversalAccessFromFileURLs={true}
        mixedContentMode={'always'}
        startInLoadingState={true}
      />
    );
  },
);

const styles = StyleSheet.create({
  webViewContainer: {
    backgroundColor: 'white',
  },
});
