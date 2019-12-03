import { random } from 'lodash';

export function randomColor() {
  const MAX_COLOR_DECIMAL = 16777215;
  const randomColorDecimal = random(0, MAX_COLOR_DECIMAL, false);
  const randomColorHex = randomColorDecimal.toString(16);

  return `#${randomColorHex}`;
}
