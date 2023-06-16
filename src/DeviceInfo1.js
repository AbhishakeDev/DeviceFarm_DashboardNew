import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';
import arrow from './arrow.png';

const DeviceInfo1 = () => {
  const [deviceDetail2, setDeviceDetail2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  const headers2 = {
    Authorization:
      'Bearer f774b68e0d134f1fb503c318582f524c741316cf84194799957ba4aa098ef560',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const result2 = await axios.get(`/api2/api/v1/devices`, {
        headers: headers2,
      });
      console.log(result2);
      let arr2 = result2?.data?.devices.map((el) => el.serial);
      setDeviceDetail2(arr2);
      setIsLoading(false);
      setBeingUsed(result2.data.devices[0].using);
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
        deviceDetail2 &&
        deviceDetail2.map((el, index) => (
          <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api7"/>
        ))
      )}
    <div className='nav-container'><a target="_blank" href="api7"><img src={arrow} className="arrow" /></a></div>

    </div>
    </div>
  );
};

export default DeviceInfo1;