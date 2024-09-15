import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavigationBar = () => {
  return (
    <Header>
      <div className="logo">GOL Linhas Aéreas</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Check-in</Menu.Item>
        <Menu.Item key="3">Status de Voo</Menu.Item>
        <Menu.Item key="4">Ofertas</Menu.Item>
        <Menu.Item key="5">Ajuda</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavigationBar;