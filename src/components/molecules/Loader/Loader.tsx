import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import { LoaderWrapper } from './Loader.styles';

const loaderVariants: Variants = {
  initial: { pathLength: 0, pathOffset: 0 },
  animate: {
    pathLength: [0, 0.5, 1, 1, 1, 1],
    pathOffset: [0, 0, 0, 0, 0.5, 1],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear',
    },
  },
};

const Loader = () => {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' width='100' viewBox='0 0 30 28'>
        <title>Loading...</title>
        <motion.path
          initial='initial'
          animate='animate'
          variants={loaderVariants}
          stroke={theme.colors.primary[500]}
          strokeLinecap='square'
          strokeWidth='1'
          fill='transparent'
          transform='translate(1,1)'
          d='M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z'
        />
      </svg>
    </LoaderWrapper>
  );
};

export default Loader;
