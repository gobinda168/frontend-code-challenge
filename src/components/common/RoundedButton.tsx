import styled from '@emotion/styled';

const RoundedButton = styled.button(
  (props: { background?: string; color?: string }) => ({
    backgroundColor: props.background || '#262758',
    outline: 'none',
    color: props.color || 'white',
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    padding: '0 2rem',
    borderRadius: '25px',
    height: '2.7rem',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4648C3',
      color: 'white',
    },
  })
);

export default RoundedButton;
