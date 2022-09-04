import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CameraIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 17.344h14.437v-10.5h-3.28l-1.97-1.969H9.25L7.28 6.844H4v10.5z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M11.219 14.063a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default React.memo(CameraIcon);
