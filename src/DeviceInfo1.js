import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';

const DeviceInfo1 = () => {
  const [deviceDetail2, setDeviceDetail2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  const headers2 = {
    Authorization:
      'Bearer b08255efb866439695382c3f9884b2e4bf1674e85561435c856624806ef795e2',
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
    <>
        <h1 className='subheading'>Provider 2</h1>
    <div className='mid'>
      {
        isLoading ? (
          <Spinner
            color='dark'
          >
            Loading...
          </Spinner>
        ) : (
          deviceDetail2 &&
          deviceDetail2.map((el, index) => (
            <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api2"/>
          ))
        )
      }
    </div>
    </>
  );
};

export default DeviceInfo1;