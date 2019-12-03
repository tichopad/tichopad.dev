import React, { useState } from 'react';
import { randomColor } from 'utils/colors';
import { throttle } from 'lodash';

const randomColorThrottled = throttle(randomColor, 200);

export default function RandomColorText({ children, defaultColor = null }) {
  const [color, setColor] = useState(defaultColor);
  const handleMouseEnter = () => setColor(randomColorThrottled());

  return (
    <span style={{ color }} onMouseEnter={handleMouseEnter}>
      {children}
    </span>
  );
}
