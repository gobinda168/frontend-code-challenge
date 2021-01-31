import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Body />
    </Layout>
  );
};

export default App;
