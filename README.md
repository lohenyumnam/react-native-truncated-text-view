# react-native-truncated-text-view

Add See More in Your Text View easily

## Installation

```sh
npm install react-native-truncated-text-view
```

## Run the Example

```sh
# Get started with the project:

yarn
# Run the example app on iOS:

yarn example ios

# Run the example app on Android:

yarn example android
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TruncatedTextView } from 'react-native-truncated-text-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truncated Text View</Text>
      <TruncatedTextView
        text={DATA}
        style={styles.textStyle}
        tailTextStyle={styles.tailText}
        numberOfLines={2}
        enableShowLess={false}
      />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
