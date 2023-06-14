import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDevice from './components/SingleDevice';
import { Spinner } from 'reactstrap';
import './DeviceInfo.css';
import arrow from './arrow.png';


const DeviceInfo4 = () => {
  const [deviceDetail3, setDeviceDetail3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [beingUsed, setBeingUsed] = useState(false);

  const headers3 = {
    Authorization:
      'Bearer 192402ab37bd4f42892f0020d155428368c0775bf3c7449b944ab3566bde4d53',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const result3 = await axios.get(`/api5/api/v1/devices`, {
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
          <SingleDevice className='device-card' key={index} deviceSerial={el} endpoint="api5"/>
        ))
      )}
    <div className='nav-container'><a target="_blank" href="api5"><img src={arrow} className="arrow" /></a></div>
    </div>
    </div>
  );
};

export default DeviceInfo4;