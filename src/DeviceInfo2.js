import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';
import arrow from './arrow.png';


const DeviceInfo2 = () => {
  const [deviceDetail3, setDeviceDetail3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  const headers3 = {
    Authorization:
      'Bearer e1cb11616e3343acaa0e031b5fd9abd338812a4964d84dafa93322247f4db169',
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
    <div className='parent-mid'><div className='mid container-mid'>
      {isLoading ? (
        <Spinner
          color='dark'
        >
          Loading...
        </Spinner>
      ) : (
        deviceDetail3 &&
        deviceDetail3.map((el, index) => (
          <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api3"/>
        ))
      )}
    <div className='nav-container'><a target="_blank" href="api3"><img src={arrow} className="arrow" /></a></div>
    </div>
    </div>
  );
};

export default DeviceInfo2;