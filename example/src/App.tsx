import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { TruncatedTextView } from 'react-native-truncated-text-view';
import { DATA } from './DUMMY_TEXT';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Truncated Text View</Text>
      <ScrollView>
        <TruncatedTextView
          text={DATA}
          style={styles.textStyle}
          tailTextStyle={styles.tailText}
          numberOfLines={5}
          enableShowLess={true}
          containerStyle={styles.textContainer}
        />
        <TruncatedTextView
          text={DATA}
          style={styles.textStyle}
          tailTextStyle={styles.tailText}
          numberOfLines={5}
          enableShowLess={false}
          containerStyle={styles.textContainer}
        />
        <TruncatedTextView
          text={DATA}
          style={styles.textStyle}
          tailTextStyle={styles.tailText}
          numberOfLines={5}
          enableShowLess={true}
          containerStyle={styles.textContainer}
          enableOnPressToggle={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffee',
  },

  title: {
    fontWeight: '500',
    fontSize: 25,
  },

  textContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
  },

  textStyle: {
    fontWeight: '500',
    color: 'gray',
    lineHeight: 27,
    letterSpacing: 0.7,
  },
  tailText: {
    color: 'gray',
  },
});
