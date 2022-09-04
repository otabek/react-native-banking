import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PenIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.104 4.669a2.283 2.283 0 013.227 3.227L8.438 18.79 4 20l1.21-4.438L16.104 4.669z"
        stroke="#20222F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </Svg>
  );
}

export default React.memo(PenIcon);
