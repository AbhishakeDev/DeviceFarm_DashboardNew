import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import './SingleDevice.css';
import img from '../android.png';
import img2 from '../android2.png';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

const SingleDevice = ({ deviceSerial,endpoint }) => {
  const [beingUsed, setBeingUsed] = useState(false);
  const [device, setDevice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isReserved,setIsReserved] = useState(true);
  const [checked,setChecked] = useState(beingUsed);


  const headers1 = {
    Authorization:
      'Bearer 79b374d9c1ba493b824972456e0c5c74d0256e2b8dd0471fac9a6ee4a89b081b',
  };
  const headers2 = {
    Authorization:
      'Bearer b08255efb866439695382c3f9884b2e4bf1674e85561435c856624806ef795e2',
  };
  const headers3 = {
    Authorization:
      'Bearer 2db5ff785041433696f8dc5c47bd003d60052042983b4c84bbc6db0411d39748',
  };

  useEffect(() => {
    const fetchInfo = async () => {
      // console.log(deviceSerial);
      const result = await axios.get(`/${endpoint}/api/v1/devices/` + deviceSerial, {
        headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
      });
      setDevice(result.data.device);
      setIsLoading(false);
      console.log(result);
      setBeingUsed(result.data.device.using);
      setChecked(result.data.device.using);
      setIsReserved(result.data.device.using)
    };
    fetchInfo();
  }, [isReserved,beingUsed]);

  var reserveDevice = async (seriale) => {
    setIsReserved(true)
    const body = {
      serial: seriale,
    };
    const result = await axios.post(`/${endpoint}/api/v1/user/devices`,body, {
      headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),

    });
    console.log(result);
    if(result.data.status === 200) setIsReserved(true);
    setBeingUsed(true);
  };
  var releaseDevice = async () => {
    setIsReserved(false);
    const result = await axios.delete(`/${endpoint}/api/v1/user/devices/` + deviceSerial, {
              headers: endpoint==="api1"?headers1:(endpoint==="api2"?headers2:headers3),
    });
    console.log(result);
    setBeingUsed(false);
  };

  var handleChange = () => {
    if(checked === true){
      releaseDevice();
    }
    else{
      reserveDevice(deviceSerial);
    }
    setChecked(!checked)
  };

  return (
    <div className={device.present ? 'card Display bg-light mid border' : 'noDisplay'} fluid>
      {isLoading ? (
        <Spinner
          color='primary'
        >
          Loading...
        </Spinner>
      ) : (
        <Tooltip title={device.serial}>
        <div>
          {/* <h4 className='udid'>UDID : {device.serial}</h4> */}
          {isReserved !== true ?  <img
            className='img'
            src={img}
            alt=''
          /> : <img
          className='img'
          src={img2}
          alt=''
        />
        }
        {device.present ? null : <h5 className='busy text'>Not Available</h5>}
          {device.present && (
            <div>
              <h4 className='text'>
                Model : <span>{device.model}</span>
              </h4>
              <h4 className='text'>
                Android OS : <span>{device.version}</span>
              </h4>
              <h4 className='text'>
                Status :
                {beingUsed ? (
                  <span className='busy text'> Busy</span>
                ) : (
                  <span className='free text'> Free</span>
                )}
              </h4>
            </div>
          )}
          <Switch
            checked={checked}
            onChange={handleChange}
            color="primary"
            name="status"
          />
        </div>
        </Tooltip>
      )}
    </div>
  );
};

export default SingleDevice;
