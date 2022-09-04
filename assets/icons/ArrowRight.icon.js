import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRightIcon = props => {
  return (
    <Svg
      width={props.width ?? 8}
      height={props.height ?? 12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M1 1l5 5-5 5" stroke="#20222F" strokeWidth={1.5} />
    </Svg>
  );
};

export default React.memo(ArrowRightIcon);
