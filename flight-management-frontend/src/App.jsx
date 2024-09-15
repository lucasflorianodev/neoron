import React from 'react';
import { Layout, Typography } from 'antd';
import FlightForm from './components/flightForm';
import FlightList from './components/flightList';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className="layout">
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          Gerenciamento de Voos
        </Title>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <FlightForm />
          <FlightList />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Flight Management ©2024 - Todos os direitos reservados.
      </Footer>
    </Layout>
  );
};

export default App;