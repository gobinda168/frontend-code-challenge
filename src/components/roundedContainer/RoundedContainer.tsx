import styled from '@emotion/styled';

interface Props {
  borderRadius: string;
}
const RoundedContainer = styled.div((props: Props) => ({
  minWidth: '223px',
  background:
    'transparent linear-gradient(345deg, #262758 0%, #4042B1 100%) 0% 0% no-repeat padding-box',
  borderRadius: props.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
export default RoundedContainer;
