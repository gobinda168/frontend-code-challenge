import styled from '@emotion/styled';

const Card = styled.div((props: { shadow?: string; hover?: boolean }) => ({
  backgroundColor: 'white',
  padding: '1rem',
  boxShadow: props.shadow || '0px 5px 10px #A9A9A933',
  border: '1px solid #ECECEC',
  borderRadius: '4px',
  ':hover': {
    boxShadow: props.hover ? '5px 8px 13px #A9A9A966' : '',
  },
}));

export default Card;
