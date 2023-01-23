import React, { useRef, useState, useCallback, useMemo } from 'react';
import { LayoutRectangle, Platform, TextLayoutLine } from 'react-native';

type Params = {
  numberOfLine: number;
};

export const useTruncatedLogic = (params: Params) => {
  const { numberOfLine } = params;

  const [_isExpanded, setIsExpanded] = useState(false);
  const _textViewContainerLayout = useRef<LayoutRectangle | null>(null);
  const [_seeMoreContainerLayout, setSeeMoreContainerLayout] =
    useState<LayoutRectangle | null>();

  const [textLines, setTextLines] = useState<TextLayoutLine[]>([]);

  const toggleShowFullText = useCallback(
    () => setIsExpanded((prevState) => !prevState),
    []
  );

  const setTextContainerLayout = useCallback((layout: LayoutRectangle) => {
    _textViewContainerLayout.current = layout;
  }, []);

  const lastLine = useMemo(() => {
    const _lines = textLines;
    const _numberOfLines = textLines.length;
    const whichLine = Platform.select({
      ios: _numberOfLines - 1,
      android: _isExpanded ? _numberOfLines - 1 : numberOfLine,
      default: _numberOfLines - 1,
    });
    return _lines[whichLine];
  }, [_isExpanded, numberOfLine, textLines]);

  const _tailPosition = useMemo(() => {
    const _seeMoreWidth = _seeMoreContainerLayout?.width ?? 0;
    const _lastLineWidth = lastLine?.width ?? 0;
    const _containerLayoutWidth = _textViewContainerLayout.current?.width;

    const _totalWidth = _lastLineWidth + _seeMoreWidth;

    let tailPosition = _lastLineWidth;
    if (_containerLayoutWidth && _totalWidth > _containerLayoutWidth) {
      tailPosition = _containerLayoutWidth - _seeMoreWidth;
    }

    return tailPosition;
  }, [_seeMoreContainerLayout?.width, lastLine?.width]);

  const _setSeeMoreContainerLayout = React.useCallback(
    (layout: LayoutRectangle) => {
      setSeeMoreContainerLayout(layout);
    },
    []
  );

  return {
    isExpanded: _isExpanded,
    toggleShowFullText: toggleShowFullText,
    textViewContainerLayout: _textViewContainerLayout,
    setTextContainerLayout,
    setSeeMoreContainerLayout: _setSeeMoreContainerLayout,
    textLines,
    setTextLines,
    seeMorePosition: _tailPosition,
  };
};
