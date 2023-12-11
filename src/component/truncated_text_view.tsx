import React, { useCallback, useMemo } from 'react';
import {
  LayoutAnimation,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextLayoutEventData,
  UIManager,
  View,
} from 'react-native';

import {
  DEFAULT_LINE_HEIGHT,
  DEFAULT_NUMBER_OF_LINE,
} from '../contacts/general';
import { useTruncatedLogic } from '../logic/useTruncatedLogic';

import type { TruncatedTextViewProps } from '../types/types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const TruncatedTextView = (props: TruncatedTextViewProps) => {
  const {
    style,
    tailTextStyle,
    containerStyle,
    textPropsRoot,
    textPropsChild,
  } = props;
  const {
    text: fullText,
    lineHeight = DEFAULT_LINE_HEIGHT,
    numberOfLines = DEFAULT_NUMBER_OF_LINE,
    enableShowLess = true,
    enableOnPressToggle = true,
    enableLayoutAnimation = true,
    collapsedText = '.. See more',
    expandedText = '.. See Less',
    enableTailView = true,
  } = props;

  const {
    isExpanded,
    toggleShowFullText,
    setTextContainerLayout,
    setSeeMoreContainerLayout,
    seeMorePosition,
    textLines,
    setTextLines,
  } = useTruncatedLogic({ numberOfLine: numberOfLines });

  const _numberOfLine = React.useMemo(
    () => textLines.length,
    [textLines.length]
  );

  const _handleTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>
  ) => {
    const { lines } = event.nativeEvent;
    setTextLines(lines);
  };

  const _handlePress = useCallback(() => {
    if (enableLayoutAnimation)
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.easeInEaseOut,
        duration: 250,
      });

    toggleShowFullText();
  }, [enableLayoutAnimation, toggleShowFullText]);

  const _shouldShowTailViewIOS = useMemo(() => {
    const i =
      (textLines[textLines.length - 1]?.text.length ?? 0) >
      (textLines[0]?.text.length ?? 0);

    if (isExpanded) {
      return enableShowLess;
    }

    return i;
  }, [enableShowLess, isExpanded, textLines]);

  const _shouldShowTailViewAndroid = React.useMemo(() => {
    const i = _numberOfLine > numberOfLines;

    if (isExpanded) {
      return enableShowLess;
    }

    return i;
  }, [_numberOfLine, enableShowLess, isExpanded, numberOfLines]);

  const _shouldShowTailView = useMemo(() => {
    if (!enableTailView) return false;

    if (numberOfLines === 0) return false;

    return Platform.select({
      ios: _shouldShowTailViewIOS,
      android: _shouldShowTailViewAndroid,
    });
  }, [
    _shouldShowTailViewAndroid,
    _shouldShowTailViewIOS,
    enableTailView,
    numberOfLines,
  ]);

  // this will hide the text view if the text is empty
  if (!fullText) return <View />;

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        onPress={() => {
          if (enableOnPressToggle) {
            _handlePress();
          }
        }}
      >
        <View
          onLayout={(e) => {
            setTextContainerLayout(e.nativeEvent.layout);
          }}
        >
          <Text
            style={[style, { lineHeight }]}
            numberOfLines={isExpanded ? 0 : numberOfLines}
            onTextLayout={_handleTextLayout}
            {...textPropsRoot}
          >
            {fullText}
            {_shouldShowTailView && '\n'}
          </Text>

          {_shouldShowTailView && (
            <View
              onLayout={(e) => {
                setSeeMoreContainerLayout(e.nativeEvent.layout);
              }}
              style={[
                styles.tailViewContainer,
                {
                  left: seeMorePosition,
                },
              ]}
            >
              <Text
                style={[styles.tailText, tailTextStyle, { lineHeight }]}
                onPress={_handlePress}
                suppressHighlighting={true}
                {...textPropsChild}
              >
                {isExpanded ? expandedText : collapsedText}
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tailViewContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    backgroundColor: 'white',
  },
  tailText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
