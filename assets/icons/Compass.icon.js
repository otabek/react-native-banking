import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

function CompassIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.912 3.607l9.606-2.254-2.254 9.605a5 5 0 01-3.89 3.762l-9.021 1.798L3.15 7.497a5 5 0 013.761-3.89z"
        stroke="#16171D"
        strokeWidth={1.5}
      />
      <Ellipse
        cx={8.72215}
        cy={9.14846}
        rx={2.29787}
        ry={2.29787}
        transform="rotate(90 8.722 9.148)"
        fill="#16171D"
      />
    </Svg>
  );
}

export default React.memo(CompassIcon);
