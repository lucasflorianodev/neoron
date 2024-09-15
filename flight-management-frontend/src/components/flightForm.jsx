import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';

const FlightForm = ({ fetchFlights }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/flights', {
        origin: values.origin,
        destination: values.destination,
        date: values.date.format('YYYY-MM-DD HH:mm:ss'),
      });
      message.success('Voo cadastrado com sucesso!');
      form.resetFields();
      fetchFlights(); // Atualiza a lista de voos
    } catch (error) {
      message.error('Erro ao cadastrar o voo: ' + error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" style={{ marginBottom: '20px' }}>
      <Form.Item
        label="Origem"
        name="origin"
        rules={[{ required: true, message: 'Por favor, insira a origem!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Destino"
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
          Cadastrar Voo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlightForm;