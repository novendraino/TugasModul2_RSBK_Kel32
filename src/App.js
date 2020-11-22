import React from 'react';
import { Typography, Row, Col, Space, Layout } from 'antd';

import Cards from './components/Cards';
import Links from './components/Links';
import './App.css';
import FotoI from './ino.jpg';
import FotoD from './dinisya.png';

const { Footer, Content } = Layout;
const { Title } = Typography;
const header_space = 20;

const App = () => (
  <div className="App">

    <Layout style={{}}>

      <Row className="my-header">
        <Col span={12} style={{ textAlign: 'start', paddingLeft: '10%' }}>
          <Title level={4}>Kelompok 32</Title>
        </Col>
        <Col span={12}>
          <Space direction="horizontal" size={header_space} >
            <Links href='ino'>Link 1</Links>
            <Links href='dinisya'>Link 2</Links>
          </Space>
        </Col>
      </Row>

      <Content style={{ padding: 10, paddingBottom: '10%', paddingTop: '5%', background: 'white', height: '85vh' }}>
        <Space direction="horizontal" size='large' >
          <Cards nama="Heidy Novendra" nim="21120117130035" img={FotoI}></Cards>
          <Cards nama="Dinisya Zalfa Wafi" nim="21120117130068" img={FotoD}></Cards>
        </Space>
      </Content>

      <Footer style={{ background: 'white', height: '5vh' }}>
        <h2>Tugas Modul 2 - Praktikum RSBK 2020 - Kelompok 32</h2>
      </Footer>

    </Layout>
  </div>
);

export default App;