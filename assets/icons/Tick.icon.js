import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TickIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 8l-8.25 7.714L6 12.208"
        stroke="#FFDF6B"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </Svg>
  );
}

export default React.memo(TickIcon);
