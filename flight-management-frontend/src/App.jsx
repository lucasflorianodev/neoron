import React from 'react';
import { Layout, Typography } from 'antd';
import FlightForm from './components/flightForm';
import FlightList from './components/flightList';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          Gerenciamento de Voos
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <FlightForm />
        <FlightList />
      </Content>
    </Layout>
  );
};

export default App;