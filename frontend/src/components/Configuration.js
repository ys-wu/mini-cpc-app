import { useState } from 'react';

import { Button, message } from 'antd';

function Configuration({endpoint}) {
  const [ethernetIPs, setEthernetIPs] = useState([]);

  const getEthernetIPs = () => {
    fetch(`${endpoint}/eip`)
      .then(response => response.json())
      .then(responseJson => {
        const ips = responseJson['ips'];
        if (ips.length > 0) {
          setEthernetIPs(ips);
        } else {
          message.info('no Raspberry Pi found.')
        }
      })
      .catch(() => {
        message.error('get ethernet IPs failed.');
      }
    )
  };

  return (
    <div>
      <Button onClick={getEthernetIPs}>
        Get Raspberry Pi Ethernet IPs
      </Button>
      <div>
        {ethernetIPs}
      </div>
    </div>
  );
}

export default Configuration;
