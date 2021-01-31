import styled from '@emotion/styled';
import AnimatedAsset from './AnimatedAsset';

const Card = styled.div((props: { shadow?: string; hover?: boolean }) => ({
  backgroundColor: 'white',
  padding: '1rem',
  boxShadow: props.shadow || '0px 5px 10px #A9A9A933',
  border: '1px solid #ECECEC',
  borderRadius: '4px',
  ':hover': {
    boxShadow: props.hover ? '5px 8px 13px #A9A9A966' : '',
  },
  [`:hover ${AnimatedAsset}`]: {
    transform: 'scale(1.2,1.2)',
  },
}));

export default Card;
