import React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

const LocationIcon = ({width, height}) => (
  <Svg
    width={width ?? 20}
    height={height ?? 26}
    viewBox="0 0 20 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.156 10c0 7-9.056 15-9.056 15s-9.056-8-9.056-15c0-4.97 4.054-9 9.056-9 5.002 0 9.056 4.03 9.056 9z"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <Ellipse
      cx={10.1}
      cy={10}
      rx={3.01876}
      ry={3}
      stroke="#fff"
      strokeWidth={1.5}
    />
  </Svg>
);

export default React.memo(LocationIcon);
