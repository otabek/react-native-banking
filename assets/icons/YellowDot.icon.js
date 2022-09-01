import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const DotIcon = ({size}) => (
  <Svg
    width={size ?? 9}
    height={size ?? 9}
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx={3.5} cy={3.5} r={3.5} fill="#FFDF6B" />
  </Svg>
);

export default React.memo(DotIcon);
