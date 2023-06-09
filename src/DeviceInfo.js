import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';
import arrow from './arrow.png'

const DeviceInfo = () => {
  const [deviceDetail1, setDeviceDetail1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);
  const headers1 = {
    Authorization:
      'Bearer 3843cef74f7042249cc1aca5f0a7d8226673c40d600946c0b7c134eb997dcc77',
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
    <div className='parent-mid'><div className='mid container-mid'>
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
    <div className='nav-container'><a target="_blank" href="api1"><img src={arrow} className="arrow" /></a></div>
    </div>
      </div>
  );
};

export default DeviceInfo;
