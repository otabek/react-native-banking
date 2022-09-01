import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const DotIcon = ({size}) => (
  <Svg
    width={size ?? 7}
    height={size ?? 7}
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx={3.5} cy={3.5} r={3.5} fill="#EFEFF1" />
  </Svg>
);

export default React.memo(DotIcon);
