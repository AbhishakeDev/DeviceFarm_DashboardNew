import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';

const DeviceInfo = () => {
  const [deviceDetail1, setDeviceDetail1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);
  const headers1 = {
    Authorization:
      'Bearer 79b374d9c1ba493b824972456e0c5c74d0256e2b8dd0471fac9a6ee4a89b081b',
  };

  // function timeout(delay) {
  //   return new Promise((res) => setTimeout(res, delay));
  // }

  useEffect(() => {
    const fetchInfo = async () => {
      const result1 = await axios.get(`/api1/api/v1/devices`, {
        headers: headers1,
      });
      console.log(result1);
      let arr1 = result1?.data?.devices.map((el) => el.serial);
      setDeviceDetail1(arr1);
      setIsLoading(false);
      setBeingUsed(result1.data.devices[0].using);
    };
    fetchInfo();
  }, [beingUsed]);

  return (
    <>
      <h1 className='subheading'>Provider 1</h1>
     <div className='mid'>
      {isLoading ? (
        <Spinner
          color='dark'
        >
          Loading...
        </Spinner>
      ) : (
        deviceDetail1 &&
        deviceDetail1.map((el, index) => (
          <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api1"/>
        ))
      )}
    </div>
    </>
  );
};

export default DeviceInfo;
