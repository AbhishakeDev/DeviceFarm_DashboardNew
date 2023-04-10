import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';

const DeviceInfo2 = () => {
  const [deviceDetail3, setDeviceDetail3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  const headers3 = {
    Authorization:
      'Bearer 425f8b68e97c4fc39419894cde132d3f14db6dd4434040a38a954995b98fb03e',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const result3 = await axios.get(`/api3/api/v1/devices`, {
        headers: headers3,
      });
      console.log(result3);
      let arr3 = result3?.data?.devices.map((el) => el.serial);
      setDeviceDetail3(arr3);
      setIsLoading(false);
      setBeingUsed(result3.data.devices[0].using);
    };
    fetchInfo();
  }, [beingUsed]);

  return (
    <div className='mid'>
        <h1 className='heading'>Provider 3</h1>
      {
        isLoading ? (
          <Spinner
            color='dark'
            style={{
              height: '15rem',
              width: '15rem',
            }}
          >
            Loading...
          </Spinner>
        ) : (
          deviceDetail3 &&
          deviceDetail3.map((el, index) => (
            <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api3"/>
          ))
        )
      }
    </div>
  );
};

export default DeviceInfo2;