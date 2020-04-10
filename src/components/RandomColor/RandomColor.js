import React, { useState, useCallback } from 'react'
import { randomColor } from 'utils/helpers'
import { throttle } from 'lodash'

/**
 * Applies random color to child's text on mouse enter or touch start.
 * @param {{ children: React.ReactNode, defaultColor: String }} props
 */
const RandomColor = ({ children, defaultColor = null }) => {
  const [color, setColor] = useState(defaultColor)
  const randomColorThrottled = useCallback(throttle(randomColor, 300), [])
  const changeColor = () => setColor(randomColorThrottled())
  console.log(color)

  return (
    <span style={{ color }} onMouseEnter={changeColor} onTouchStart={changeColor}>
      {children}
    </span>
  )
}

export default RandomColor
