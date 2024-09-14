import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';

const FlightForm = ({ fetchFlights }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5173/flights', {
        origin: values.origin,
        destination: values.destination,
        date: values.date.format('YYYY-MM-DD HH:mm:ss'),
      });
      message.success('Voo criado com sucesso!');
      form.resetFields();
      fetchFlights();
    } catch (error) {
      message.error('Erro ao criar voo: ' + error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" style={{ marginBottom: '50px', padding: '10px'}}>
      <Form.Item
        label="Cidade Origem"
        name="origin"
        rules={[{ required: true, message: 'Por favor, insira a origem!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Cidade Destino"
        name="destination"
        rules={[{ required: true, message: 'Por favor, insira o destino!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Data e Hora"
        name="date"
        rules={[{ required: true, message: 'Por favor, selecione a data e hora!' }]}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Criar Voo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlightForm;