import React from 'react';
import { Col, Row, Tabs } from 'antd';

import Configuration from './components/Configuration';

const endpoint = process.env.ENDPOINT || 'http://localhost:8000/api';

function App() {
  return (
    <div className="App">
      <Row style={{margin: 20}}>
        <Col span={12} offset={6}>mini-CPC Testing</Col>
      </Row>

      <Row style={{margin: 20}}>
        <Col span={12} offset={6}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: `Configuration`,
                key: '1',
                children: <Configuration endpoint={endpoint}/>,
              },
            ]}
          />
        </Col>
      </Row>

      <Row style={{margin: 50}}>
        <Col span={12} offset={6}>contact: Yusheng Wu</Col>
      </Row>
    </div>
  );
}

export default App;
