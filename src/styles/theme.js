import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1536px',
});

const styles = {
  colors: {
    'bg-main': '#192240'
  },
};

export default extendTheme({ breakpoints, ...styles });
