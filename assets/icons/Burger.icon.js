import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BurgerIcon(props) {
  return (
    <Svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.025 23h24.15M4.025 9h24.15M4.025 16h24.15"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default React.memo(BurgerIcon);
