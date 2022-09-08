import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={17}
      height={18}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.361 14.333c3.586 0 6.493-2.984 6.493-6.666C13.854 3.985 10.947 1 7.36 1 3.776 1 .87 3.985.87 7.667s2.907 6.666 6.492 6.666z"
        stroke="#20222F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.94 16.523l.523.538 1.074-1.047-.523-.537-1.075 1.046zm-2.456-4.671a.75.75 0 00-1.075 1.046l1.075-1.046zm3.53 3.625l-3.53-3.625-1.075 1.046 3.53 3.625 1.075-1.046z"
        fill="#20222F"
      />
    </Svg>
  );
}

export default React.memo(SearchIcon);
