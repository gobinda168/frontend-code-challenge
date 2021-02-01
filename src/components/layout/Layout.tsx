import styled from '@emotion/styled';

const Layout = styled.div({
  display: 'grid',
  gridTemplateColumns: '240px 1fr',
  height: '100vh',
  backgroundColor: '#f4f4f4',
  '@media(max-width:500px)': {
    gridTemplateColumns: '1fr',
    padding: '0 .5rem',
  },
});

export default Layout;
