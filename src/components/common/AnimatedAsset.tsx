import styled from '@emotion/styled';

const AnimatedAsset = styled.img(
  (props: { cursor?: string; scale?: boolean }) => ({
    cursor: props.cursor || 'auto',
    transition: 'all 200ms linear',
    transform: props.scale ? 'scale(1.2)' : 'scale(1)',
  })
);

export default AnimatedAsset;
