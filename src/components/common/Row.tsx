import styled from '@emotion/styled';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string; margin?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    div: {
      margin: props.spacing || '0',
    },
  })
);

export default Row;
