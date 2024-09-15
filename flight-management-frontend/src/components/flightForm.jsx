import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';

const FlightForm = ({ onFlightCreated }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Envia os dados para a API usando uma solicitação POST
      const response = await axios.post('http://localhost:3000/flights', {
        origin: values.origin,
        destination: values.destination,
        date: values.date.format('YYYY-MM-DD HH:mm:ss'),
      });
      
      // Exibe uma mensagem de sucesso
      message.success('Voo cadastrado com sucesso!');

      // Limpa o formulário
      form.resetFields();

      // Chama o callback para atualizar a lista de voos
      if (onFlightCreated) {
        onFlightCreated(response.data); // Passa o voo criado de volta ao componente pai
      }
    } catch (error) {
      message.error('Erro ao cadastrar o voo: ' + (error.response?.data?.message || error.message));
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
        rules={[{ required: true, message: 'Por favor, insira o destino.' }]}
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
          Cadastrar novo voo
        </Button>
        <Button type="primary" htmlType="submit" loading={loading} style={{ marginLeft: '7px' }}>
          Editar voo cadastrado
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlightForm;