import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CancelIcon(props) {
  return (
    <Svg
      width={25}
      height={26}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.405 19.826L5.778 5.739m0 14.087L19.406 5.739"
        stroke="#20222F"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default React.memo(CancelIcon);
