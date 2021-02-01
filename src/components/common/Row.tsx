import styled from '@emotion/styled';
import AnimatedAsset from './AnimatedAsset';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string; margin?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    div: {
      margin: props.spacing,
    },
  })
);

export default Row;
