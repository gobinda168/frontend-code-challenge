import React, { useEffect, useState } from 'react';
import Body from './components/body/Body';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 500) setShowSidebar(false);
  }, [window.innerWidth]);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Layout>
      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      <Body toggleSidebar={toggleSidebar} />
    </Layout>
  );
};

export default App;
