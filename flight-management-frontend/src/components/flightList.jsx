import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/flights');
      setFlights(response.data);
    } catch (error) {
      message.error('Erro ao carregar os voos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const columns = [
    { title: 'Código', dataIndex: 'code', key: 'code' },
    { title: 'Origem', dataIndex: 'origin', key: 'origin' },
    { title: 'Destino', dataIndex: 'destination', key: 'destination' },
    { title: 'Data', dataIndex: 'date', key: 'date' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={flights}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default FlightList;