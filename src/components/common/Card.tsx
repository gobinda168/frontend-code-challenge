import styled from '@emotion/styled';

const Card = styled.div((props: { shadow?: string }) => ({
  backgroundColor: 'white',
  padding: '1rem',
  boxShadow: props.shadow || '0px 5px 10px #A9A9A933',
  border: '1px solid #ECECEC',
  borderRadius: '4px',
}));

export default Card;
