import type { StyleProp, TextStyle, TextProps, ViewStyle } from 'react-native';

export type TruncatedTextViewProps = {
  /**
   * The text to be displayed
   */
  text?: string;

  /**
   * Style for the text
   */
  style?: StyleProp<TextStyle>;

  /**
   * Style for the tail text
   */
  tailTextStyle?: StyleProp<TextStyle>;

  /**
   * Style for the container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The line height for the text, default value is 21
   */
  lineHeight?: number;

  /**
   * The number of lines to be displayed, default value is 2
   */
  numberOfLines?: number;

  /**
   * Whether to enable the show less functionality, default value is true
   */
  enableShowLess?: boolean;

  /**
   * Whether to enable the See more & show less  functionality, default value is true
   */
  enableTailView?: boolean;

  /**
   * The tail text to be displayed when collapsed, default value is ".. See more"
   */
  collapsedText?: string;

  /**
   * The tail text to be displayed when expanded, default value is ".. See Less"
   */
  expandedText?: string;

  /**
   * Whether to enable on press toggle functionality when tap on the text body, default value is true
   */
  enableOnPressToggle?: boolean;

  /**
   * Whether to enable layout animation, default value is true
   */
  enableLayoutAnimation?: boolean;

  /**
   * Apply text props to root text
   */
  textPropsRoot?: TextProps;

  /**
   * Apply text props to child text
   */
  textPropsChild?: TextProps;

  /**
   * Number of Line Gap between the Tail Text and the main content
   * @default is 1
   */
  numberOfLineGapOnExpanded?: number;

  /**
   * Called when expanded status changed
   */
  onChangeExpandedStatus?: (isExpanded: boolean) => void;
};
