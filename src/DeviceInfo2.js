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
      'Bearer 8bd7715eb63346acaec3bf0247266e11bbfaf233df224981815a45f75527f52f',
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
    <>
        <h1 className='subheading'>Provider 3</h1>
    <div className='mid'>
      {
        isLoading ? (
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
        )
      }
    </div>
    </>
  );
};

export default DeviceInfo2;