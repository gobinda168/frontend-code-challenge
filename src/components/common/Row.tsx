import styled from '@emotion/styled';
import AnimatedAsset from './AnimatedAsset';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string; margin?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    div: {
      margin: props.spacing || '0',
    },
    [`:hover ${AnimatedAsset}`]: {
      transform: 'scale(1.2,1.2)',
    },
  })
);

export default Row;
