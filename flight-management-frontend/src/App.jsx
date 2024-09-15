import React, { useState } from 'react';
import { Flex, Layout, Typography } from 'antd';
import FlightForm from './components/flightForm';
import FlightList from './components/FlightList';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [flights, setFlights] = useState([]);

  // Função chamada quando um voo é criado
  const handleFlightCreated = (newFlight) => {
    setFlights([...flights, newFlight]); // Adiciona o novo voo à lista de voos
  };

  return (
    <Layout className="layout">
      <Header style={{ color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: 10 }}>
          Gerenciamento de Voos
        </Title>
      </Header>
      <Content style={{ padding: '105px 752px' }}>
        <div className="site-layout-content">
          <FlightForm onFlightCreated={handleFlightCreated} />
          <FlightList flights={flights} /> {}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', display:Flex}}>
        Flight Management ©2024 - Todos os direitos reservados.
      </Footer>
    </Layout>
  );
};

export default App;