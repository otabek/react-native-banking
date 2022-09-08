import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CopyIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 16H3V3h13v3M9 9h13v13H9V9z"
        stroke="#20222F"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default React.memo(CopyIcon);
