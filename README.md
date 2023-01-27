# react-native-truncated-text-view

Add See More in Your Text View easily

<kbd>
  <img src="https://github.com/lohenyumnam/react-native-truncated-text-view/blob/74cc2c46c0cea284211743399a012540dd7aa823/demo/assets/preview.ios.gif?raw=true" width="350">
</kbd>

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

## API

| Prop                  | Type                 | Required | Default                | Description                                     |
| --------------------- | -------------------- | -------- | ---------------------- | ----------------------------------------------- |
| text                  | string               | No       |                        | The text to be displayed                        |
| style                 | StyleProp<TextStyle> | No       |                        | Style for the text                              |
| tailTextStyle         | StyleProp<TextStyle> | No       |                        | Style for the tail text                         |
| containerStyle        | StyleProp<ViewStyle> | No       |                        | Style for the container                         |
| lineHeight            | number               | No       | 21                     | The line height for the text                    |
| numberOfLines         | number               | No       | DEFAULT_NUMBER_OF_LINE | The number of lines to be displayed             |
| enableShowLess        | boolean              | No       | true                   | Whether to enable the show less functionality   |
| collapsedText         | string               | No       | .. See more            | The collapsed text to be displayed              |
| expandedText          | string               | No       | .. See Less            | The expanded text to be displayed               |
| enableOnPressToggle   | boolean              | No       | true                   | Whether to enable on press toggle functionality |
| enableLayoutAnimation | boolean              | No       | true                   | Whether to enable layout animation              |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

react-native-truncated-text-view is MIT [LICENSE](LICENSE)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
