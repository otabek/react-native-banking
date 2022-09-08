import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

function PinIcon(props) {
  return (
    <Svg
      width={40}
      height={58}
      viewBox="0 0 40 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 0C8.943 0 0 9.077 0 20.3c0 15.225 20 32.263 20 32.263S40 35.525 40 20.3C40 9.077 31.057 0 20 0z"
        fill="#FFDF6B"
      />
      <Ellipse cx={20} cy={20.4706} rx={6.66667} ry={6.82353} fill="#fff" />
    </Svg>
  );
}

export default React.memo(PinIcon);
