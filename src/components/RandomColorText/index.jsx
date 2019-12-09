import React, { useState } from 'react';
import { randomColor } from 'utils/colors';
import { throttle } from 'lodash';

const randomColorThrottled = throttle(randomColor, 200);

/**
 * Applies random color to child's text on mouse enter or touch start.
 * @param {{ children: React.ReactNode, defaultColor: String }} props
 */
export default function RandomColorText({ children, defaultColor = null }) {
  const [color, setColor] = useState(defaultColor);
  const changeColor = () => setColor(randomColorThrottled());

  return (
    <span style={{ color }} onMouseEnter={changeColor} onTouchStart={changeColor}>
      {children}
    </span>
  );
}
