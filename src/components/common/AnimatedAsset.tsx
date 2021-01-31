import styled from '@emotion/styled';

const AnimatedAsset = styled.img((props: { cursor?: string }) => ({
  cursor: props.cursor || 'auto',
  transition: 'all 200ms linear',
  ':hover': {
    transform: 'scale(1.2,1.2)',
  },
}));

export default AnimatedAsset;
